import React from 'react'
import "../../Styles/Sourcing/Sourcing.css"
const Sourcing = ({ image }) => {
     return (
          <div className="sourcing" style={{ backgroundImage: `url(${image})` }}>
               <p className="sourcing-p">
                    At Commerce Harbor FZE, our sourcing philosophy is rooted in a deep commitment to excellence, reliability, and sustainability. We understand that the foundation of our business lies in the materials we provide, and that's why we approach sourcing with utmost diligence and integrity.
               </p>

          </div>
     )
}

export default Sourcing