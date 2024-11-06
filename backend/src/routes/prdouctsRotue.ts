import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
} from "../controllers/products";
import { updateCategory } from "../controllers/categories";

const router = express.Router();

router.post("/create", createProduct);
router.get("/", getAllProducts);
router.put("/:id", updateCategory);
router.delete("/:id", deleteProduct);

export default router;
