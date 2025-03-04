
import Accordian from './components/Accordian'
import Modals from './components/Modal'
import './App.css'
import Navr from './components/Nav'
import Canvas from './components/OffCanvas'
import { useState } from 'react'
function App() {

  const [show ,setShow] = useState(false)
  const [show1 ,setShow1] = useState(false)
  // console.log(show)
  return (
    <>
       <Navr show={show} setShow={setShow}/>
      <Accordian/>
      <Modals show={show} setShow={setShow}/>
    <button onClick={()=> setShow(!show)}>Modal</button>
    <br /><br />
<Canvas shows= {show1} setShows={setShow1}/>
    </>
  )
}

export default App
