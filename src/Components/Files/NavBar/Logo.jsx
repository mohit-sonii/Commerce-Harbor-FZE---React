
import React from 'react'
import '../../Styles/NavBar/LogoStyles.css';


const Logo = () => {
  return (
     <>
          <div className="main-container">
               <div className="logo-image">
                    <img src="../assets/logo/Logo.png" alt="Logo Image" />
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