import { useState, useContext } from "react";
import PaginaCadastro from "../../components/cadastro/PaginaCadastro";
import './PaginaLogin.css'
import axios from "axios";
// import UserInfo from "../../pages/userInfo/UserInfo";

import { UserContext } from "../../context/UserContext";

import { Navigate } from "react-router-dom";

const PaginaLogin = () => {

    const {userData, setUserData} = useContext(UserContext);
    const {isUserLogged, setIsUserLogged} = useContext(UserContext);

    const [isCadastrar, setIsCadastrar] = useState(false);
    const [isLoginSucceeded, setIsLoginSucceeded] = useState(false);
    const [isLoginFail, setIsLoginFail] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        setIsCadastrar(true);
    }

    async function handleSubmit(e){
        e.preventDefault();
        //verificar se usuário com e-mail e senha colocados no login existe no sistema
         //se sim: confirmar autenticação do usuário (ir para a página principal)
        try{
            const resp = await axios
            (`http://localhost:3001/users/?email=${email}&senha=${senha}`);

            if(Object.keys(resp.data).length === 0){
                console.log("não encontrado");
                setIsLoginFail(true)
            } else {
                console.log("Login feito com sucesso");
                console.log(resp.data[0]);
                setUserData(resp.data[0]);
                setIsLoginSucceeded(true);
                setIsUserLogged(true);
            }
    
        } catch(erro){
            console.log(erro)
        }
      }

    return (        
        <div className="body-login">
            {isCadastrar ? <PaginaCadastro setIsCadastrar={setIsCadastrar}/> : (
                <div className="container-login">
                    {isLoginSucceeded ? <Navigate to="/home" />  :(
                        <>
                            <h1 className="title-login">Fazer Login</h1>
                            {isLoginFail && <p style={{color:"red"}}>Usuário não encontrado</p>}
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label htmlFor="email-input-l" className="label-login">E-mail</label>
                                    <input 
                                        type="text" id="email-input-l" 
                                        className="input-s"
                                        name='email'
                                        placeholder="Seu e-mail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                
                                <div className="form-control">
                                    <label htmlFor="senha-input-l" className="label-login">Senha</label>
                                    <input 
                                        type="password" id="senha-input-l" 
                                        className="input-s"
                                        name='senha'
                                        placeholder="Sua senha"
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                    />
                                </div>
                
                                <div className="btn-login-container">
                                    <input className='btn-entrar' type="submit" value={"Entrar"} />
                                    <button className='btn-cadastrar' onClick={handleClick}>Criar uma nova conta</button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            ) 
            }
        </div>
    )
}

export default PaginaLogin;