import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import DropdownMenu from '../pages/DropdownMenu';

const Navbar = () => {
  const { cartItems } = useCart();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className="navbar-section">
      <div className="navsection">
        <div className="title">
          <h2>
            <Link to="/" className="home-link">E-Mart</Link>
          </h2>
        </div>
        <div className="search">
          <input type="text" placeholder="search.." className="search1" />
        </div>
        
        <div className="Signin" ref={dropdownRef}>
          <button className="login-button" onClick={toggleDropdown}>My Profile</button>
          <DropdownMenu isOpen={isDropdownOpen} />
        </div>
        
        <Link to="/cart">
          <div className="cart">Cart
            <span>{cartItems.length}</span>
          </div>
        </Link>
      </div>
      <div className="submenu">
        <ul>
          <li>
            <Link to="/mobiles">Mobiles</Link>
          </li>
          <li>
            <Link to="/computers">Computers</Link>
          </li>
          <li>
            <Link to="/refrigerators">Refrigerators</Link>
          </li>
          <li>
            <Link to="/airconditioners">Air Conditioners</Link>
          </li>
          <li>
            <Link to="/watches">Watches</Link>
          </li>
          <li>
            <Link to="/kitchen">Kitchen</Link>
          </li>
          <li>
            <Link to="/television">Television</Link>
          </li>
          <li>
            <Link to="/menswear">Men's Wear</Link>
          </li>
          <li>
            <Link to="/womenswear">Women's Wear</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
