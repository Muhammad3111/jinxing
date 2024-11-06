import { Request, Response, RequestHandler } from "express";
import pool from "../database";
import upload from "../middleware/upload";

// Create a new product

export const createProduct: RequestHandler = async (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { name, description, price, stock, category_id, is_favorite } =
      req.body;
    const image_url = req.file ? `/uploads/${req.file.filename}` : null;

    try {
      const query = `
            INSERT INTO products (name, description, price, stock, category_id, image_url, is_favorite)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *;
          `;
      const values = [
        name,
        description,
        price,
        stock,
        category_id,
        image_url,
        is_favorite || false,
      ];
      const result = await pool.query(query, values);

      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ error: "Error creating product" });
    }
  });
};
// Get all products
export const getAllProducts: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await pool.query(
      "SELECT * FROM products ORDER BY created_at DESC"
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({ error: "Error retrieving products" });
  }
};

// Get a single product by ID
export const getProductById: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  try {
    const query = "SELECT * FROM products WHERE id = $1";
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    console.error("Error retrieving product:", error);
    res.status(500).json({ error: "Error retrieving product" });
  }
};

// Update a product
export const updateProduct: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const {
    name,
    description,
    price,
    stock,
    category_id,
    image_url,
    is_favorite,
  } = req.body;

  try {
    const query = `
      UPDATE products
      SET name = $1, description = $2, price = $3, stock = $4, category_id = $5,
          image_url = $6, is_favorite = $7, updated_at = CURRENT_TIMESTAMP
      WHERE id = $8
      RETURNING *;
    `;
    const values = [
      name,
      description,
      price,
      stock,
      category_id,
      image_url,
      is_favorite,
      id,
    ];
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Error updating product" });
  }
};

// Delete a product
export const deleteProduct: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  try {
    const query = "DELETE FROM products WHERE id = $1 RETURNING *";
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res
        .status(200)
        .json({ message: "Product deleted", product: result.rows[0] });
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Error deleting product" });
  }
};
