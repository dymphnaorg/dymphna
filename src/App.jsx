
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/services' element={<Services/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
