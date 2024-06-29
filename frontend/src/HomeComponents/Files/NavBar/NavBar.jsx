
import '../../Styles/NavBar/NavBar.css'
import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
     return (
          <nav>
               <ul>
                    <li><Link  to="/" className="nav-links">Home</Link></li>
                    <li><Link to="/products" className="nav-links">Products</Link></li>
                    <li><Link to="/industries" className="nav-links">Industries</Link></li>
                    <li><Link to="/contact" className="nav-links">Contact Us</Link></li>
                    <li><Link to="/about" className="nav-links">About Us</Link></li>

               </ul>
          </nav>
     )
}

export default NavBar