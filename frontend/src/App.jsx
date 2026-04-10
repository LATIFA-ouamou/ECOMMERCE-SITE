import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/auth/login";
import Register from "./components/auth/Register";
import MainLayout from "./components/layouts/MainLayout";
import ProductCard from "./components/product/ProductCard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productCard" element={<ProductCard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}