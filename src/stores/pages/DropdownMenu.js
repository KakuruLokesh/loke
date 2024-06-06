import React from 'react';
import './drop.css';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ isOpen }) => {
  return (
    <div className={`dropdown ${isOpen ? 'show' : ''}`}>
      <div className="dropdown-content">
        <a href="#"><Link to='/login'>Login</Link></a>
        <a href="#"><Link to='/register'>NewCustomer SignUP</Link></a>
        <a href="#">Orders</a>
        <a href="#">Wishlist</a>
        <a href="#">Rewards</a>
        <a href="#">Gift Cards</a>
      </div>
    </div>
  );
};

export default DropdownMenu;
