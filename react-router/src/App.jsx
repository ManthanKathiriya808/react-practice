import { useState } from 'react'

import './App.css'
import Navbar from './Navabr/Navbar'
import Home from './components/Home'
import Product from './components/Product'
import Users from './components/Users'
import About from './components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  

  return (

<> 
      <Navbar/>
        <div className='container mx-auto mt-5'>
        <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="product/:prodId" element={<Product/>}/>
      <Route path="users" element={ <Users/>}/>
      <Route path="about" element={<About/> }/>
      </Routes>
  </div>
      
       
  
      
   
    </>
  )
}

export default App
