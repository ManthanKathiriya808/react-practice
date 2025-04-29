import { useDispatch, useSelector } from "react-redux"
import { desCount, inCount, resetCount } from "../toolkit/counterSlice"


const Counter = ()=>{
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()

    return(


        <>
            
        <button onClick={() => dispatch(inCount())}>+</button>
        <h1>{count}</h1>
        <button  onClick={() => dispatch(desCount())}>-</button>
        <br />
        <br />
        <button  onClick={() => dispatch(resetCount())}>0</button>
        </>
    )
}

export default Counter