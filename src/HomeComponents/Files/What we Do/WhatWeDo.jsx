import '../../Styles/What We Do/WhatWeDo.css'
import diamond from "../../../../assets/Icons/DiamondIcon.png"
import React from 'react'

const WhatWeDo = ({heading,heading2,p1,p2}) => {
     return (
          <div id='section'>
               <img src={diamond} alt="" />
               <p className='our'>{heading}</p>
               <h2>{heading2}</h2>
               <p className='desc1'>{p1}</p>
               <p className='desc2'>{p2}</p>
          </div>
     )
}

export default WhatWeDo