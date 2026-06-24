// const mongoose = require("mongoose");
// const initData = require("./data");
// const Listing = require("../Models/listing");
// require("dotenv").config({ path: "../.env" });

// // DB Connection
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB Connected Successfully...");
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err.message);
//     process.exit(1);
//   }
// };

// connectDB();

// const initDB = async () => {
//   await Listing.deleteMany({});
//   initData.data = initData.data.map((obj) => ({
//     ...obj,
//     owner: "67461f7a5f28b23a7030e4e4",
//   }));
//   await Listing.insertMany(initData.data);
//   console.log("Data was initialized");
// };

// initDB();

const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../Models/listing");
require("dotenv").config({ path: "../.env" });

// DB Connection
const connectDB = async () => {
  try {
    // 1. Force the database to use 'booking_app' even if the .env string forgot it
    let uri = process.env.MONGO_URI;
    
    // If the URI doesn't explicitly name a database, append booking_app before the options query parameters
    if (uri.includes("mongodb.net/`") || uri.endsWith("mongodb.net/")) {
        uri = uri.replace("mongodb.net/", "mongodb.net/booking_app");
    } else if (uri.includes("mongodb.net/?") || uri.includes("mongodb.net/?")) {
        uri = uri.replace("mongodb.net/?", "mongodb.net/booking_app?");
    }

    await mongoose.connect(uri);
    console.log("MongoDB Connected Successfully to folder: booking_app...");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

connectDB();

const initDB = async () => {
  try {
    // Wipe out existing listings
    await Listing.deleteMany({});

    // Map through listings cleanly
    const seedData = initData.data.map((obj) => ({
      ...obj,
      owner: "67461f7a5f28b23a7030e4e4", 
      // If obj.geometry exists from data.js, use it! Otherwise, fall back to a default location
      geometry: obj.geometry && obj.geometry.coordinates ? obj.geometry : { type: "Point", coordinates: [14.5682, 68.2343] }
    }));

    // Insert into Atlas cloud
    await Listing.insertMany(seedData);
    console.log("Database seeded successfully 🚀");

    // Close connection when done
    mongoose.connection.close();
  } catch (err) {
    console.error("Seeding Error:", err.message);
  }
};

initDB();