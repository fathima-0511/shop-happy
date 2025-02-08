import React from 'react';
import {Link} from 'react-router-dom'; 
import { GoSearch } from "react-icons/go";
import '../Navbar/Nav.css';

const Nav = () => {
  return (
    <>
      <div className='add'>
        <center>Free shipping on orders $40+</center>
      </div>
       <div className="navBar">
            <div className='search-box'>
              <GoSearch style={{fill:'white'}}/>
             </div>
            <div className="logo"> 
              <span><b>Shop-Happy</b></span>
            </div>
            {/*<form className="search-box">
              <input type="text" placeholder='Search Products...' />
              <button><IoSearchCircle/></button>
            </form>*/}

            <div className="cart position-relative">
            <i class="bi bi-handbag"></i>
              <span className='badge rounded  rounded-circle bg-danger'>0</span>
            </div>
        </div>

        <div className='bottom-nav'>
            <li><Link to='/home' className="custom-link">Home</Link></li>
            <li><Link to='/shop' className="custom-link">Appliances</Link></li>
            <li className="custom-link">Jewellery</li>
            <li><Link to='/electronics' className="custom-link">Electronics</Link></li>
            <li className="nav-item dropdown" style={{color:'#c9c3c3'}}>
                <a className="dropdown-toggle custom-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </a>
                <ul className="dropdown-menu" style={{backgroundColor:'rgba(1, 0, 59, 0.918)'}}>
                  <li><a className="custom-dropdown-item custom-link" href="#" >Our Story</a></li>
                  <li><a className="custom-dropdown-item custom-link" href="#" >Blog</a></li>
                  <li><a className="custom-dropdown-item custom-link" href="#" >Contact</a></li>
                </ul>
            </li>


            {/*<div className='loginBtn'>
              <FaRegCircleUser/>
              <span>LogIn</span>
            </div>*/}
        </div>

        </>
  )
}

export default Nav;