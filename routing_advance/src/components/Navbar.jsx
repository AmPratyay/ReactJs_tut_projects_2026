import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 justify-between items-center h-25 bg-cyan-950 text-white'>
      <h3 className='text-2xl font-bold'>Apratyay</h3>
      <div className='flex gap-8'>
        <Link className='text-lg font-bold' to="/">Home</Link>
        <Link className='text-lg font-bold' to="/about">About</Link>
        <Link className='text-lg font-bold' to="/course">Course</Link>
        <Link className='text-lg font-bold' to="/contact">Contact</Link>
        <Link className='text-lg font-bold' to="/product">Product</Link>
      </div>
    </div>
  )
}

export default Navbar
