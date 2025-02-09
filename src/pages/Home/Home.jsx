import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Home/Home.css';
import NewArrivals from '../Home/LatestCollections.json';

const Home = () => {
  return (
    <>    
    <div className='container-fluid bg-dark'>
      <div className='d-flex flex-column'>  
        <div className='mb-2'>          
              <Carousel>
                  <Carousel.Item className='bg-img-carasoul-1'>
                    <div className='carasoulFlex1'>
                      <div className='CarasoulFlex1-Item'>
                        <h1><b>Your Phone Your Style</b></h1>
                        <br />
                        <p>Unleash, Express, and Impress</p>
                        <br />
                        <button className='shop-mobiles-btn'>Shop Mobiles</button>
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
                        <button className='shop-wathces-btn'>Shop Smart Watches</button>
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
                        <button className='shop-appliances-btn'>Shop Appliances</button>
                      </div>
                    </div>
                  </Carousel.Item>
              </Carousel> 
            </div> 
                

              {/*<div className='home mb-5'>
                  <div className='welcome-note'>
                    <h4>Welcome !!!</h4>
                    <h1>SHOP-HAPPY</h1>
                    <button className='mt-1 btn btn-primary'>SignUp</button>
                    <div className='m-2 fs-6'><span>Already have an account??</span><a href="#" className='text-warning'> Login Here</a></div>
                  </div>
              </div>*/}

          <div className='products-illustration bg-secondary mb-3'>
            <h3 className='m-4 text-bg-dark'><center>Our Latest Collections</center></h3>
                <div className='container-fluid'>
                    <div className='d-flex flex-wrap gap-4'>{
                        NewArrivals && NewArrivals.map((NewItem)=>{
                          return(
                            <div className="card p-2 m-2" key={NewItem.id} style={{width:'18rem'}}>
                                <img src={NewItem.img_src} className="card-img-top" alt="..." width='400' height='300'/>
                                <div className="card-body text-bg-info">
                                  <h5 className="card-title">{NewItem.name}</h5>
                                  <p className="card-text">{NewItem.description}</p>
                                  <a href="#" className="btn btn-primary">View More</a>
                                </div>
                            </div>
                        )}
                      )}
                    </div>
                </div>
          </div>

      </div>
    </div>
    </>
  )
}

export default Home;