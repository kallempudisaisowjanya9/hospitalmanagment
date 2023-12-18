import React from 'react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/js/bootstrap.min"
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import AdminDashboard from './features/AdminDashboard/AdminDashboard';
import Home from './features/Home/Home';
import AddHospital from './features/AdminDashboard/AddHospital';
import AddBed from './features/AdminDashboard/AddBed';
import HospitalDetails from './features/Hospital/HospitalDetails';

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
          },
          {
            path:"/admindashboard/addBed",
            element: <AddBed></AddBed>
          }
        ]

      },
      {
        path:"/details/:id",
        element:<HospitalDetails></HospitalDetails>
      },
      {
        path:"",
        element: <Home></Home>
      }
    ]
  },
  
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
