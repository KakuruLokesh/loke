import React from 'react';
import { useCart } from './CartContext';
import Navbar from '../components/Navbar';
import './cart.css'

const UserCart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <>
      <Navbar />
      <div className="user-cart-container">
        <h2 className="y-cart">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty">Your Cart is Empty</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => {
              return (
                <div className="cart-section" key={item.id}>
                  <div className="cart-img">
                    <img src={item.image} alt={item.product} />
                  </div>
                  <div className="cart-details">
                    <h3 className="product-name">{item.product}</h3>
                    <h2 className="product-price">{item.price}</h2>
                    <h3 className="product-model">{item.model}</h3>
                  </div>
                  <button
                    className="removeBtn"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default UserCart;
