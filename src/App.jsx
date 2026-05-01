import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <div className="landing-page">
              <div className="landing-content">
                <h1>Paradise Nursery 🌿</h1>
                <p>Your one-stop shop for beautiful plants</p>

                <Link to="/plants">
                  <button>Get Started</button>
                </Link>
              </div>
            </div>
          }
        />

        {/* Product Page */}
        <Route path="/plants" element={<ProductList />} />

        {/* Cart Page */}
        <Route path="/cart" element={<CartItem />} />

        {/* About Page */}
        <Route path="/about" element={<AboutUs />} />

      </Routes>
    </Router>
  );
};

export default App;