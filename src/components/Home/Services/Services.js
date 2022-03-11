import React from 'react';
import cavity  from '../../../images/cavity.png'
import whiting  from '../../../images/whitening.png'
import  fluride from '../../../images/fluoride.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';



const Services = () => {
      const serviceData = [
            {
                  name: 'Fluride Treatment',
                  img: fluride,

            },
            {
                  name: 'Cavity Feeling',
                  img: cavity,

            },
            {
                  name: 'Treath Whiting ',
                  img: whiting,

            }
      ]
      return (
            <section>

                  <div className='text-center'>
                        <h4 style={{ color: '#11CFDF' }}>Our Services</h4>
                        <h3>Service We provide</h3>
                  </div>
                  <div className='d-flex justify-content-center'>
                  <div className='w-75 row mt-5'>

                        {
                              serviceData.map(service => <ServiceDetails service= {service}></ServiceDetails>)
                        }
                  </div>

            </div>
            </section>
      );
};

export default Services;