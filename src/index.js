import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { UserProvider } from './context/UserContext';

import Home from "./pages/home/Home";
import UserInfo from "./pages/userInfo/UserInfo";
import PaginaLogin from './pages/login/PaginaLogin';
import Carrinho from './pages/carrinho/Carrinho';

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
      {
        path: "carrinho",
        element: <Carrinho />
      }
    ]
  },
  {
    path: "/login",
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
