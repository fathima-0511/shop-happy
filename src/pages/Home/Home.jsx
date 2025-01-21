import React from 'react';
import '../Home/Home.css';
import OnlineShopBg from './online_shop_bg.png';

const Home = () => {
  return (
      <div className='position-relative'>
        <div className='position-absolute top-0 end-0'>
            <img src={OnlineShopBg} alt="" height='600' width='600'/>
        </div>
     </div>
  )
}

export default Home