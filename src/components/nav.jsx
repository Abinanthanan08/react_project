import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    
    <section className="flex justify-between items-center m-3">
    <h1 className="text-3xl text-yellow-50">Car Enthusiast Hub</h1>
    <nav>
      <ul className="flex space-x-6 text-2xl text-blue-500">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/model">Model</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </section>
  
      
  )
}

export default Nav