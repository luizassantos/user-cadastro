import React, { useEffect, useState } from 'react'

import './Produto.css'

import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import axios from 'axios'

const Produto = ({produto}) => {

  const {userData} = useContext(UserContext);
  const {isUserLogged} = useContext(UserContext);

  async function addToCart() {
    try {
      const resp = await axios
      (`http://localhost:3001/users/${userData.id}`);
      
      let products = resp.data.cart;
      let contemProduto = false;
      let newProductsList

      for(let i=0; i<products.length; i++){
        if(products[i].id === produto.id){
          let produtoCart = products[i];
          products.splice(i,1);
          newProductsList = [...products, {...produto, quantidade: produtoCart.quantidade + 1}];
          contemProduto = true;
          break
        } 
      }

      if(!contemProduto){
        newProductsList = [...products, {...produto, quantidade: 1}]
      }
      
      try{
        await axios.patch(`http://localhost:3001/users/${userData.id}`, {
            cart: newProductsList
        });
         
      } catch (err) {
          console.log("addToCart ERRO: ", err)
      }

    } catch (error) {
      console.log(error)
    }
  }


  const handleAddClick = () => {

    if(!isUserLogged){
      alert("Faça o login para adicionar produtos ao seu carrinho!")
    } else {
      addToCart();
    }
  }

  return (
    <li 
      key={produto.id}
      className='product-li'
    >
      <div>
        <img 
            src={produto.imagem} 
            className='product-img'
        />
      </div>
        
      <div>
        <h3 className='product-nome'>{produto.nome}</h3>
        <p className='product-price'>Preço: R${produto.preco}</p>

        <button className='product-btn product-btn-add' onClick={handleAddClick}>Adicionar ao carrinho</button>
        
      </div>
        
    </li>
  )
}

export default Produto
