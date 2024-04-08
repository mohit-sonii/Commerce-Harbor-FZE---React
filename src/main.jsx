import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './HomeComponents/Files/Header/Header.jsx'
import AboutUs from "./WebsitePages/AboutUs/AboutUs.jsx"
import Home from './WebsitePages/Home/Home.jsx'
import Industries from './WebsitePages/Industries/Industries.jsx'
import ContactUs from './WebsitePages/ContactUs/ContactUs.jsx'
import Products from './WebsitePages/Products/Products.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use BrowserRouter instead of createBrowserRouter

import { RouterProvider, createBrowserRouter } from 'react-router-dom'


// const router = createBrowserRouter([
//      {
//           path: "/", // toplevel element jiske andr nexting ho rhi hai
//           element: <Home />,
//           children: [
//                {
//                     path:"", // kyuki slash pe bhi ho to kuch display hoega
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
          {/* <App/>
          <RouterProvider router={router} /> */}
          <Router>
               <App />
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/industries" element={<Industries />} />
                    <Route path="/products" element={<Products />} />
               </Routes>
          </Router>
          {/* <Header/>
          <RouterProvider router={router}/> */}
     </React.StrictMode>,
)
