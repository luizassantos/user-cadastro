import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import {FiSend} from 'react-icons/fi';

import './styles/PaginaCadastro.css';
import CabecalhoForm from './CabecalhoForm';
import LoginInfoForm from './LoginInfoForm';
import AddressInfoForm from './AddressInfoForm';
import EndForm from './EndForm';

import axios from 'axios';

import useForm from '../../hooks/useForm';
import { useState } from 'react';
import PaginaLogin from '../login/PaginaLogin';

const formTemplate = {
  nome: "",
  email: "",
  senha: "",
  confsenha: "",
  cep: "",
  rua: "",
  bairro: "",
  cidade: "",
  estado: "",
  pais: ""
}


function validateFields(value,currentStep){
  const errors = {};
  let isError = false;

  if(currentStep === 0){
    if(value.nome === ""){
      errors.nome = "Insira o nome"
    } 
    if(value.email === ""){
      errors.email = "Insira seu e-mail"
    }
  
    if(value.senha === ""){
      errors.senha = "Insira senha"
    }
    if(value.confsenha === ""){
      errors.confsenha = "Confirme sua senha"
    } else 
    if(!(value.confsenha === value.senha)){
      errors.confsenha = "As senhas devem ser iguais"
    }
  } else if(currentStep === 1){

    if(value.cep === ""){
      errors.cep = "Insira seu CEP"
    } else if(value.cep.length < 8 || value.cep.length > 9){
      errors.cep = "CEP inválido"
    }
  
    if(value.rua === ""){
      errors.rua = "Insira sua rua"
    }
    if(value.bairro === ""){
      errors.bairro = "Insira seu bairro"
    }
    if(value.cidade === ""){
      errors.cidade = "Insira sua cidade"
    }
    if(value.estado === ""){
      errors.estado = "Insira seu estado"
    }
    if(value.pais === ""){
      errors.pais = "Insira seu país"
    }
  }

  if(!(Object.values(errors).length === 0)){
    isError = true;    
  }

  return [errors, isError];
}


const PaginaCadastro = () => {

  const [data, setData] = useState(formTemplate);
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState("");

  const updateFieldHandler = (key, value) => {
    setData((prevItem) => {
      return {...prevItem, [key]: value};
    });
  };
  
  const formComponents = [
          <LoginInfoForm data={data} updateFieldHandler={updateFieldHandler} errors={errors} />, 
          <AddressInfoForm data={data} updateFieldHandler={updateFieldHandler} errors={errors} />, 
          <EndForm data={data} />
        ];

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents);

  async function submitUser(user){
    try{
      await axios.post("http://localhost:3001/users", user);
      setMsg("Sucesso!!")

    } catch(erro){
        setMsg(erro)
    }
  }

  return (
    <div className="container-pagCadastro">
      <div className="header">
      {!isLastStep && <CabecalhoForm /> }
        
      </div>

      <div className="form-container">

        <form onSubmit = { (e) => {
              const validationMsg = validateFields(data,currentStep)
              setErrors(validationMsg[0]);

              if(validationMsg[1]){
                e.preventDefault()
              } else {
                console.log(errors);
                changeStep(currentStep + 1, e)

                if(isLastStep){
                  submitUser(data)
                }
              }
            }
          }> 

          <div className="inputs-container">
            {currentComponent}
          </div>

          <div className="actions">
            

            {msg === "Sucesso!!" ? (
              <>
                <p style={{color:"green"}}>Cadastro Realizado com sucesso!</p>
                <a href={<PaginaLogin/>}>Fazer Login</a> 
              </>
              
              ):(
              <>
              {!isFirstStep ? (
                <button className='btn btn-voltar' type='button' onClick={() => changeStep(currentStep - 1)}>
                  <GrFormPrevious />
                  <span>Voltar</span>
                </button>
            ) : (
               <a href={"/login"}> Já tenho conta! </a>
            )}
            
              {!isLastStep ? (
                <button className='btn' type='submit'>
                  <span>Avançar</span>
                  <GrFormNext className='icon'/>
                </button>
              ) : 
                <button className='btn' type='submit'>
                  <span>Enviar</span>
                  <FiSend  />
                </button>
              }
              </>

            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaginaCadastro;