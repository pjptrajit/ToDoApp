import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full h-[10vh] bg-black text-white flex justify-center items-center gap-4 '>
        <NavLink to="/">Home</NavLink>  
        <NavLink to="/todo">Todo</NavLink>  
    </div>
  )
}

export default Header