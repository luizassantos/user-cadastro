import { useState } from "react";
import PaginaCadastro from "../cadastro/PaginaCadastro";
import './PaginaLogin.css'

const PaginaLogin = () => {

    const [isCadastrar, setIsCadastrar] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        setIsCadastrar(true);
    }

    const handleSubmit = (e) => {
        
    }

    return (
        <div>
            {isCadastrar ? <PaginaCadastro/> : (
                <div className="container-login">
                    <h1 className="title-login">Fazer Login</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label htmlFor="email-input-l" className="label-login">E-mail</label>
                            <input 
                                type="text" id="email-input-l" 
                                className="input-s"
                                name='email'
                                placeholder="Seu e-mail"
                                // value={data.email || ""}
                                // onChange={(e) => updateFieldHandler("email", e.target.value)}
                            />
                        </div>
        
                        <div className="form-control">
                            <label htmlFor="senha-input-l" className="label-login">Senha</label>
                            <input 
                                type="password" id="senha-input-l" 
                                className="input-s"
                                name='senha'
                                placeholder="Sua senha"
                                // value={data.senha || ""}
                                // onChange={(e) => updateFieldHandler("senha", e.target.value)}
                                
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