
import React, { useState } from 'react'
import "../Styles/Form.css"
import axios from 'axios'
import Button from '../../HomeComponents/Files/Button/Button'
import api from '../../axiosInstance'
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
               console.log(response.data.data)
               if(!response) throw new Error('Error while submiting the form')
          } catch (err) {
               setErr(err?.response?.message || 'problem in fetching')
          }
     }

     const handleChange = (e) => {
          const { name, value } = e.target
          setData({ ...data, [name]: value })
     }

     return (
          <div id="FormDetail">
               <div className="contact-headings-form">
                    <h1>Let's Talk !</h1>
                    <p>Get in touch with us using the enquiry form or contact details below</p>
               </div>
               <div id="FormDesign">
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