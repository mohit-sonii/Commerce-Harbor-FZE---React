import "../../Styles/Qualities/Qualities.css"
import React from 'react'
import QualityIcon from "./QualityCard"
import Gem from "../../../../assets/QualityIcon/Gem.png"
import Star from "../../../../assets/QualityIcon/star.png"
import Sustain from "../../../../assets/QualityIcon/sustain.png"
const Qualities = () => {
     return (
          <>
               <div className="qualities-section">
                    <QualityIcon icon={Gem} h2={"Quality Assurance"} p={"We adhere to strict quality control measures to ensure that the polymer raw materials we supply meet the highest industry standards."} />
                    <QualityIcon icon={Star} h2={"Reliability"} p={"Our consistent and timely deliveries ensure that your production processes remain seamless and efficient."}/>
                    <QualityIcon icon={Sustain} h2={"Sustainability"}
                    p={"We are committed to promoting sustainable practices by offering eco-friendly and recyclable polymer raw materials."}/>

               </div>

          </>
     )
}

export default Qualities