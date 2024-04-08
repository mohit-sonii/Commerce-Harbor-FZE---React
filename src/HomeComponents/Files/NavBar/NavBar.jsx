
import '../../Styles/NavBar/NavBar.css'
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
// link k andr href ki jgh "to" likte hai 

// NavLink k andr hm classes callback  k andr likte hai jisse hm classes ko manipulte kr ske. like color changing. 
// Maniutaion of that li

// jb bhi hm navlink callback k though likte hai to hmare pass ik cariable ka direcly access ota hai that is "active" or "ispending"


const NavBar = () => {
     return (
          <nav>
               <ul>
                    <li>
                         <NavLink to="/">
                              Home
                         </NavLink>
                    </li>

                    <li><NavLink to="/industries">Industries</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/about-us">About Us</NavLink></li>
                    <li><NavLink to="/contact-us">Contact Us</NavLink></li>
               </ul>
          </nav>
     )
}

export default NavBar