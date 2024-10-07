import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExuseEffect from './ex_useEffect'
import Headernav from './headernav.jsx'
import Slider from './slider.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Headernav/>
    <Slider/>
      <ExuseEffect/>
    </>
  )
}

export default App
