import './styles/Form.css'

const LoginInfoForm = ({ data, updateFieldHandler, errors }) => {



    return(
        <div>
            <div className="form-control">
                <label htmlFor="nome-input">Nome Completo</label>
                {!data.nome && errors.nome && <span className="empty">{errors.nome}</span> }
                <input 
                    type="text" id="nome-input" 
                    className="input-s"
                    placeholder="Seu nome completo"
                    name='nome'
                    value={data.nome || ""}
                    onChange={(e) => updateFieldHandler("nome", e.target.value)}
                />
            </div>
            
            <div className="form-control">
                <label htmlFor="email-input">E-mail</label>
                {!data.email && errors.email && <span className="empty">{errors.email}</span> }
                <input 
                    type="text" id="email-input" 
                    className="input-s"
                    name='email'
                    placeholder="Seu e-mail"
                    value={data.email || ""}
                    onChange={(e) => updateFieldHandler("email", e.target.value)}
                 />
            </div>

            <div className="form-control">
                <label htmlFor="senha-input">Senha</label>
                {!data.senha && errors.senha && <span className="empty">{errors.senha}</span> }
                <input 
                    type="password" id="senha-input" 
                    className="input-s"
                    name='senha'
                    placeholder="Sua senha"
                    value={data.senha || ""}
                    onChange={(e) => updateFieldHandler("senha", e.target.value)}
                    
                 />
            </div>

            <div className="form-control">
                <label htmlFor="confsenha-input">Confirmar senha</label>
                {((!data.confsenha && errors.confsenha) || 
                    (data.confsenha && errors.confsenha === "As senhas devem ser iguais")) 
                     && <span className="empty">{errors.confsenha}</span> }
                <input 
                    type="password" id="confsenha-input" 
                    className="input-s"
                    name='confsenha'
                    placeholder="Sua senha"
                    value={data.confsenha || ""}
                    onChange={(e) => updateFieldHandler("confsenha", e.target.value)}
                   
                 />
            </div>
        </div>
    )
}
export default LoginInfoForm;