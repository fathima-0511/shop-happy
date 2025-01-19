import React from 'react';
import {Link} from 'react-router-dom';
import { FaShopify } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import '../Navbar/Nav.css';

const Nav = () => {
  return (
    <div className="nav">
        <div className="top-nav">
            <div className="logo">
              <span><b>Shop-Happy</b></span>
              <FaShopify/>
            </div>
            <form className="search-box">
              <input type="text" placeholder='Search Products...' />
              <button><IoSearchCircle/></button>
            </form>
            <div className="cart">
            <FaShoppingCart/>
              <span>0</span>
            </div>
        </div>
        <div className="bottom-nav">
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li>Cart</li>
            <li>Contact</li>
        </div>
    </div>
  )
}

export default Nav