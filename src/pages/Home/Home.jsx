import React from 'react';
import '../Home/Home.css';

const Home = () => {
  return (
    <div className='home'>
        <div className='welcome-note'>
          <h4>Welcome !!!</h4>
          <h1>SHOP-HAPPY</h1>
          <button className='mt-1 btn btn-primary'>SignUp</button>
          <div className='m-2 fs-6'><span>Already have an account??</span><a href="#" className='text-warning'> Login Here</a></div>
        </div>
    </div>
      
  )
}

export default Home