
import React from 'react'
import redLine from "../../../../assets/Icons/redLine.png"
import "../../Styles/WhyChooseUs/WhyChooseUs.css"

const WhyChooseUs = () => {
     return (
          <div id="whyContainer">
               <div id="WhyHeading">
                    <h1>WHY CHOOSE US?</h1>
                    <div className="redlines">
                         <img className='redline1' src={redLine} alt="" />
                         <img className='redline2' src={redLine} alt="" />
                         <img className='redline3' src={redLine} alt="" />
                         <img className='redline4' src={redLine} alt="" />
                    </div>
               </div>
          </div>
     )
}

export default WhyChooseUs