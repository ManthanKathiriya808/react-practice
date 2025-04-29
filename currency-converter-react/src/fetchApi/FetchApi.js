import { useEffect } from "react"
import { useState } from "react"




const FetchApi = (currency)=>{

    const [data, setData] = useState([])

    const api=()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res)=> { setData(res[currency])})
    }
    useEffect(() => {
       
           api()
        }, [currency])

        return {data};
        // console.log(data)
}

export default FetchApi