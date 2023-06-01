

const LoginSuccess = ({ data }) => {
    return (
        <div className='endform-container'>
            <h2 className='main-title'>Olá, {data.nome}</h2>
            <h3 className='title'>
              Você efetuou login com sucesso! <br/>
              Esses são os seus dados:
            </h3>
            
            <p className='dados'>Nome: {data.nome}</p>
            <p className='dados'>E-mail: {data.email}</p>

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
export default LoginSuccess;