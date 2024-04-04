import React from 'react'
import './Button.css'
const Button = ({text, btnColor}) => {
     return (
          <>
               <button style={{backgroundColor:`${btnColor}`}}>
                    {text}
               </button>
          </>
     )
}

export default Button