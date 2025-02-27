

import { useState } from 'react'
import { Child } from './Child'


function Props() {

    const [count , setCount]= useState(0)

    const setNum = (n)=>{
        setCount(count+n)
    }


    let obj ={
        name:"manthan",
        surname:"patel",
        rollNo:33
    }

  return (
    <>

      <button onClick={()=> setNum(1)}>+</button>
      <button>{count}</button>
      <button onClick={()=> setNum(-1)}>-</button>


      <Child props={obj}/>
    </>
  )
}

export default Props