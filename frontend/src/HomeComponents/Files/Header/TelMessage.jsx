import React from 'react'
import '../../Styles/Header/TelMessage.css'
const TelMessage = (props) => {
     return (
          <>
               <div className="telephone-message">
                    <div className="icon-text" style={{color:`${props.textCol}`}}>
                         {props.icon}
                         <p style={{color:`${props.textCol}`}}>{props.value}</p>
                    </div>
               </div>
          </>
     )
}

export default TelMessage