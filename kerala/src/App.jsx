
import './App.css'
import Aboutpage from './aboutPage'
import CardsKerala from './cardsKerala'
import Headernav from './headerNav'
import Slider from './slider'
import Homepage from './homePage'
import {Routes,Route} from 'react-router-dom'
import { lazy,Suspense } from 'react'
import { Spinner } from 'react-bootstrap'
import {CommentProvider} from './componentProvider';


function App() {
  const Hpage=lazy(()=>import('./homePage'))
  const AboutPage=lazy(()=>import('./aboutPage'))

  return (
    <>
   <CommentProvider>
    <Headernav/>
    <section>
      <Suspense fallback={<div>loading...</div>}>
     
    <Routes>
      <Route path='/' element={<Hpage/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
    </Routes>
    </Suspense>
    </section>
    </CommentProvider>
    </>
  )
}

export default App
