
import "../../Styles/LandingPage/LandingPage.css"
import React from 'react'

const LandingPage = ({title, image}) => {
     return (
          <>
               <div id="container">
                    <div className="image-container-product"style={{backgroundImage: `url(${image})`}} >
                         <p className='heading-product'>{title}</p>
                    </div>
               </div>
          </>
     )
}

export default LandingPage