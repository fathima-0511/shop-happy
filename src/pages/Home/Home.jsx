import React from 'react';
import '../Home/Home.css';
import NewArrivals from '../Home/LatestCollections.json';

const Home = () => {
  return (
    <>    
    <div className='container-fluid bg-dark'>
      <div className='d-flex flex-column'>
          <div className='home mb-5'>
              <div className='welcome-note'>
                <h4>Welcome !!!</h4>
                <h1>SHOP-HAPPY</h1>
                <button className='mt-1 btn btn-primary'>SignUp</button>
                <div className='m-2 fs-6'><span>Already have an account??</span><a href="#" className='text-warning'> Login Here</a></div>
              </div>
          </div>

          <div className='products-illustration bg-secondary mb-5'>
            <h3 className='m-4 text-bg-primary'><center>Our Latest Collections</center></h3>
                <div className='container-fluid'>
                    <div className='d-flex flex-wrap gap-4'>{
                        NewArrivals && NewArrivals.map((NewItem)=>{
                          return(
                            <div className="card p-2 m-2" key={NewItem.id} style={{width:'18rem'}}>
                                <img src={NewItem.img_src} className="card-img-top" alt="..." width='400' height='300'/>
                                <div className="card-body">
                                  <h5 className="card-title">{NewItem.name}</h5>
                                  <p className="card-text">{NewItem.description}</p>
                                  <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        )


                        })
                      }
                    </div>
                </div>
                    
          </div>
    </div>
    </div>
    </>
  )
}

export default Home