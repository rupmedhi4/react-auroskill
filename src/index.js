import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Mike from './Mike';
import Tyson from './Tyson';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';








const route = createBrowserRouter([
  {
    path: '/', 
    element: <App name="rup" email="rup23@gmail.com"/>,
  },
  {
    path: '/mike', 
    element: <Mike/>,
  },
  {
    path: '/tyson', 
    element: <Tyson/>,
  },
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <RouterProvider router={route}/>
  </>
);

