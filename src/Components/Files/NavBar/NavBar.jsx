import Logo from "./Logo";
import { CiMail } from "react-icons/ci";
import React from 'react'
import { BsTelephone } from "react-icons/bs";
import '../../Styles/NavBar/NavBar.css'
import TelMessage from "./TelMessage";

const NavBar = () => {
     return (
          <div id="NavBarStyles">
               <div className="logo">
                    <Logo />
               </div>
               <div className="tele-mess">
                    <TelMessage value="+971 569 230 075 (UAE)" icon={<BsTelephone size={15} color="red"/>} />
                    <TelMessage value="trade@Comharbor.com" icon={<CiMail size={15} color="red"/>} />
               </div>
          </div>
     )
}

export default NavBar