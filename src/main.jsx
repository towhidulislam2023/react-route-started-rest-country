import React from 'react'
import App from './App'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Product from './Components/Product/Product';
import Login from './Components/Login/Login';
import Always from './Components/Home/Always';
import ProductDatials from './Components/ProductDatial/ProductDatials';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<Home></Home>
//   },
//   {
//     path:"/about",
//     element: <div>About Page</div>
//   }
// ]);
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children:[
      {
        path:"/",
        element:<Always></Always>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/products",
        element:<Product></Product>,
         loader: () => fetch('https://restcountries.com/v3.1/all')
      },
      {
        path:"/products/:id",
        element:<ProductDatials></ProductDatials>,
        loader: ({ params }) => fetch(`https://restcountries.com/v3.1/alpha/${params.id}`),
      },
      {
        path:"/login",
        element:<Login></Login>,
       
      },

    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
