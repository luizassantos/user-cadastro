import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <ul>
        <li>
            <Link style={{color:"white"}} to="/home">Home</Link>
        </li>
        <li  >
            <Link style={{color:"white"}} to="/userinfo">Minhas Informações</Link>
        </li>
        <li>
            <Link style={{color:"white"}} to="#">Carrinho</Link>
        </li>
        <li>
            <Link style={{color:"white"}} to="#">Logout</Link>
        </li>
       
      </ul>
    </nav>
  )
}

export default Navbar;
