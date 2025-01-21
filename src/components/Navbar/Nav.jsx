import React from 'react';
import {Link} from 'react-router-dom';
import { FaShopify } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import '../Navbar/Nav.css';

const Nav = () => {
  return (
       <div className="navBar">
            <div className="logo">
              <span><b>Shop-Happy</b></span>
              <span className='fs-2'><FaShopify/></span>
            </div>
            <form className="search-box">
              <input type="text" placeholder='Search Products...' />
              <button><IoSearchCircle/></button>
            </form>

            <div className="nested-nav">
            <li><Link to='/home' className='text-white'>Home</Link></li>
            <li><Link to='/shop' className='text-white'>Shop</Link></li>
            <li>Cart</li>
            <li>Contact</li>
            </div>

            <div className="cart">
              <BsCart2/>
              <span>0</span>
            </div>

            <div className='loginBtn'>
              <FaRegCircleUser/>
              <span>LogIn</span>
            </div>
        </div>
  )
}

export default Nav