
import React from 'react'
import '../../Styles/Header/LogoStyles.css';
import  image from '../../../../assets/logo/Logo.png';

const Logo = () => {
  return (
     <>
          <div className="main-container">
               <div className="logo-image">
                    <img src={image} alt="Logo Image" />
               </div>
               <div className="logo-content">
                    <h1 id='logo-content-heading'>Commerce Harbor FZE</h1>
                    <p id="logo-sub-heading">...to shape the future</p>
               </div>
          </div>
     </>
  )
}

export default Logo