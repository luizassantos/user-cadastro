import React, { useState, useContext } from 'react'
import axios from 'axios'

import { UserContext } from '../../context/UserContext'

import {FaEdit} from 'react-icons/fa'

import './SingleUserInfo.css'

const SingleUserInfo = (props) => {

    const {userData, setUserData} = useContext(UserContext);

    const {isEdit, setIsEdit} = useContext(UserContext);

    let titulo = props.infoTitle
    titulo = titulo.toLowerCase()

    if (titulo === "e-mail"){
        titulo = "email"
    }
    if (titulo === "país"){
        titulo = "pais"
    }

    const updateFieldHandler = (key, value) => {
        setUserData((prevItem) => {
          return {...prevItem, [key]: value};
        });
    };



  return (
    <div className='single-data-container'>
        {!isEdit ? (
            <>
                <div>
                    <p className='infopage-dataTitles'>{props.infoTitle}</p>
                    <p className='infopage-dados'>{props.infoData}</p>
                </div>
            </>
        ) : 
        (
            <>
                <div>
                    <p className='infopage-dataTitles'>{props.infoTitle}</p>
                    <input 
                        type='text' 
                        className='infopage-dados'
                        value={props.infoData || ""}
                        onChange={(e) => updateFieldHandler(titulo, e.target.value)}
                    />
                </div>
                
            </>
        )}

    </div>
  )
}

export default SingleUserInfo;
