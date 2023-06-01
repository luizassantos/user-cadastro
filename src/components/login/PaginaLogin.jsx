import { useState } from "react";
import PaginaCadastro from "../cadastro/PaginaCadastro";
import './PaginaLogin.css'
import axios from "axios";

const PaginaLogin = () => {

    const [isCadastrar, setIsCadastrar] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        setIsCadastrar(true);
    }

    async function handleSubmit(email,senha){
        //verificar se usuário com e-mail e senha colocados no login existe no sistema
         //se sim: confirmar autenticação do usuário (ir para a página principal)

        // try{
        //   await axios.post("http://localhost:3001/users", user);
        //   setMsg("Sucesso!!")
    
        // } catch(erro){
        //     setMsg(erro)
        // }
      }

    return (
        <div>
            {isCadastrar ? <PaginaCadastro/> : (
                <div className="container-login">
                    <h1 className="title-login">Fazer Login</h1>

                    <form onSubmit={handleSubmit(email,senha)}>
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
                </div>
            )
                
            }
        </div>
    )
}

export default PaginaLogin;