import React from 'react'
import './Carrinho.css'

import { BiShoppingBag } from "react-icons/bi";

const CarrinhoUserNotLogged = () => {
  return (
    <div className='cart-container cart-empty'>
        <BiShoppingBag size={90}/>
        
        <h3 className='h3-notlogged'>Você não está logado</h3>
        <p className='p-notlogged'>
            Para ter acesso ao seu carrinho <br/>
            e/ou adicionar novos produtos
        </p>
        <p className='p-notlogged'>
            <a href='/login'>Entre na sua conta</a> ou <a href='/login/cadastro'>Cadastre-se</a>
        </p>
        
    </div>
  )
}

export default CarrinhoUserNotLogged
