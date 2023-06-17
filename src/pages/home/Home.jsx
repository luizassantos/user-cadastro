import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Produto from '../../components/produtos/Produto';

import './Home.css'

const Home = () => {

  const [produtos, setProdutos] = useState([])

  const url = "http://localhost:3001/products/";

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(prods => setProdutos(prods))
  },[])

  const gerarLista = () =>{
    return produtos.map(produto => {
      return(
        <Produto key={produto.id} produto={produto}/>
      )
    })
  }

  if (!produtos) return (<p>Nenhum produto encontrado</p>);

  return (
    <div className='all-products-div' >
      <h1 style={{textAlign: "center"}}>Home</h1>
      <p style={{textAlign: "center"}}>Produtos</p>

      <div >
        <ul className='all-products-ul'>
          {gerarLista()}
        </ul>
      </div>      
    </div>
  )
}

export default Home
