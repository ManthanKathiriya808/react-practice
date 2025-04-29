import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrimarySearchAppBar from './comporents/PrimarySearchAppBar'
import ControlledOpenSpeedDial from './comporents/ControlledOpenSpeedDial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <PrimarySearchAppBar/>
        <ControlledOpenSpeedDial/>
    </>
  )
}

export default App
