
import React, { useState, useEffect } from 'react'
import "../Styles/Form.css"
import axios from 'axios'
const Form = () => {
     const [success, setSuccess] = useState()
     const [data, setData] = useState({
          name: '',
          email: '',
          contact: '',
          message: '',
          subject: ''
     })
     const [err, setErr] = useState('')

     const handleSubmit = async (e) => {
          e.preventDefault()
          try {
               const response = await axios.post(`https://commerce-harbor-fze-backend.vercel.app/contact`, data, {
                    headers: {
                         'Content-Type': 'multipart/form-data'
                    }
               })
               if (response.status !== 200) throw new Error('Error while submiting the form')
                    
               setSuccess('Submitted Successfully')
          } catch (err) {
               setErr(err?.response?.message || 'problem in fetching')
          }
     }

     const handleChange = (e) => {
          const { name, value } = e.target
          setData({ ...data, [name]: value })
     }

     useEffect(() => {
          const timer = setTimeout(() => {
               setSuccess('');
               setErr('');
          }, 2000);

          return () => clearTimeout(timer);
     }, [success, err]);
     return (
          <div id="FormDetail">
               <div className="contact-headings-form">
                    <h1>Let's Talk !</h1>
                    <p>Get in touch with us using the enquiry form or contact details below</p>
               </div>
               <div id="FormDesign" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <form onSubmit={handleSubmit}>
                         <input name='name' value={data.name} onChange={handleChange} type="text" placeholder='Your Name ' required />
                         <input name='contact' value={data.contact} onChange={handleChange} type="tel" placeholder='Contact No. ' required />
                         <input name='email' value={data.email} onChange={handleChange} type="email" placeholder='Your Email ' required />
                         <input name='subject' value={data.subject} onChange={handleChange} type="text" placeholder='Subject ' required />
                         <input name='message' value={data.message} onChange={handleChange} type="text" placeholder='Your Message ' className='textarea' required />
                         <div className="formButton" >
                              <button type="submit" style={{ backgroundColor: 'red' }}>Submit</button>
                         </div>
                    </form>
                    {success && <p>{success}</p>}
                    {err && <p>{err}</p>}
               </div>
          </div>
     )
}

export default Form