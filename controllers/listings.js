const Listing = require("../Models/listing");
const axios = require("axios");

const weatherApiKey = process.env.OPENWEATHER_API_KEY;
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather"; // Direct Free Endpoint
const DEFAULT_OWNER_ID = "SamtheDev";

// Safe mock placeholder to prevent createListing/updateListing from crashing on startup
const geocodingClient = {
  forwardGeocode: () => ({
    send: async () => ({
      body: {
        features: [
          { geometry: { type: "Point", coordinates: [14.485, 40.6281] } },
        ], // Defaults to your Amalfi coordinates fallback
      },
    }),
  }),
};

module.exports.index = async (req, res) => {
  try {
    const allListings = await Listing.find();
    res.render("listings/index.ejs", { allListings });
  } catch (error) {
    console.error("Error fetching listings:", error);
    req.flash("error", "Could not fetch listings.");
    res.redirect("/listings");
  }
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  try {
    const listing = await Listing.findById(id)
      .populate({ path: "reviews", populate: { path: "author" } })
      .populate("owner");

    if (!listing) {
      req.flash("error", "Listing does not Exist!");
      return res.redirect("/listings");
    }

    // Get coordinates for map
    const coordinates = listing.geometry.coordinates;

    let weather = null; // Default to null if fetch fails

    // LIVE WEATHER FETCH BLOCK - RISK FREE
    if (weatherApiKey && coordinates && coordinates.length >= 2) {
      try {
        const weatherResponse = await axios.get(
          `${weatherUrl}?lat=${coordinates[1]}&lon=${coordinates[0]}&units=metric&appid=${weatherApiKey}`
        );
        const weatherData = weatherResponse.data;

        // Map live stats to your exact EJS variable names
        weather = {
          city: weatherData.name || listing.location,
          temperature: Math.round(weatherData.main.temp),
          humidity: weatherData.main.humidity,
          minTemperature: Math.round(weatherData.main.temp_min),
          maxTemperature: Math.round(weatherData.main.temp_max),
          description: weatherData.weather[0].description,
          feelsLike: Math.round(weatherData.main.feels_like),
          icon: weatherData.weather[0].icon,
        };
      } catch (apiError) {
        console.error(
          "OpenWeather API fetch failed, falling back to null:",
          apiError.message
        );
      }
    }

    res.render("listings/show.ejs", { listing, coordinates, weather });
  } catch (error) {
    console.error("Error fetching weather data:", error);
    req.flash("error", "Failed to retrieve weather information.");
    res.redirect(`/listings/${id}`);
  }
};

module.exports.createListing = async (req, res, next) => {
  try {
    console.log("Request Body:", req.body);

    const geoResponse = await geocodingClient
      .forwardGeocode({ query: req.body.listing.location, limit: 1 })
      .send();

    if (!geoResponse.body.features.length) {
      req.flash("error", "Invalid location. Please try again.");
      return res.redirect("/listings/new");
    }

    const geometry = geoResponse.body.features[0].geometry;

    const imageUrl =
      req.body.listing.imageUrl ||
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const newListing = new Listing({
      ...req.body.listing,
      owner: req.user?._id || DEFAULT_OWNER_ID,
      image: { url: imageUrl },
      geometry,
    });

    console.log("New Listing Object:", newListing);
    await newListing.save();

    req.flash("success", "New listing created successfully!");
    res.redirect(`/listings/${newListing._id}`);
  } catch (err) {
    console.error("Error in createListing:", err);
    req.flash("error", "Failed to create listing. Please try again.");
    res.redirect("/listings/new");
  }
};

module.exports.editForm = async (req, res) => {
  let { id } = req.params;
  try {
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing does not Exist!");
      return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
  } catch (error) {
    console.error("Error fetching listing for edit:", error);
    req.flash("error", "Could not fetch listing for editing.");
    res.redirect("/listings");
  }
};

module.exports.updateListing = async (req, res) => {
  if (!req.body.listing) {
    throw new Error("Send Valid Data for Listing");
  }

  let { id } = req.params;
  try {
    const geoResponse = await geocodingClient
      .forwardGeocode({ query: req.body.listing.location, limit: 1 })
      .send();

    if (!geoResponse.body.features.length) {
      req.flash("error", "Invalid location. Please try again.");
      return res.redirect(`/listings/${id}/edit`);
    }

    const updatedGeometry = geoResponse.body.features[0].geometry;

    await Listing.findByIdAndUpdate(id, {
      ...req.body.listing,
      geometry: updatedGeometry,
    });

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
  } catch (error) {
    console.error("Error updating listing:", error);
    req.flash("error", "Failed to update listing.");
    res.redirect(`/listings/${id}/edit`);
  }
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  try {
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
  } catch (error) {
    console.error("Error deleting listing:", error);
    req.flash("error", "Failed to delete listing.");
    res.redirect("/listings");
  }
};

module.exports.searchListings = async (req, res) => {
  const { query } = req.query;
  let allListings = [];
  if (query) {
    const regex = new RegExp(escapeRegex(query), "i");
    allListings = await Listing.find({ title: regex });
  }
  res.render("listings/index", { allListings });
};

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
