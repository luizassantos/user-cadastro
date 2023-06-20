import React, { useState, useEffect } from 'react'

import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import CarrinhoUserLogged from './CarrinhoUserLogged';
import CarrinhoUserNotLogged from './CarrinhoUserNotLogged';


const Carrinho = () => {

  const {isUserLogged} = useContext(UserContext);

  

  if(isUserLogged){
    return <CarrinhoUserLogged />
  } else {
    return <CarrinhoUserNotLogged />
  }

}
export default Carrinho;
