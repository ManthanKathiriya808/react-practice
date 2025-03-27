import React from "react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";


const Product =()=>{


    const {prodId} = useParams()
    
        const [data,setData] = useState({})
    
    useEffect(()=>{
    
        fetch(`https://fakestoreapi.com/products/${prodId}`)
        .then(res => res.json())
        .then(res => setData(res) )
    },[])

    console.log(data)
    return(
     <>
           <div className="grid grid-flow-col grid-rows-3 gap-4">
        <div className="row-span-3 ..."><img src={data.image} className="h-100" alt="" /></div>
        <div className="col-span-2 ...">{data.title}</div>
        <div className="col-span-2 row-span-2 ...">{data.price}</div>
      </div>
     </>
    )
}

export default Product