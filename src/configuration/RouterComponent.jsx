import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AdminEdit from "../pages/company-views/AdminEdit";
import AdminViewAll from "../pages/company-views/AdminViewAll";
import AdminShow from "../pages/company-views/AdminShow";
import AdminForm from "../pages/company-views/AdminForm";
import Cart from "../pages/Cart";

export default function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/category/:id" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/products" element={<AdminViewAll />} />
      <Route path="/admin/product/:id" element={<AdminShow />} />
      <Route path="/admin/products/create" element={<AdminForm />} />
      <Route path="/admin/products/delete/:id" element={<AdminEdit />} />
      <Route path="/admin/products/update/:id" element={<AdminForm />} />
    </Routes>
  )
}