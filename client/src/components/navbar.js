import React from 'react'
import { Link, NavLink } from  "react-router-dom";
import "./navbar.css"


const Navbar = () => {
  return (
 <>
    <div>
      <div className='container'>
      <div className='navbar'>
         <div className='text-2xl'>Arrival Aid</div>
         <Link to='/'>
         <div className='text-xl'>Home</div> 
         </Link>
         <Link to='/map'>
         <div className='text-xl'>Map</div> 
         </Link>
         <Link to='/form'>
        <div className='text-xl'>Form</div> 
        </Link>
        </div>
        <div className='text-xl pr-3'>Login</div>
        </div>
    </div>
  
    </>
  )
}

export default Navbar