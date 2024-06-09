import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import Work from './pages/Work'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/work' element={<Work />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
