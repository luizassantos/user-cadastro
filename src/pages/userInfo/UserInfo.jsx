import React, { useState } from 'react'

import { Navigate } from 'react-router-dom'

import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

import './UserInfo.css'
import SingleUserInfo from '../../components/singleUserInfo/SingleUserInfo'
import axios from 'axios'

const UserInfo = () => {

  const {userData, setIsEdit, isEdit} = useContext(UserContext); 
  const [isAccountDeleted, setIsAccountDeleted] = useState(false)


  const handleUpdateButton = () => {
    setIsEdit(true);
  }

  const handleCancelButton = () => {
    setIsEdit(false);
  }

  const updateUserInfo = async () => {
    try{
      await axios.patch(`http://localhost:3001/users/${userData.id}`, userData)
      alert("Dados atualizados com sucesso!");
      setIsEdit(false);
    } catch (erro){
      console.log(erro)
      return (
        <>
          <p style={{color:"red"}}>Não foi possível atualizar seus dados. Um erro ocorreu</p>
          <small style={{color:"red"}}>{erro}</small>
        </>
      )
  }
  }

  const deleteAccount = async () => {
     await axios.delete(`http://localhost:3001/users/${userData.id}`)
     alert("Conta deletada com sucesso!")
     setIsAccountDeleted(true)
  }

  return (
    <div>
      <h1>Sua conta</h1>

      <div className='infopage-container'>
            <h2 className='infopage-title'>Olá, {userData.nome}</h2>
            <h3 className='infopage-subtitle'>
              Esses são seus dados e informações!
            </h3>
            
            <div className='infopage-data-container'>

              <div>
                <h3 className='info-h3-subtitle'>Acesso</h3>

                <SingleUserInfo infoTitle={"Nome"} infoData={userData.nome}/>
                <SingleUserInfo infoTitle={"E-mail"} infoData={userData.email}/>

                <h3 className='info-h3-subtitle'>Endereço</h3>

                <SingleUserInfo infoTitle={"CEP"} infoData={userData.cep}/>
                <SingleUserInfo infoTitle={"Rua"} infoData={userData.rua}/>
                <SingleUserInfo infoTitle={"Bairro"} infoData={userData.bairro}/>
                <SingleUserInfo infoTitle={"Cidade"} infoData={userData.cidade}/>
                <SingleUserInfo infoTitle={"Estado"} infoData={userData.estado}/>
                <SingleUserInfo infoTitle={"País"} infoData={userData.pais}/>
              </div>

              {!isEdit ? (
                <div className='info-update-instructions'>
                  <h4>Para atualizar seus dados, <br/> clique no botão abaixo.</h4>

                  <button 
                    className='btn-update-info' 
                    onClick={handleUpdateButton}
                  >
                    Atualizar Dados
                  </button>
                </div>
              ) : (
                <div>
                  <button onClick={handleCancelButton}> Cancelar </button>
                  <button onClick={updateUserInfo}> Salvar </button>

                </div>
              )
              }
            </div>

            <div className='div-btn-excluir'>
              <button className='btn-excluir-conta' onClick={deleteAccount}>EXCLUIR CONTA</button>
            </div>

            {/* {isAccountDeleted && <Navigate to="/home"/>} */}
            {isAccountDeleted && window.location.reload}

      </div>

    

    </div>
  )
}

export default UserInfo
