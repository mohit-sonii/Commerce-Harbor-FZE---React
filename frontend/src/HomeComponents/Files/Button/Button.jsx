import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'
const Button = (props) => {
     return (


          <>
               <Link to={props.destination}>
                    <button style={{ backgroundColor: `${props.btnColor}` }}>
                         {props.text}
                    </button>
               </Link>
          </>
     )
}

export default Button