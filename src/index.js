import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import UserInfo from "./routes/UserInfo";
import PaginaLogin from './components/login/PaginaLogin';

import { UserProvider } from './context/UserContext';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "userinfo",
//     element: <UserInfo />
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "userinfo",
        element: <UserInfo />
      },
    ]
  },
  {
    path: "login",
    element: <PaginaLogin/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </React.StrictMode>
);
