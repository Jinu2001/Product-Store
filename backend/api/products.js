import mongoose from "mongoose";
import Product from "../models/product.model.js";

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const products = await Product.find({});
      return res.status(200).json({ success: true, data: products });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  } else if (req.method === "POST") {
    const product = req.body;
    if (!product.name || !product.price || !product.image) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    try {
      const newProduct = new Product(product);
      await newProduct.save();
      return res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  } else {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
