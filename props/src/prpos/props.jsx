

import { useState } from 'react'
import { Child } from './Child'


function Props() {

    const [count , setCount]= useState(0)

    const setNum = (n)=>{
        setCount(count+n)
    }


    let obj = {
      title:"abcd",
      price:200,
      rate:1.2
    }

    let arr = [1,2,3,4,5]
  return (
    <>

      <button onClick={()=> setNum(1)}>+</button>
      <button>{count}</button>
      <button onClick={()=> setNum(-1)}>-</button>

      <hr />
      <br />
      <hr />
      <hr />
      <hr />
      <Child item = {obj} list = {arr}/>
    </>
  )
}

export default Props