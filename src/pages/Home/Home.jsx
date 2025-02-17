import React from 'react';
import CarouselComponent from '../../components/Carousel/Carousel';
import Magazine from '../../components/Magazine/Magazine';
import NewArrivals from '../Home/MobileCollections.json';
import '../Home/Home.css';

const Home = () => {

  return (
    <>    
    <div className='container-fluid'  style={{backgroundColor:'rgb(242, 243, 244 )'}}>
      <div className='d-flex flex-column'>

        <div className='mb-2'>          
          <CarouselComponent />
        </div> 

          <hr  style={{color:'rgb(167, 167, 167)'}}/>

          <div className='products-illustration mb-3'>
            <h3 className='ms-5 mt-4 mb-4' style={{color:'navy'}}>Welcome summer with 30% off - on mobiles with Modern Technology</h3>
                <div className='container-fluid'>
                    <div className='d-flex flex-wrap justify-content-evenly gap-3'>{
                        NewArrivals && NewArrivals.map((NewItem)=>{
                          return(
                            <div className="custom-card p-2 m-2" key={NewItem.id} style={{width:'16rem',height:'28.5rem'}}>
                                <img src={NewItem.img_src} className={`card-img-top custom-img custom-img-${NewItem.id}`} alt="..." width='250' height='280'/>
                                <div className="card-body">
                                  <h5 className="card-title mt-4 ps-2" style={{fontWeight:'bold',fontFamily:'"Atkinson Hyperlegible Mono", serif', fontSize:'1rem', color:'navy'}}>{NewItem.name}</h5>
                                  <p className="card-text mt-2 ps-2" style={{color:'rgb(33, 30, 83)', fontFamily:' "Atkinson Hyperlegible Mono", serif', fontSize:'16px'}}>{NewItem.cost.toLocaleString('en-in', {style:'currency', currency:'USD'})}</p>
                                    <div className=' m-2 cart-btn'> Add to cart </div>
                                </div>
                            </div>
                        )}
                      )}
                    </div>
                </div>
          </div>
        
          <Magazine />           
     
      </div>
    </div>
    </>
  )
}

export default Home;