import { useState } from 'react'
import { BrowseRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Auth from './Components/Auth/Auth'
import Header from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowseRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </BrowseRouter>
    </div>
  )
}

export default App
