import React from 'react'
import "../../Styles/Card/Card.css"
import { useState, useEffect } from 'react'
const Card = ({ image, description, dir }) => {
     const [direction, setDirection] = useState()

     useEffect(() => {
          if (dir === 'right') {
               setDirection(true);
          }
     }, [dir])


     return (
          <>
               <div id="product-card">
                    {direction ? <>
                         <div className="img">
                              <img src={image} alt="" />
                         </div>
                         <div className="description">
                              {description}
                         </div>
                    </>

                         : <>
                              <div className="description">
                                   {description}
                              </div>
                              <div className="img">
                                   <img src={image} alt="" />
                              </div>
                         </>
                    }
               </div >
          </>
     )
}

export default Card