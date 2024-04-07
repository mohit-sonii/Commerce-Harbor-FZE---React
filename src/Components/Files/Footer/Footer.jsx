import ContactCard from './ContactCard'
import "../../Styles/Footer/Footer.css"
import Links from './Links'

import React from 'react'

const LinkSection = () => {
     return (
          <>
               <div id="links">
                    <div className="contact-links">
                         <div className="contacts">
                              <ContactCard />
                         </div>
                         <div className="links">
                              <Links/>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default LinkSection