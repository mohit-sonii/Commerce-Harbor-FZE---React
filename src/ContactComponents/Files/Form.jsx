
import React from 'react'
import "../Styles/Form.css"

const Form = () => {
     return (
          <div id="FormDetail">
               <div className="contact-headings-form">
                    <h1>Let's Talk !</h1>
                    <p>Get in touch with us using the enquiry form or contact details below</p>
               </div>
               <div id="FormDesign">
                    <form action="">
                         <input type="text" placeholder='Your Name *' />
                         <input type="tel" placeholder='Contact No. *' />
                         <input type="email" placeholder='Your Email *' />
                         <input type="text" placeholder='Subject *' />
                         <input type="text" placeholder='Your Message *' className='textarea'/>
                    </form>
               </div>
          </div>
     )
}

export default Form