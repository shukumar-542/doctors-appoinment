import React from 'react';
import doctor from '../../../images/doctor.png'
import './Appoinment.css'

const Appoinment = () => {
      return (
            <section className='make-appoinment mt-5'>
                  <div className="container">
                        <div className="row">
                              <div className="col-md-4 offset-md-1 mt-5">
                                    <img src={doctor} className='img-fluid' alt="" />
                              </div>
                              <div className="col-md-5 mt-5 pt-5 text-white">
                                    <h4 className='text-primary text-uppercase'>Appoinment</h4>
                                    <h1>Make your appoinment today</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, culpa fuga velit repellendus sint earum fugit perferendis eum repudiandae tenetur!</p>
                        <button className="btn btn-primary mt-5 apoinment-btn">Read More..</button>

                              </div>
                        </div>
                  </div>
                  
            </section>
      );
};

export default Appoinment;