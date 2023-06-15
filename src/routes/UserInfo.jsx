import React from 'react'

import { useContext } from 'react'
import { UserContext } from '../context/UserContext'


const UserInfo = () => {

  const {userData} = useContext(UserContext);

  return (
    <div>
      <h1>Informações do Usuário</h1>

      <div className='infopage-container'>
            <h2 className='main-title'>Olá, {userData.nome}</h2>
            <h3 className='title'>
              Você efetuou login com sucesso! <br/>
              Esses são os seus dados:
            </h3>
            
            <p className='dados'>Nome: {userData.nome}</p>
            <p className='dados'>E-mail: {userData.email}</p>

            <h3>Endereço</h3>
            <p className='dados'>CEP: {userData.cep}</p>
            <p className='dados'>Rua: {userData.rua}</p>
            <p className='dados'>Bairro: {userData.bairro}</p>
            <p className='dados'>Cidade: {userData.cidade}</p>
            <p className='dados'>Estado: {userData.estado}</p>
            <p className='dados'>País: {userData.pais}</p>
        </div>
    </div>
  )
}

export default UserInfo
