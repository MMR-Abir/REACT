import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>}>
        <Route index element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route  path='nopage' element={<NoPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

