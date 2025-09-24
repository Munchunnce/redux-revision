import React from 'react'
import Products from '../components/Products';

const Home = () => {
  return (
    <div>
      <h3 className='heading'>Welcome to Redux toolkit store</h3>
      <section>
        <h3>Product</h3>
        <Products/>
      </section>
    </div>
  )
}

export default Home;
