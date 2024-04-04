import React from 'react'
import './Button.css'
const Button = (props) => {
     return (
          <>
               <button style={{backgroundColor:`${props.btnColor}`}}>
                    {props.text}
               </button>
          </>
     )
}

export default Button