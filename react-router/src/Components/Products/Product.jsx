import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Id from './Id'
function Product() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/id" element={<Id/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Product