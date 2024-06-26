import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './transitions.css'

// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h2>Error element</h2>,
    children: []
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
