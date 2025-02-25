import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Child } from './components/child'
import { Parents } from './components/Parents'

function App() {

  let obj = {
    name:"manthan",
    lastName:"patel",
    loc:"Bhavnagar"
  }

  let arr = [1,2,3,4,5]
  return (

    <>
  <Child props={obj}/>
  <Parents props={arr}/>
    </>
  )
}

export default App
