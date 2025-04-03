import { useContext, useEffect } from "react"
import { ApiContext } from "../context/ApiContext"


export const Product =() => {


    const {prod,setProd} = useContext(ApiContext)

    useEffect(()=>{

        fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json())
        .then(res => setProd(res))
    },[])

    return(
        <div className='border p-5 max-w-7xl mx-auto'>
        <div className="grid grid-cols-4 gap-3">
         {
          prod.map((ele) => (
            <div className='rounded-2xl shadow shadow-slate-400 '>
            <img className='w-full h-56' src={ele.image} alt="" />
            <h2>{ele.title}</h2>
          </div>
          ))
         }
        </div>
    </div>
    )
}