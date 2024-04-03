import React from 'react'
import '../../Styles/LandingPage/LandingPage.css'
import NavBar from "../NavBar/NavBar"


const LandingPage = () => {
     return (
          <>
               <div id="container">
                    <div className="navigation">
                         <NavBar />
                    </div>
                    <div className="image-container" >
                         <div className="image-headings">
                              <div className="headings-section">
                                   <p className='heading'>Your Trusted Partner for all Your Polymer Needs</p>
                                   <p className='subheading'>we are dedicated to providing the highest quality polymer solutions to meet the needs of a wide range of industries</p>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default LandingPage