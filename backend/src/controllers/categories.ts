import { Request, Response, RequestHandler } from "express";
import pool from "../database";

// Create a new category
export const createCategory: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { name, description } = req.body;

  try {
    const query = `
      INSERT INTO categories (name, description)
      VALUES ($1, $2)
      RETURNING *;
    `;
    const values = [name, description];
    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Error creating category" });
  }
};

// Get all categories
export const getAllCategories: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await pool.query(
      "SELECT * FROM categories ORDER BY created_at DESC"
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error retrieving categories:", error);
    res.status(500).json({ error: "Error retrieving categories" });
  }
};

// Get a single category by ID
export const getCategoryById: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  try {
    const query = "SELECT * FROM categories WHERE id = $1";
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      res.status(404).json({ error: "Category not found" });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    console.error("Error retrieving category:", error);
    res.status(500).json({ error: "Error retrieving category" });
  }
};

// Update a category
export const updateCategory: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const query = `
      UPDATE categories
      SET name = $1, description = $2, updated_at = CURRENT_TIMESTAMP
      WHERE id = $3
      RETURNING *;
    `;
    const values = [name, description, id];
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      res.status(404).json({ error: "Category not found" });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ error: "Error updating category" });
  }
};

// Delete a category
export const deleteCategory: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  try {
    const query = "DELETE FROM categories WHERE id = $1 RETURNING *";
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      res.status(404).json({ error: "Category not found" });
    } else {
      res
        .status(200)
        .json({ message: "Category deleted", category: result.rows[0] });
    }
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ error: "Error deleting category" });
  }
};


