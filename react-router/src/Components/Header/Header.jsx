import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className="header d-flex justify-content-between">
      <Link to="/" className="home">Home</Link>
      <ul className="main-container d-flex">
        <li className="">
            <Link to="/product" className="list">Product</Link>
        </li>
        <li className="list">
            <Link to="/profile" className="">Profile</Link>
        </li>
        <li className="list">
            <Link to="/about" className="">About</Link>
        </li>
      </ul>
      <ul className="cus-container d-flex">
        <li className="list">
            <Link to="/login" className="">Login</Link>
        </li>
        <li className="list">
            <Link to="/register" className="">Register</Link>
        </li>
        <li className="list">
            <Link to="/cart" className="">Cart</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header