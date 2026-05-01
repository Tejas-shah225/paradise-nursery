import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";
import { Link } from "react-router-dom";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents", img: "https://via.placeholder.com/100" },
  { id: 2, name: "Snake Plant", price: 15, category: "Succulents", img: "https://via.placeholder.com/100" },
  { id: 3, name: "Peace Lily", price: 20, category: "Flowering", img: "https://via.placeholder.com/100" },
  { id: 4, name: "Rose", price: 25, category: "Flowering", img: "https://via.placeholder.com/100" },
  { id: 5, name: "Money Plant", price: 12, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 6, name: "Bamboo", price: 18, category: "Indoor", img: "https://via.placeholder.com/100" }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const isAdded = (id) => cart.some(item => item.id === id);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/plants">Plants</Link> | 
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>

      <h2>Plants</h2>

      {["Succulents", "Flowering", "Indoor"].map(category => (
        <div key={category}>
          <h3>{category}</h3>
          {plants.filter(p => p.category === category).map(p => (
            <div key={p.id}>
              <img src={p.img} alt={p.name} />
              <h4>{p.name}</h4>
              <p>${p.price}</p>
              <button
                onClick={() => dispatch(addToCart(p))}
                disabled={isAdded(p.id)}
              >
                {isAdded(p.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;