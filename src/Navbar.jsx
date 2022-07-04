import React from "react";
import { NavLink } from "react-router-dom";



const Navbar = ()=>{
  return(
    <div className="navbar">
     <NavLink exact activeClassName="active_class"  to='/home'>Home</NavLink>
     <NavLink exact activeClassName="active_class" to='/about'>About</NavLink>
     <NavLink exact activeClassName="active_class" to='/contact'>Contact Us</NavLink>

    </div>
  )
}

export default Navbar;
