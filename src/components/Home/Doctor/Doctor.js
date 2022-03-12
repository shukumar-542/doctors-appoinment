import React from 'react';
import doctor from '../../../images/doctor-small.png'


const Doctor = () => {
      return (
            <section>
            <div className="container mt-5 pt-5">
            <h1 className='text-center mt-5 text-primary'>Our Doctor</h1>
                  <div className="row text-center mt-5">
                  <div className="col-md-4">
                        <img src={doctor} alt="" className="img-fluid" />
                        <h3>Dr .Caudi</h3>
                  <h5> +03152456852</h5>
                  </div>
                  <div className="col-md-4">
                        <img src={doctor} alt="" className="img-fluid" />
                        <h3>Dr .Caudi</h3>
                  <h5> +03152456852</h5>
                  </div>
                  <div className="col-md-4">
                  <img src={doctor} alt="" className="img-fluid" />
                  <h3>Dr .Caudi</h3>
                  <h5> +03152456852</h5>

                  </div>
                  </div>
            </div>
                  
            </section>
      );
};

export default Doctor;