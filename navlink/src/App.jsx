import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './pages/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { User } from './pages/User'
import { Product } from './pages/product'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/user' element={<User/>}/>
    </Routes>
    </>
  )
}

export default App
