import './styles/AddressInfoForm.css'
import { useState } from 'react';

const AddresInfoForm = ({ data, updateFieldHandler, errors }) => {
   
    function handleOnBlur(ev){
        const cep = ev.target.value;

        if (cep.length === 8 ||
            (cep.length === 9 && cep.includes("-", 5))){
        fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then((res)=> res.json())
        .then((data) => {

            if(!("erro" in data)){
                updateFieldHandler("rua", data.logradouro)
                updateFieldHandler("bairro", data.bairro)
                updateFieldHandler("cidade", data.localidade)
                updateFieldHandler("estado", data.uf)
            }})
        }
    }

    return(

        <div className='endereco-input-block'>
            
            <div className="form-control input-cep">
                <label htmlFor="cep-input">CEP</label>
                {((!data.cep && errors.cep) || (data.cep && errors.cep)) && 
                    <span className="empty">{errors.cep}</span> }
                <input 
                    type="text" id="cep-input" 
                    className="input-s"
                    placeholder="Seu CEP"
                    onBlur={handleOnBlur}
                    value={data.cep || ""}
                    onChange={(e) => updateFieldHandler("cep", e.target.value)}
                     />
            </div>
            
            <div className="form-control input-rua">
                <label htmlFor="rua-input">Rua</label>
                {!data.rua && errors.rua && <span className="empty">{errors.rua}</span> }
                <input 
                type="text" id="rua-input" 
                className="input-s"
                placeholder="Sua rua"
                value={data.rua || ""}
                onChange={(e) => updateFieldHandler("rua", e.target.value)}
                 />
            </div>

            <div className="form-control input-bairro">
                <label htmlFor="bairro-input">Bairro</label>
                {!data.bairro && errors.bairro && <span className="empty">{errors.bairro}</span> }
                <input 
                type="text" id="bairro-input" 
                className="input-s"
                placeholder="Seu bairro"
                value={data.bairro || ""}
                onChange={(e) => updateFieldHandler("bairro", e.target.value)}
                 />
            </div>

            <div className="form-control input-cidade">
                <label htmlFor="cidade-input">Cidade</label>
                {!data.cidade && errors.cidade && <span className="empty">{errors.cidade}</span> }
                <input 
                type="text" id="cidade-input" 
                className="input-s"
                placeholder="Sua cidade"
                value={data.cidade || ""}
                onChange={(e) => updateFieldHandler("cidade", e.target.value)}
                 />
            </div>

            <div className="form-control input-estado">
                <label htmlFor="estado-input">Estado</label>
                {!data.estado && errors.estado && <span className="empty">{errors.estado}</span> }
                <input 
                type="text" id="estado-input" 
                className="input-s"
                placeholder="Seu estado"
                value={data.estado || ""}
                onChange={(e) => updateFieldHandler("estado", e.target.value)}
                 />
            </div>

            <div className="form-control input-pais">
                <label htmlFor="pais-input">País</label>
                {!data.pais && errors.pais && <span className="empty">{errors.pais}</span> }
                <input 
                type="text" id="pais-input" 
                className="input-s"
                placeholder="Seu país"
                value={data.pais || ""}
                onChange={(e) => updateFieldHandler("pais", e.target.value)}
                 />
            </div>

            
        </div>
    )
}
export default AddresInfoForm;