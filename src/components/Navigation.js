import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <span className='logo'>REDUX STORE</span>
      <div>
        <Link className='navLink' to='/'>Home</Link>
        <Link className='navLink' to='/cart'>Cart</Link>
        <span className='cartCount'>Cart items: 0</span>
        <button className='btn'>Add to cart</button>
      </div>
    </div>
  )
}

export default Navigation;
