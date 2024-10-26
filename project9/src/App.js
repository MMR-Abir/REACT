import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import Wrapper from './components/Wrapper'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Wrapper/>}>
        <Route index element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route  path='*' element={<NoPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

