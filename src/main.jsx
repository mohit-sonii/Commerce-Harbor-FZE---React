import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutUs from "./WebsitePages/AboutUs/AboutUs.jsx"
import Home from './WebsitePages/Home/Home.jsx'
import Industries from './WebsitePages/Industries/Industries.jsx'
import ContactUs from './WebsitePages/ContactUs/ContactUs.jsx'
import Products from './WebsitePages/Products/Products.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useRouteError } from 'react-router-dom'


const router = createBrowserRouter([
     {
          path: '/', //toplevel element jiske andr nexting ho rhi hai
          element: <Home />,
          children: [
               {
                    path:"", //kyuki slash pe bhi ho to kuch display hoega
                    element:<Home/>
               },
               {
                    path:"about",
                    element:<AboutUs/>
               },
               {
                    path:"contact-us",
                    element:<ContactUs/>
               },
               {
                    path:"industries",
                    element:<Industries/>
               },
               {
                    path:"products",
                    element:<Products/>
               }
          ]
     }
])

ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
          <App/>
          <RouterProvider router={router} />
     </React.StrictMode>,
)
