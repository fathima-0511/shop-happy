import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Home/Home.css';
import NewArrivals from '../Home/LatestCollections.json';
import CarasoulImage1 from '../Home/carasoul/image_1.jpg';
import CarasoulImage2 from '../Home/carasoul/image_2.jpg';
import CarasoulImage3 from '../Home/carasoul/image_3.png';
import CarasoulImage4 from '../Home/carasoul/image_4.jpeg';
import CarasoulImage5 from '../Home/carasoul/image_5.jpg';



const Home = () => {
  return (
    <>    
    <div className='container-fluid bg-dark'>
      <div className='d-flex flex-column'>            
              <Carousel className='mb-2'>
                    <Carousel.Item>
                    <img 
                    className='d-block w-100' height='550px'
                    src={CarasoulImage1}
                    alt="First slide" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img 
                    className='d-block w-100' height='550px'
                    src={CarasoulImage2}
                    alt="First slide" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img 
                    className='d-block w-100' height='550px'
                    src={CarasoulImage3}
                    alt="First slide" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img 
                    className='d-block w-100' height='550px'
                    src={CarasoulImage4}
                    alt="First slide" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img 
                    className='d-block w-100' height='550px'
                    src={CarasoulImage5}
                    alt="First slide" />
                  </Carousel.Item>
              </Carousel>  
                

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

export default Home