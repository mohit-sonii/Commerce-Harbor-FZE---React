import Logo from "./Logo";
import { CiMail } from "react-icons/ci";
import React from 'react'
import { BsTelephone } from "react-icons/bs";
import '../../Styles/Header/Header.css'
import TelMessage from "./TelMessage";

const Header = () => {
     return (
          <div id="HeaderStyles">
               <div className="logo">
                    <Logo />
               </div>
               <div className="tele-mess">
                    <TelMessage value="+971 569 230 075 (UAE)"  icon={<BsTelephone size={15} color="red"/>} />
                    <TelMessage value="trade@Comharbor.com" icon={<CiMail size={15} color="red"/>} />
               </div>
          </div>
     )
}

export default Header