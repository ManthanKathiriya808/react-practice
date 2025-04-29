import FetchApi from "../fetchApi/FetchApi"
import { useState } from "react"

const Currency = ({currency,setCurrency, toexist, setToexist, to ,setTo})=>{


const {data} = FetchApi(`usd`)
let val =    Object.keys(data)


// const addCurr = ()=>{
    //         console.log("done")
    // }

// console.log(currency)
console.log(to)
console.log(currency)
return(
    
    <div>
         
          <select name="" id="" onChange={(e)=> toexist ? setTo(e.target.value ): setCurrency(e.target.value)}>
            {
                val.map(e=><option value={e} key={e}>{e}  </option>)
            }
            
        </select>
    </div>
    )
    // console.log(data)
 
}

export default Currency