import { useState } from 'react'


import HeroSection8 from './components/HeroSection8'
import Footer2 from './components/Footer2'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let arr =  [1,2,3,4]
  return (

    <>
     <HeroSection8/>
    { arr.map(ele => <Card/>)}
     <Footer2/>
    </>
  )
}

export default App
