import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './HomeComponents/Files/Header/Header.jsx'
import AboutUs from "./WebsitePages/AboutUs/AboutUs.jsx"
import Footer from './HomeComponents/Files/Footer/Footer.jsx'
import Home from './WebsitePages/Home/Home.jsx'
import LandingPage from './HomeComponents/Files/LandingPage/LandingPage.jsx'
import ErrorPage from './ErrorPage.jsx'
import NavBar from './HomeComponents/Files/NavBar/NavBar.jsx'
import Industries from './WebsitePages/Industries/Industries.jsx'
import ContactUs from './WebsitePages/ContactUs/ContactUs.jsx'
import Products from './WebsitePages/Products/Products.jsx'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Use BrowserRouter instead of createBrowserRouter

import { RouterProvider, createBrowserRouter } from 'react-router-dom'



// const router = createBrowserRouter([
//      {
//           path: "/Commerce-Harbor-FZE---React/", // toplevel element jiske andr nexting ho rhi hai
//           element: <Home />,
//           errorElement:<ErrorPage/>,
//           children: [
//                {
//                     path:"", // kyuki slash pe bhi ho to kuch display hoega
//                     element:<Home/>
//                },
//                {
//                     path:"home",
//                     element:<Home/>
//                },
//                {
//                     path:"about",
//                     element:<AboutUs/>
//                },
//                {
//                     path:"contact",
//                     element:<ContactUs/>
//                },
//                {
//                     path:"industries",
//                     element:<Industries/>
//                },
//                {
//                     path:"products",
//                     element:<Products/>
//                }
//           ]
//      }
// ])



// const router = createBrowserRouter(
//      createRoutesFromElements(
//           <Route path='/'element={<Home/>}>
//                <Route path='' element={<Home/>}/>
//                <Route path='about' element={<AboutUs/>}/>
//                <Route path='contact' element={<ContactUs/>}/>
//                <Route path='industries' element={<Industries/>}/>
//                <Route path='products' element={<Products/>}/>
//           </Route>
//      )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
          <Router>
               <Routes>
                    <Route path="/Commerce-Harbor-FZE---React/" element={<App />}>
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
// ReactDOM.render(
//      <React.StrictMode>
//           <Router>
//                <Routes>
//                     <Route path="/" element={<App />}>
//                          <Route index element={<LandingPage />} />
//                          <Route path="about" element={<AboutUs />} />
//                          <Route path="contact" element={<ContactUs />} />
//                          <Route path="industries" element={<Industries />} />
//                          <Route path="products" element={<Products />} />
//                     </Route>
//                </Routes>
//           </Router>
//      </React.StrictMode>,
//      document.getElementById('root')
// );