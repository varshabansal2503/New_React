import { useState } from 'react'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './components/style.css'
import Hero from './components/Hero'
import Delivery from './components/Delivery'
import Healthy from './components/Healthy'
import Product from './components/Product'
import Productts from './components/Productts'
import Footer from './components/Footer'
function App() {
        

  return (
    <>
      <Navbar/>
      <Hero/>
      <Delivery/>
      <Healthy/>
      <Product/>
      <Productts/>
      <Footer/>
      
    
    </>
  )
}

export default App
