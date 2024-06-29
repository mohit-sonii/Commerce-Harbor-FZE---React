
import React from 'react'
import "../../Styles/Footer/Links.css"
import redLine from "../../../../assets/Icons/redLine.png"
import { Link } from 'react-router-dom'
const Links = () => {
     return (
          <div className='footer-links'>
               <div className="useful-links">
                    <div className="link-redline">
                         <p>
                              USEFUL LINKS
                         </p>
                         <img src={redLine} alt="" />
                    </div>
                    <div className="all-links">
                         <ul>
                              <li><Link to="/Commerce-Harbor-FZE---MERN/about" className="foot-nav">About Us</Link></li>
                              <li><Link to="/Commerce-Harbor-FZE---MERN/products" className="foot-nav">Products</Link></li>
                              <li><Link to="/Commerce-Harbor-FZE---MERN/industries" className="foot-nav">Industries</Link></li>
                         </ul>
                    </div>
               </div>
               <div className="contact-us">
                    <div className="link-redline">
                         <p>
                              CONTACT US
                         </p>
                         <img src={redLine} alt="" />
                    </div>
                    <div className="contact-link">
                         <ul>
                              <li><Link to="/Commerce-Harbor-FZE---MERN/contact" className="foot-nav">Contact</Link></li>
                              <li>Sitemap</li>
                         </ul>
                    </div>
               </div>
          </div>
     )
}

export default Links