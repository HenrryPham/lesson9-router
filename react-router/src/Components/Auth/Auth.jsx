import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
function Auth() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={Login} />
        <Route path="/register" elememt={Register}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Auth
