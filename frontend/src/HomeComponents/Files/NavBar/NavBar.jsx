
import '../../Styles/NavBar/NavBar.css'
import React from 'react'
import { Link } from 'react-router-dom';
// link k andr href ki jgh "to" likte hai 

// Link k andr hm classes callback  k andr likte hai jisse hm classes ko manipulte kr ske. like color changing. 
// Maniutaion of that li

// jb bhi hm NavLink callback k though likte hai to hmare pass ik cariable ka direcly access ota hai that is "active" or "ispending"


const NavBar = () => {
     return (
          <nav>
               <ul>
                    <li><Link  to="/Commerce-Harbor-FZE---MERN/" className="nav-links">Home</Link></li>
                    <li><Link to="/Commerce-Harbor-FZE---MERN/products" className="nav-links">Products</Link></li>
                    <li><Link to="/Commerce-Harbor-FZE---MERN/industries" className="nav-links">Industries</Link></li>
                    <li><Link to="/Commerce-Harbor-FZE---MERN/contact" className="nav-links">Contact Us</Link></li>
                    <li><Link to="/Commerce-Harbor-FZE---MERN/about" className="nav-links">About Us</Link></li>

               </ul>
          </nav>
     )
}

export default NavBar