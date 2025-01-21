import React from 'react';
import './Shop.css';
import Records from '../../records.json';

const shop = () => {
  return (
    <div className='container-fluid'>
        <span className='fs-8 notice-msg m-4'>Amazing products are on sale... Shop happliy on our Shop-Happy.</span>
        <section className='d-flex flex-wrap'>
            {
                Records && Records.map(record => {
                    return(
                        <div key={record.id} className="card p-2 m-2" style={{width:'249px'}} >
                            <a href={record.img_src} target='_blank'>
                            <img src={record.img_src} className='card-img-top' height='250'/>
                            </a>
                            
                            <div className="card-header">
                             <div className='fs-8'> <b>{record.name} </b> </div>
                            </div>
                            
                            <div className="card-body fs-10">
                              {record.description} 
                            </div>
                        </div>
                    )
                })
            }
        </section>
    </div>
  )
}

export default shop

