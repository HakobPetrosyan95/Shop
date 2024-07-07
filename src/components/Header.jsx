import React from 'react'
import { NavLink } from 'react-router-dom'

export  function Header() {
  return (
    <div className='Header'>
        <h1>SHOP</h1>

        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>about</NavLink>
            <NavLink to='/contact'>contact</NavLink>
        </nav>
    </div>
  )
}
