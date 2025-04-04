import { useEffect, useState } from "react"


export const ApiFetch = (url)=>{


    const [data,setData] = useState([])
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(true)


    const fetchData = async ()=>{

        try {
            
            let res = await fetch(url)
        let resp = await res.json()
        setData(resp)
     
        } catch (error) {
            
            setError(true)
            console.log(error)
        }

        finally{
            setLoading(false)
           
        }
    }


    useEffect(()=>{

        fetchData()
    },[])

    return {loading,error,data}
}