import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  //const [count, setCount] = useState(0)
  const [msg, setMsg] = useState([])
  const messageGet=()=>{
    const url="http://localhost:9000/home"
    axios.get(url)
    .then((res)=>{
      setMsg(res.data)
    })
  }

  return (
    <>
       <button onClick={messageGet}>Message</button>
       {msg.map((item)=>{
        return(
          <p>{item}</p>
        )
       })}
    </>
  )
}

export default App
