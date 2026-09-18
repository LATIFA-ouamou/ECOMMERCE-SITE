import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./components/layouts/MainLayout";
import ProductCard from "./components/product/ProductCard";

import AuthPage from "./pages/AuthPage";
import Shop from "./pages/Shop";
import AdminPage from "./pages/admin/AdminPage";
import ProductPage from "./components/product/ProductPage";
import ProductList from "./components/product/ProductList";
import ShopPage from "./pages/ShopPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/auth" element={<AuthPage />} />

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPage />} />
           <Route path="/Shop" element={<ShopPage/>} />

            <Route path="/:id" element={<ProductList />}>
            <Route index element={<ProductPage />} />
            {/* <Route path="edit" element={<EditNote />} /> */}
          </Route>
        </Route>
          <Route path="/adminPage" element={<AdminPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}