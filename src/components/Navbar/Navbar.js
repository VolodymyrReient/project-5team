import React from 'react';
import {NavLink} from "react-router-dom";
<<<<<<< HEAD
import "./navbar.css"
function Navbar() {
=======
// import Home from "../Home/Home";
// import Charts from "../Charts/Charts";
// import Categories from "../Categories/Categories";

function Navbar(props) {

>>>>>>> c91a0ab96dc7b782c793cba7e69b6e79ced90a6f
    return (
        <nav className='navbar'>
            <div className="navbar-wrapper">
            <div><NavLink to="/home" >Home</NavLink></div>
            <div><NavLink to="/charts" >Charts</NavLink></div>
            <div><NavLink to="/categories">Categories</NavLink></div>
            </div>
           
           
        </nav>
    )
}

export default Navbar;
