import { useEffect, useState } from 'react'
import User from './User'
import './App.css'

function App() {
  const [data, setdata] = useState([])
const [count,setCount]=useState(1)
  const fetchData= ()=>{

    fetch(`https://randomuser.me/api??page=${count}&results=8`)
    .then(res => res.json())
    .then(res => setdata(res.results))

  }
console.log(data)

  useEffect(()=>{

fetchData()
  },[count])

  return (
    <>
     <User data={data}/>
     <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li onClick={()=> setCount(count-1)} class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">{count}</a></li>
    <li onClick={()=> setCount(count+1)}  class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
    </>
  )
}

export default App
