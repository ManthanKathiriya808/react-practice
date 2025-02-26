import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount]= useState(0)
  const[val,setValue] = useState(0)
  const inCount = ()=>{
    setCount(count +1)
  }

  const DecCount= ()=>{
    setCount(count -1)
  }

  const handleCount = (num)=>{
    setValue(val+num)
  }
  return (
    <>
      <button onClick={inCount}>➕{count}</button>
      <button >{count}</button>
      <button onClick={DecCount}>➖{count}</button>


      <br />
      <hr />
      <br />


      <button onClick={ ()=> handleCount(1)}>➕</button>
      <button > {val}</button>
      <button onClick={()=> handleCount(-1)}>➖</button>
    </>
  )
}

export default App
