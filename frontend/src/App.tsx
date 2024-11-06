import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Expenses from "./pages/Expenses";
import Categories from "./pages/Categories";
import AdminProfile from "./pages/AdminProfile";
import AddOrder from "./components/orders/AddOrder";
import AddCategory from "./components/categories/AddCategory";
import AddProduct from "./components/adminproducts/AddProduct";
import AddCustomer from "./components/customers/AddCustomer";
import AddExpense from "./components/expenses/AddExpense";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/add-order" element={<AddOrder />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
