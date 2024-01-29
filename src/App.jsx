import { Routes, Route } from "react-router-dom";
import "./server";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import ProdInfoPage from "./components/ProdInfoPage";
import NavigateLayout from "./components/NavigateLayout";
import About from "./pages/About";
import Notify from "./pages/Notify";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<NavigateLayout />}>
            <Route index element={<Products />} />
            <Route path="products-page/:type" element={<ProductPage />} />
          </Route>
          <Route path="details-page/:id/:category" element={<ProdInfoPage />} />
          <Route path="about" element={<About />} />
          <Route path="notify" element={<Notify />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
