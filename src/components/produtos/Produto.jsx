import React, { useEffect, useState } from 'react'

import './Produto.css'

import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import axios from 'axios'

const Produto = ({produto}) => {

  const {cartProducts, setCartProducts} = useContext(UserContext);
  const {userData} = useContext(UserContext);
  const {isUserLogged, setIsUserLogged} = useContext(UserContext);
  const [productAdded, setProductAdded] = useState(false)

  async function fetchDataCart () {
    try{

      const resp = await axios
      (`http://localhost:3001/users/${userData.id}`);

      console.log("user.cart: ",resp.data.cart) // [1,2]
      const productsIDs = resp.data.cart // [1,2]

      let arrayPID = productsIDs;
      
      for (let i = 0; i < productsIDs.length; i++){
        let pID = productsIDs[i]; 
        productsIDs.push(pID);
          try{
            await axios.patch(`http://localhost:3001/users/${userData.id}`, {
              cart: productsIDs
            })

            console.log(userData.cart)

          } catch (error) {
            console.log("erro - editar cart: ", error)
          }
            // } catch (e){
            //   console.log("erro - produtos ",  e)
            // }
            
          };
      } catch (err) {
        console.log("err - cart  ", err)
    }
  }   

  useEffect(() => {
    if (isUserLogged){
      if(!(userData.cart.length === 0)){
        if (userData.cart.includes(produto.id)) {
          setProductAdded(true)
        }
      }
    }
  },[])

  async function addToCart() {
    try {
      const resp = await axios
      (`http://localhost:3001/users/${userData.id}`);

      console.log("user.cart: ",resp.data.cart); 
      let products = resp.data.cart;
      products.push(produto);

      try{
        await axios.patch(`http://localhost:3001/users/${userData.id}`, {
            cart: products
        });
         
        setProductAdded(true)

      } catch (err) {
          console.log("addToCart ERRO: ", err)
      }

    } catch (error) {
      console.log(error)
    }
  }

  async function deleteFromCart() {
    try {
      const resp = await axios
      (`http://localhost:3001/users/${userData.id}`);

      console.log("user.cart: ",resp.data.cart); 
      let products = resp.data.cart;
      // products.delete(produto)

      for (let i=0; i<products.length; i++){
        if(products[i] === produto){
         products = products.splice(i)
        }
      }

      try{
        await axios.patch(`http://localhost:3001/users/${userData.id}`, {
            cart: products
        });
         
        setProductAdded(false)

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

  const handleDeleteClick = () => {
    deleteFromCart();
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
        <p className='product-price'>Preço: {produto.preco}</p>

        {!productAdded ? (
            <button className='product-btn product-btn-add' onClick={handleAddClick}>Adicionar ao carrinho</button>
        ) : (
            <button className='product-btn product-btn-delete' onClick={handleDeleteClick}> Excluir do carrinho </button>
        )}
        
        
      </div>
        
    </li>
  )
}

export default Produto
