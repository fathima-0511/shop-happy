import React from 'react';
import '../Magazine/Magazine.css';

const Magazine = () => {
  return (
    <div className='d-flex align-items-center justify-content-between gap-4 fs-5 magazine-block' style={{fontFamily:'"Cabin", serif'}}>
            <div>
              <center>
                <img src={require('../../components/assets/businessInsider_logo.png')} alt="BusinessInsider Logo" height='70' width='120'/>
              </center>       
              <div><center>"The best phones offer stellar performance, cameras, and battery life at affordable prices."</center></div>
            </div>
            <div>
              <center>
                <img src={require('../../components/assets/zdNet_logo.png')} alt="ZDNET Logo" height='70' width='200'/>
              </center>
              <div><center>"Apple remain the leading producer of the mobile computing device that changed everything."</center></div>
            </div>
            <div>
              <center>
                <img src={require('../../components/assets/t3_logo.png')} alt="T3 Logo" height='70' width='80'/>
              </center>
              <div><center>"CFC refrigerant and foam. Self closing doors easy to clean and replace magnetic balloon gasket."</center></div>
            </div>
            <div>
              <center>
                <img src={require('../../components/assets/stuff_logo.png')} alt="Stuff Logo" height='70' width='160'/>
              </center>
              <div><center>"Ultra Smart Watch for Android - Advanced Fitness Tracking, Heart Rate Monitor, GPS."</center></div>
            </div>

</div>
  )
}

export default Magazine;


