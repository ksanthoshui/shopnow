import mongoose from "mongoose";
import productModel from "../modules/productModel.js";
import products from "./seedproduct.js";
import dotenv from "dotenv";


dotenv.config();

await mongoose.connect(process.env.MONGODB_URI);

const seedData = async () => {
  try {

    // Remove existing products
    await productModel.deleteMany();

    // Insert new products
    await productModel.insertMany(products);

    console.log("Products seeded successfully");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }
};

seedData();
