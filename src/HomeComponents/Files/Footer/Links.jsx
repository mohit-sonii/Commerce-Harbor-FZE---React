
import React from 'react'
import "../../Styles/Footer/Links.css"
import redLine from "../../../../assets/Icons/redLine.png"
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
                              <li>About Us</li>
                              <li>Products</li>
                              <li>Industries</li>
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
                              <li>Contact</li>
                              <li>Sitemap</li>
                         </ul>
                    </div>
               </div>
          </div>
     )
}

export default Links