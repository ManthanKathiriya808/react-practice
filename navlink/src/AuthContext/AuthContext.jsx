import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()



export const AuthProvider = ( {children})=>{

    const [tok,setTok] = useState("")

useEffect(()=>{

    const credentials = { username: "johnd", password: 
        "m38rmF$" };
    fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(data => setTok(data.token));

},[])


console.log(tok)

    return(
        <AuthContext.Provider value={{tok}}>
            {children}
        </AuthContext.Provider>
    )
}