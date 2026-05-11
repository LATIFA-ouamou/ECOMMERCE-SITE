import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./components/layouts/MainLayout";
import ProductCard from "./components/product/ProductCard";

import AuthPage from "./pages/AuthPage";
import Shop from "./pages/Shop";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />

          
           <Route path="/Shop" element={<Shop/>} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}