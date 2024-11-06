import { Request, RequestHandler, Response } from "express";
import pool from "../database";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";

export const createCustomer: RequestHandler = async (req, res) => {
  const { name, phone_number, password } = req.body;

  try {
    // Parolni hash qilish
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `
      INSERT INTO customers (name, phone_number, password)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [name, phone_number, hashedPassword];

    const result = await pool.query(query, values);
    const user = result.rows[0];

    // Token yaratmasdan foydalanuvchi ma'lumotlarini qaytarish
    res.status(201).json({ user });
  } catch (err) {
    console.error("Error creating customer:", err);
    res.status(500).json({ error: "Error creating customer" });
  }
};

export const createSuperadmin: RequestHandler = async (req, res) => {
  const { name, phone_number, password, secretCode } = req.body;

  const validSecretCode = "3111";

  if (secretCode !== validSecretCode) {
    res.status(403).json({ error: "Invalid secret code" });
  }

  try {
    // Parolni hash qilish
    const hashedPassword = await bcrypt.hash(password, 10);

    // Mavjud superadminlar sonini tekshirish
    const checkSuperadmin = await pool.query(
      "SELECT * FROM customers WHERE role = $1",
      ["superadmin"]
    );

    if (checkSuperadmin.rows.length > 0) {
      res.status(400).json({ error: "Superadmin already exists" });
    }

    const query = `
      INSERT INTO customers (name, phone_number, password, role)
      VALUES ($1, $2, $3, 'superadmin')
      RETURNING *;
    `;
    const values = [name, phone_number, hashedPassword];

    const result = await pool.query(query, values);
    const user = result.rows[0];

    // Token yaratmasdan foydalanuvchi ma'lumotlarini qaytarish
    res.status(201).json({ user });
  } catch (err) {
    console.error("Error creating superadmin:", err);
    res.status(500).json({ error: "Error creating superadmin" });
  }
};

export const loginUser: RequestHandler = async (req, res) => {
  const { phone_number, password } = req.body;

  try {
    const query = "SELECT * FROM customers WHERE phone_number = $1";
    const result = await pool.query(query, [phone_number]);

    if (result.rows.length === 0) {
      res.status(404).json({ error: "Customer not found" });
    }

    const customer = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, customer.password);

    if (!isPasswordValid) {
      res.status(401).json({ error: "Invalid credentials" });
    }

    // Token yaratish va rolni qo'shish
    const token = generateToken(customer.id, customer.role);

    // Foydalanuvchi ma'lumotlari va tokenni qaytarish
    res.status(200).json({
      user: {
        id: customer.id,
        name: customer.name,
        phone_number: customer.phone_number,
        role: customer.role,
        created_at: customer.created_at,
        updated_at: customer.updated_at,
      },
      token,
    });
  } catch (err) {
    console.error("Error logging in customer:", err);
    res.status(500).json({ error: "Error logging in customer" });
  }
};

// Mijozlar ro'yxatini olish (GET /customers)
export const getUsers: RequestHandler = async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM customers");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching customers:", err);
    res.status(500).json({ error: "Error fetching customers" });
  }
};

// Bitta mijozni olish (GET /customers/:id)
export const getUserById: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM customers WHERE id = $1", [
      id,
    ]);

    if (result.rows.length === 0) {
      res.status(404).json({ error: "Customer not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching customer:", err);
    res.status(500).json({ error: "Error fetching customer" });
  }
};

// Mijozni yangilash (PUT /customers/:id)
export const updateUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const { name, phone_number, password } = req.body;

  try {
    // Parolni hash qilish, agar yangilanishi kerak bo'lsa
    const hashedPassword = password
      ? await bcrypt.hash(password, 10)
      : undefined;

    const query = `
        UPDATE customers
        SET name = COALESCE($1, name),
            phone_number = COALESCE($2, phone_number),
            password = COALESCE($3, password),
            updated_at = CURRENT_TIMESTAMP
        WHERE id = $4
        RETURNING *;
      `;
    const values = [name, phone_number, hashedPassword, id];

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      res.status(404).json({ error: "Customer not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error updating customer:", err);
    res.status(500).json({ error: "Error updating customer" });
  }
};

// Mijozni o'chirish (DELETE /customers/:id)
export const deleteUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM customers WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: "Customer not found" });
    }

    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (err) {
    console.error("Error deleting customer:", err);
    res.status(500).json({ error: "Error deleting customer" });
  }
};
