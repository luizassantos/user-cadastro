import React from 'react'
import './Navbar.css'

import { Link, Navigate } from 'react-router-dom';

import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Navbar = () => {

  const {userData, setUserData} = useContext(UserContext);
  const {isUserLogged, setIsUserLogged} = useContext(UserContext);
  const {setIsEdit} = useContext(UserContext);

  const handleLogoutClick = () => {
      setUserData("");
      setIsUserLogged(false);
      setIsEdit(false);
  }
  

  return (
    <nav className='navbar-container'>
      <ul className='navbar-ul'>
        <li>
            <Link style={{color:"white"}} to="/home">Home</Link>
        </li>
        {isUserLogged ? (
            <>
              <li>
                  <Link style={{color:"white"}} to="/userinfo">Minhas Informações</Link>
              </li>
              <li>
                  <Link to="/home" onClick={handleLogoutClick} style={{color:"white"}}>Logout</Link>
              </li>
            </>
        ) : (
          <li>
              <Link  style={{color:"white"}} to="/login">Login</Link>
          </li>
        )
        }
        <li>
            <Link style={{color:"white"}} to="/carrinho">Carrinho</Link>
        </li>
       
      </ul>
    </nav>
  )
}

export default Navbar;
