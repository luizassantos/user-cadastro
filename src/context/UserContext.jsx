import { createContext, useState } from "react";

export const UserContext = createContext();


export const UserProvider = ({ children }) => {

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
        pais: "",
        cart: []
      }

    const [isUserLogged, setIsUserLogged] = useState(false)
    const [userData, setUserData] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [cartChanged, setCartChanged] = useState(false)



    return (
        <UserContext.Provider value={
            {
                userData, setUserData, 
                isUserLogged, setIsUserLogged,
                isEdit, setIsEdit,
                formTemplate,
                cartChanged, setCartChanged
            }
            }>
            {children}
        </UserContext.Provider>
    )
}