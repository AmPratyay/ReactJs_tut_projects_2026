import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navContainer'>
        <h3>Pratyay Amrit</h3>
        <div className='links'>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/about'>About</Link>
            <Link className='link' to='/contact'>Contact</Link>
            <Link className='link' to='/product'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar
