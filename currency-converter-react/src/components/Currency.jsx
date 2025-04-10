import FetchApi from "../fetchApi/FetchApi"
import { useState } from "react"

const Currency = ()=>{
    const [currency,setCurrency] = useState({})

    const {data} = FetchApi(`usd`)

// console.log(data)
    return(
        <select name="" id="">
            <option value="">
                {
                    data.map((ele)=> {ele})
                }
            </option>
        </select>
    )
    // console.log(data)
}

export default Currency