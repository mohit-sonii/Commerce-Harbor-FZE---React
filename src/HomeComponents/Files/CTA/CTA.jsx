import React from 'react'
import Button from '../Button/Button'
import "../../Styles/CTA/CTA.css"

const CTA = () => {
     return (
          <div id='cta-section'>
                    <div className="text-section">
                         <p className='for-CTA'>WE ARE THE ONE WHO NEVER COMPROMISE ON THE QUALITY OF THE PRODUCTS</p>
                    </div>
                    <div className="button-section">
                         <Button text={"Get a Free Quote"} btnColor={"red"} />

                    </div>
          </div>
     )
}

export default CTA