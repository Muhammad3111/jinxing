import { Request, RequestHandler, Response } from "express";
import pool from "../database";

// Xarajat yaratish
export const createExpense: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { description, amount, expense_date } = req.body;

  try {
    const query = `
      INSERT INTO expenses (description, amount, expense_date)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [description, amount, expense_date || new Date()];

    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating expense:", error);
    res.status(500).json({ error: "Error creating expense" });
  }
};

// Xarajatlarni o'qish (barchasi yoki ID bo'yicha)
export const getExpenses: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  try {
    const query = id
      ? "SELECT * FROM expenses WHERE id = $1"
      : "SELECT * FROM expenses ORDER BY expense_date DESC";
    const values = id ? [id] : [];

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      res.status(404).json({ error: "Expense not found" });
    }

    res.status(200).json(id ? result.rows[0] : result.rows);
  } catch (error) {
    console.error("Error fetching expenses:", error);
    res.status(500).json({ error: "Error fetching expenses" });
  }
};

// Xarajatni yangilash
export const updateExpense: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const { description, amount, expense_date } = req.body;

  try {
    const query = `
      UPDATE expenses
      SET description = COALESCE($1, description),
          amount = COALESCE($2, amount),
          expense_date = COALESCE($3, expense_date),
          updated_at = CURRENT_TIMESTAMP
      WHERE id = $4
      RETURNING *;
    `;
    const values = [description, amount, expense_date, id];

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      res.status(404).json({ error: "Expense not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error updating expense:", error);
    res.status(500).json({ error: "Error updating expense" });
  }
};

// Xarajatni o'chirish
export const deleteExpense: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  try {
    const query = "DELETE FROM expenses WHERE id = $1 RETURNING *;";
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      res.status(404).json({ error: "Expense not found" });
    }

    res.status(200).json({
      message: "Expense deleted successfully",
      deleted: result.rows[0],
    });
  } catch (error) {
    console.error("Error deleting expense:", error);
    res.status(500).json({ error: "Error deleting expense" });
  }
};
