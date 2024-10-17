import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Userhome from './user/userhome'
import Usernav from './user/usernav'
import Sidebar from './user/sidebar'
import Feed from './user/feed'
import Contactus from './user/contactus'
import AddNumbers from './user/add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Usernav/>
    <br/>
   
   <Userhome/>
     <Userhome/> */}
     {/* <Contactus/> */}
     <AddNumbers/>
    </>
  )
}

export default App
