import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutUs from "./WebsitePages/AboutUs/AboutUs.jsx"
import Home from './WebsitePages/Home/Home.jsx'
import Industries from './WebsitePages/Industries/Industries.jsx'
import ContactUs from './WebsitePages/ContactUs/ContactUs.jsx'
import Products from './WebsitePages/Products/Products.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 


ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
          <Router>
               <Routes>
                    <Route path="/" element={<App />}>
                         <Route index element={<Home />} />
                         <Route path="about" element={<AboutUs />} />
                         <Route path="home" element={<Home />} />
                         <Route path="contact" element={<ContactUs />} />
                         <Route path="industries" element={<Industries />} />
                         <Route path="products" element={<Products />} />
                    </Route>
               </Routes>
          </Router>
     </React.StrictMode>,
)
