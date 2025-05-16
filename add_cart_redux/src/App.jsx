import { useState } from 'react'

import './App.css'
import Product from './components/Product'
import Login from './components/Login'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import Cart from './components/Cart'


function App() {

  let auth = useSelector(state=> state.auth.auth)
  let cart = useSelector(state=> state.cart.cartList)
  let showCart = useSelector(state=> state.cart.showCart)
 

  console.log(cart)
  console.log(auth)

 return (

    <>
    
    { auth &&  <Navbar/>}
    { !auth &&  <Login/>}
    { auth &&  <Product/>}

{ auth && showCart && <Cart/>}
    
</>
 )
       
}

export default App
