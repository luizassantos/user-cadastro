import React, { useEffect, useState } from 'react'

import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import axios from 'axios'

import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi'
import Divider from '@mui/material/Divider';

const ProdutoCarrinho = ({ produto }) => {
    const {setCartChanged} = useContext(UserContext);
    const {userData} = useContext(UserContext);

    const deleteFromCart = async () => {
        setCartChanged(false);

        const resp = await axios
        (`http://localhost:3001/users/${userData.id}`);

        console.log(resp.data.cart)
        let produtosCart = resp.data.cart;
        
        for(let i=0; i<produtosCart.length; i++){
            if(produtosCart[i].id === produto.id){
                produtosCart.splice(i,1)

                await axios.patch(`http://localhost:3001/users/${userData.id}`, {
                    cart: produtosCart
                })
                setCartChanged(true)
               break
            }
        }

    }

    const decreaseFromCart = async() => {
        setCartChanged(false);
        try {
            const resp = await axios
            (`http://localhost:3001/users/${userData.id}`);
            
            let products = resp.data.cart;

            for(let i=0; i<products.length; i++){
                if(products[i].id === produto.id){
                    let produtoCart = products[i];

                    if(produtoCart.quantidade === 1){
                        deleteFromCart();
                        return

                    } else {
                        products.splice(i,1,{...produto, quantidade: produtoCart.quantidade - 1});
                    }
                    break
                } 
            }
            try{
                await axios.patch(`http://localhost:3001/users/${userData.id}`, {
                    cart: products
                });
                setCartChanged(true)
                    
                } catch (err) {
                    console.log("addToCart ERRO: ", err)
                }
        
        } catch (error) {
            console.log(error)
        }
    }

    const addMoreToCart = async() => {
        setCartChanged(false);
        try {
            const resp = await axios
            (`http://localhost:3001/users/${userData.id}`);
            
            let products = resp.data.cart;
            console.log("produtoS: ", products) 
    
            for(let i=0; i<products.length; i++){
                if(products[i].id === produto.id){
                    let produtoCart = products[i];
                    products.splice(i,1,{...produto, quantidade: produtoCart.quantidade + 1});
                    setCartChanged(true)
                    break
                } 
            }

            try{
            await axios.patch(`http://localhost:3001/users/${userData.id}`, {
                cart: products
            });
                
            } catch (err) {
                console.log("addToCart ERRO: ", err)
            }
    
        } catch (error) {
            console.log(error)
        }
        
    }
  
    return (
      <li 
        key={produto.id}
        className='li-cp product-li'
      >
        <div>
          <img 
              src={produto.imagem} 
              className='product-img-cp'
          />
        </div>
          
        <div >
          <h3 className='p-nome-cart'>{produto.nome}</h3>
          <p className='p-price-cart'>Preço: R${produto.preco}</p> 
          <br/>

          <div className='q-container'>
            <div className='quant-container'>
                <span 
                    className='btn-menos quant-element' 
                    onClick={decreaseFromCart}
                > 
                    <FiMinus size={13} />  
                </span>
                <Divider orientation="vertical" color="gray" flexItem />
                <span className='num-quatidade quant-element'> {produto.quantidade} </span>
                <Divider orientation="vertical" color="gray" flexItem />
                <span 
                    className='btn-mais quant-element' 
                    onClick={addMoreToCart}
                > 
                    <FiPlus size={13}/>  
                </span>
                
            </div>

            <div >
                <FiTrash2 className='trash-icon' onClick={deleteFromCart} size={19}/>
            </div>
          </div>
        </div>
          
      </li>
    )
  }

export default ProdutoCarrinho
