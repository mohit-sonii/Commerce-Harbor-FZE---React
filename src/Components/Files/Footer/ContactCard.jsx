import React from 'react'
import "../../Styles/Footer/ContactCard.css"
import Logo from "../Header/Logo"
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import TelMessage from '../Header/TelMessage'


const ContactCard = () => {
     return (
          <>
               <div id="contactCard">
                    <div className="logo">
                         <Logo textCol="white" />
                    </div>
                    <div className="contactInformation">
                         <div className="phoneInfo">
                              <TelMessage value="+971 569 230 075 (UAE)" icon={<BsTelephone size={15} color="red" />} textCol="white" />
                         </div>
                         <div className="mailInfo">
                              <TelMessage value="trade@Comharbor.com" textCol="white" icon={<CiMail size={15} color="red" />} />
                         </div>
                         <div className="location">
                              <TelMessage textCol="white" icon={<IoLocationOutline size={18} color='red' />} />
                              <p className="footer-p">
                                   Address Office- E1-218 E ,
                                   Ajman Free Zone, Shk - Sheikh Rashid Bin Saeed Al Maktoum St - Ajman - United Arab Emirates (UAE)
                              </p>

                         </div>
                    </div>
               </div>
          </>
     )
}

export default ContactCard