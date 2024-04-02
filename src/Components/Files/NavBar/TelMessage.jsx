import React from 'react'
import '../../Styles/NavBar/TelMessage.css'
const TelMessage = ({ value, icon }) => {
     return (
          <>
               <div className="telephone-message">
                    <div className="icon-text">
                         {icon}
                         <p>{value}</p>
                    </div>
               </div>
          </>
     )
}

export default TelMessage