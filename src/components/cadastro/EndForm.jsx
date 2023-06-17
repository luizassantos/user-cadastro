import './styles/Form.css'
import './styles/Endform.css'

const EndForm = ({ data }) => {
    return (
        <div className='endform-container'>
            <h2 className='main-title'>Verificação de dados</h2>
            <h3 className='title endform-h3'>
                Você chegou à última etapa de cadastro! <br />
                Verifique seus dados para finalizar
            </h3>
            
            <h3 className='endform-h3'>Login</h3>
            <p className='dados'>Nome: {data.nome}</p>
            <p className='dados'>E-mail: {data.email}</p>
            <p className='dados'>Senha: {data.senha}</p>

            <h3>Endereço</h3>
            <p className='dados'>CEP: {data.cep}</p>
            <p className='dados'>Rua: {data.rua}</p>
            <p className='dados'>Bairro: {data.bairro}</p>
            <p className='dados'>Cidade: {data.cidade}</p>
            <p className='dados'>Estado: {data.estado}</p>
            <p className='dados'>País: {data.pais}</p>
        </div>

        
    )
}
export default EndForm;