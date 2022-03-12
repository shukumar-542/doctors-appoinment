import React from 'react';
import teratment from '../../../images/treatment.png'

const FetauredService = () => {
      return (
            <section className='d-flex justify-content-center mt-5 pt-5 mb-5'>
            <div className='w-75 row mb-5'>
                  <div className="col-md-5 mb-5">
                        <img src={teratment} alt="" className='img-fluid' />
                  </div>
                  <div className="col-md-6 ms-1 mt-5 ">
                        <h1>Exceptional dental <br /> care ,on your tearm</h1>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolor consequuntur quisquam inventore nulla neque. Dolorem mollitia voluptatum ex quibusdam fuga laboriosam necessitatibus corporis enim aspernatur, natus, fugit adipisci commodi illum quis reprehenderit sed porro debitis omnis vel voluptate consequatur?</p>
                        <button className="btn btn-primary mt-5 apoinment-btn">Read More..</button>
                  </div>
            </div>
                  
            </section>
      );
};

export default FetauredService;