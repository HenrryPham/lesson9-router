import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './Products/Product'
import Cart from './Cart/Cart'
import Profile from './Profile/Profile'
import About from './About/About'
function Home() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/Products" element={<Product/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Home
