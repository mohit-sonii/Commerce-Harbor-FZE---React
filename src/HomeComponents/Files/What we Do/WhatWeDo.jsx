import '../../Styles/What We Do/WhatWeDo.css'
import diamond from "../../../../assets/Icons/DiamondIcon.png"
import React from 'react'

const WhatWeDo = () => {
     return (
          <div id='section'>
               <img src={diamond} alt="" />
               <p className='ourServices'>OUR SERVICES</p>
               <h2>What We Do?</h2>
               <p className='desc1'>At Commerce Harbor FZE, we pride ourselves on being a leading supplier of high-quality polymers to a wide range of industries. With a strong commitment to customer satisfaction and decades of cumulative experience in the industry, we strive to offer the best polymer solutions for your specific needs</p>
               <p className='desc2'>To ensure a seamless experience for our customers, we maintain a robust supply chain and efficient logistics network. We have partnered with reliable shipping and freight companies to ensure timely delivery of your polymer orders, no matter where you are located.</p>
          </div>
     )
}

export default WhatWeDo