import React from 'react'
import './Navbar.css'

import { Link, Navigate } from 'react-router-dom';

import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import {BiCart} from 'react-icons/bi'
import {FaRegUser} from 'react-icons/fa'

const Navbar = () => {

  const {setUserData} = useContext(UserContext);
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
        <li className='produtos-link'>
            <Link style={{color:"white", textDecoration:"none"}} to="/">PRODUTOS</Link>
        </li>

        <li className='logo'>
          <Link to="/" className='logo'> LutasPRO </Link>
        </li>

        {isUserLogged ? (
            <div className='navbar-div'>
              <li>
                  <Link style={{color:"white"}} to="/carrinho"><BiCart size={28} /></Link>
              </li>
              <li className='li-item'>
                  <Link style={{color:"white"}} to="/userinfo"><FaRegUser size={21}/></Link>
              </li>
              <li className='li-sair'>
                  <Link to="/" onClick={handleLogoutClick} style={{color:"white"}}>Sair</Link>
              </li>
            </div>
        ) : (
          <div className='navbar-div'>
            <li className='li-item'>
                <Link  style={{color:"white"}} to="/login">Login</Link>
            </li>
            <li>
              <Link style={{color:"white"}} to="/carrinho"><BiCart size={26} /></Link>
            </li>
          </div>
        )
        }
       
      </ul>
    </nav>
  )
}

export default Navbar;
