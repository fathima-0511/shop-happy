import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Carousel/Carousel.css';

const CarouselComponent = () => {
  return (
    <>
    <Carousel>
    <Carousel.Item className='bg-img-carasoul-1'>
      <div className='carasoulFlex1'>
        <div className='CarasoulFlex1-Item'>
          <h1><b>Your Phone Your Style</b></h1>
          <br />
          <p>Unleash, Express, and Impress</p>
          <br />
          <button className='shop-btn'>Shop Mobiles</button>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item className='bg-img-carasoul-2'>
      <div className='carasoulFlex2'>
        <div className='CarasoulFlex2-Item'>
          <h1><b>Smart Watch DT8 Ultra+</b></h1>
          <br />
          <p>More than a sport watch, giving you the best screen quality</p>
          <br />
          <button className='shop-btn'>Shop Smart Watches</button>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item className='bg-img-carasoul-3'>
      <div className='carasoulFlex3'>
        <div className='CarasoulFlex3-Item'>
          <h1><b>Home Appliances</b></h1>
          <br />
          <p>Empower Your Home with Smart Solutions</p>
          <br />
          <button className='shop-btn'>Shop Appliances</button>
        </div>
      </div>
    </Carousel.Item>
</Carousel> 
</>
  )
}

export default CarouselComponent;