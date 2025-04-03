import { useContext, useEffect } from "react"
import { ApiContext } from "../context/ApiContext"


export const User =() => {


    const {user,setUser} = useContext(ApiContext)

    useEffect(()=>{

        fetch(`https://fakestoreapi.com/users`)
        .then(res => res.json())
        .then(res => setUser(res))
    },[])

    return(
        <div className='border p-5 max-w-7xl mx-auto'>
        <div className="grid grid-cols-4 gap-3">
         {
          user.map((ele) => (
            <div key={ele.id} className='rounded-2xl shadow shadow-slate-400 '>
         
            <h2>{ele.name.firstname } {ele.name.lastname}</h2>
          </div>
          ))
         }
        </div>
    </div>
    )
}