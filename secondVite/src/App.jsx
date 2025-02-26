import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Accordians from './components/Accordian'
import Modal from './components/Modal'
function App() {

  return (
    <>
      <Navbar/>
     <Products/>
     <Accordians/>
     <Modal/>
    </>
  )
}

export default App
