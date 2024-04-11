import React from 'react'
import "../Styles/IndustryCards.css"

const IndustryCards = (props) => {
     const HandleMouseEnter = (e) => {
          e.currentTarget.querySelector(".industry-image > p").classList.remove("disabled")

     }
     const HandleMouseLeave = (e) => {
          e.currentTarget.querySelector(".industry-image > p").classList.add("disabled")
     }

     return (
          <>
               <div id="IndustriesKeCard">
                    <div className="text">
                         {props.heading}
                    </div>
                    <div className="industry-image" onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave} style={{ backgroundImage: `url(${props.image})` }}>
                         <p className="industry-p disabled">{props.description}</p>
                    </div>
               </div>
          </>
     )
}

export default IndustryCards