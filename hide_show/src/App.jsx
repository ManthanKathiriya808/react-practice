import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [show, setShow] = useState(false)
console.log(show)
  return (
    <>  
        <div className="container border rounded-3 p-5 }" style={{background:show? "blue": "green"}} >
          <input type={show ? "text" :"password"} className='rounded-3 bg-white me-3 text-black'/>
          <button className='btn-danger btn  rounded-3'  onClick={()=>setShow(!show)}> {show? "👁️":"☠️"}</button>
        </div>
    </>
  )
}

export default App
