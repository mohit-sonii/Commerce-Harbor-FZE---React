
import React from 'react'
import '../../Styles/Header/Logo.css';
import  image from '../../../../assets/logo/Logo.png';

const Logo = (props) => {
  return (
     <>
          <div className="main-container">
               <div className="logo-image">
                    <img src={image} alt="Logo Image" />
               </div>
               <div className="logo-content">
                    <h1 id='logo-content-heading' style={{color:`${props.textCol}`}}>Commerce Harbor FZE</h1>
                    <p id="logo-sub-heading" style={{color:`${props.textCol}`}}>...to shape the future</p>
               </div>
          </div>
     </>
  )
}

export default Logo