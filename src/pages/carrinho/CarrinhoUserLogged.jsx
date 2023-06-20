import React, { useContext, useEffect, useState, useRef, useMemo } from 'react'

import { UserContext } from '../../context/UserContext';
import { BiShoppingBag } from "react-icons/bi";
import ProdutoCarrinho from '../../components/produtos/ProdutoCarrinho';

const CarrinhoUserLogged = () => {
    const {userData, setUserData, cartChanged } = useContext(UserContext);

    let valorTotal = 0;

    const gerarLista = () =>{
      console.log(userData.cart)
      return userData.cart.map(produ => {
        console.log(produ);
        valorTotal += produ.preco * produ.quantidade;
        return(
          <div>
              <ProdutoCarrinho produto={produ}/>
          </div>
        )
      })
    }

    useEffect( () => {
      const resposta = async () => {
        await fetch(`http://localhost:3001/users/${userData.id}`)
          .then(resp => resp.json())
          .then(user => setUserData(user))
      }

      resposta()  
      gerarLista()
    },[cartChanged])

    
    if(userData.cart.length > 0) {
      console.log('carrinho com produto')
      return (
        <div className='div-logged-cart'>
            <h3 className='h3-logged'>Carrinho de compras</h3> <br/>
            <div className='logged-cart-container'>
                <div>
                    {gerarLista()}
                </div>
                
                <div className='preco-total-c'>
                    <h3> Subtotal: R${valorTotal} </h3>
                </div>
                
            </div>
        </div>
      )
    } else {
      return(
        
            <div className='cart-empty'>
                <h3 className='h3-logged'>Carrinho de compras</h3>
                <BiShoppingBag size={90} />
                <h4 className='h4-logged'>Seu Carinho está vazio!</h4>
            </div>
      )
    } 
}

export default CarrinhoUserLogged
