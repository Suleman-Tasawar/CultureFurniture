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
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import { ShoppingProvider } from "./ShoppingContex"; // Import the context provider

function App() {
  return (
    <div>
      {/* Wrap the routes with MyContextProvider */}
      <ShoppingProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<NavigateLayout />}>
              <Route index element={<Products />} />
              <Route path="products-page/:type" element={<ProductPage />} />
            </Route>
            <Route
              path="details-page/:id/:category"
              element={<ProdInfoPage />}
            />
            <Route path="checkout" element={<Checkout />} />
            <Route path="about" element={<About />} />
            <Route path="notify" element={<Notify />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ShoppingProvider>
    </div>
  );
}

export default App;
