import React, { useState, useEffect } from 'react'

import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

import axios from 'axios';

const Carrinho = () => {

    const {cartProducts, setCartProducts, userData, setUserData} = useContext(UserContext);
    // const [isCartWithProduct, setIsCartWithProduct] = useState(false);

    let produtos 

    const gerarLista = () =>{
      console.log(userData.cart)

      return userData.cart.map(produ => {
        console.log(produ)
        return(
          <div>
              <p>{produ.nome}</p>
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
    },[])

    

    // async function gerarListaCarrinho () {
    //   const userCart = userData.cart

    //   userCart.forEach( async prodId => {
    //     const resp = await axios (`http://localhost:3001/products/${prodId}`)
    //     let prod = await resp.data

    //     produtos.push(prod)
    //   });

    //   // for(let i = 0; i<3; i++){
    //   //  let pID = userData.cart[i];

    //   // //  try{
    //   //   const resp = await axios (`http://localhost:3001/products/${pID}`)
    //   //   let prod = resp.data

    //     console.log("prod: ", produtos)

    //     // return (
    //     //   <div>
    //     //     <p>{prod.nome}</p>
    //     //   </div>
    //     // )

    //   //  } catch (e) {
    //   //     console.log(e)
    //   //  }

    //   }
    
    

  if(userData.cart.length > 0) {
    return (
      <div>
        <h2>Seu Carrinho: </h2> <br/>
        {gerarLista()}
      </div>
    )
  } else {
    return(
      <div>
        <h3>Carrinho de compras</h3>
        <h4>Seu Carinho está vazio!</h4>
      </div>
    )
  }

  // return (
  //   <div>
  //     <h3>Carrinho de compras</h3>

  //     {isCartWithProduct ? (
  //         <div>
  //           <h3>Seu Carinho está vazio!</h3>
  //         </div>
  //     ) : (
  //       <>
  //         {
  //           gerarLista()
  //         }
  //       </>
  //     )}

  //   </div>
  // )

}
export default Carrinho;
