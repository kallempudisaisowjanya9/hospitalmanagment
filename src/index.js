import React from 'react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/js/bootstrap.min"
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import AdminDashboard from './features/AdminDashboard/AdminDashboard';
import Home from './features/Home/Home';
import AddHospital from './features/AdminDashboard/AddHospital';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/admindashboard",
        element: <AdminDashboard></AdminDashboard>,
        children:[
          {
            path:"/admindashboard/addhospital",
            element: <AddHospital></AddHospital>
          }
        ]

      },
      {
        path:"",
        element: <Home></Home>
      }
    ]
  },
  
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
