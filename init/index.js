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
    // This will pull the MONGO_URI from your .env file in the parent folder
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully...");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

connectDB();

const initDB = async () => {
  try {
    // 1. Wipe out existing listings
    await Listing.deleteMany({});
    
    // 2. Map through the listings to add BOTH the owner and the required geometry fields
    const seedData = initData.data.map((obj) => ({
      ...obj,
      owner: "67461f7a5f28b23a7030e4e4", // Keeps default setup
      geometry: { type: "Point", coordinates: [0, 0] } // Fixes the missing geometry crash!
    }));

    // 3. Insert into Atlas cloud
    await Listing.insertMany(seedData);
    console.log("Data was initialized successfully with geometries!");
    
    // Close connection when done
    mongoose.connection.close();
  } catch (err) {
    console.error("Seeding Error:", err.message);
  }
};

initDB();