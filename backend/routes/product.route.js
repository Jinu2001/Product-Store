import express from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.get("/", getAllProducts);

router.get("/:id", getProduct);

router.put("/:id", updateProduct);

export default router;
