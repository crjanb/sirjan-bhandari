import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Projects from './routes/projects.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Experience from './routes/experience.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:'/project',
    element:<Projects/>,
  },
  {
    path:'/experience',
    element:<Experience/>
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />
)
