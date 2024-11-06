import pool from "../database";

const createAddressesTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS addresses (
      id SERIAL PRIMARY KEY,
      customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
      address TEXT NOT NULL,
      is_primary BOOLEAN DEFAULT false,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await pool.query(query);
  console.log("Addresses table created");
};

export default createAddressesTable;
