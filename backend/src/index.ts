import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import createCustomersTable from "./models/customers";
import createAddressesTable from "./models/adresses";
import createCategoriesTable from "./models/categories";
import createProductsTable from "./models/products";
import createOrdersTable from "./models/orders";
import createOrderItemsTable from "./models/orderItems";
import createCartTable from "./models/cart";
import createExpensesTable from "./models/expenses";
import usersRoute from "./routes/usersRoute";
import categoriesRoute from "./routes/categoriesRoute";
import productsRoute from "./routes/prdouctsRotue";
import expensesRoute from "./routes/expensesRoute";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/users", usersRoute);
app.use("/categories", categoriesRoute);
app.use("/products", productsRoute);
app.use("/expenses", expensesRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Jinxing Market API");
});

const createTables = async () => {
  try {
    await createCustomersTable();
    await createAddressesTable();
    await createCategoriesTable();
    await createProductsTable();
    await createOrdersTable();
    await createOrderItemsTable();
    await createCartTable();
    await createExpensesTable();
    console.log("All tables created successfully");
  } catch (err) {
    console.error("Error creating tables:", err);
  }
};

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  createTables();
});
