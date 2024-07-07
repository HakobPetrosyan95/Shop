import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { Routes, Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { CategoryPage } from './pages/CategoryPage'
import { DetailPage } from './pages/DetailPage'


  

export  function App() {
  return (
    <div className='App'>
      <Header/>

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path='/category/:name' element={<CategoryPage/>}/>
      <Route path='/recipe/:id' element={<DetailPage/>}/>
    </Routes>

      <Footer/>
    </div>
  )
}
