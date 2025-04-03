
import { useState } from "react"
import { ApiContext } from "./ApiContext"


export const ApiContextProvider = ({children})=>{

    const [prod,setProd] = useState([])
    const [user,setUser] = useState([])

    let plen = prod.length
    let ulen = user.length
    console.log(plen)
    return(
            <ApiContext.Provider value={{plen,ulen,prod,setProd,user,setUser}}>
                {children}
            </ApiContext.Provider>
    )
}