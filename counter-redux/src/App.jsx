
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decCount, inCount, resetCount } from './redux/action'

function App() {


const count = useSelector((state)=> state.count)
const dispatch = useDispatch
console.log(count)
  return (
    <>
     <button onClick={() => dispatch(inCount())}>+</button>
        <h1>{count}</h1>
     <button onClick={() => dispatch(decCount())}>-</button>
     <br />
     <br />
     <br />
     <button onClick={() => dispatch(resetCount())}> reset</button>
    </>
  )
}

export default App
