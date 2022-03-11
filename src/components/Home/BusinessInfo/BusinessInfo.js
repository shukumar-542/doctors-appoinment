import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'


const BusinessInfo = () => {
      const infoData = [
            {
                  title: 'opening hour',
                  description: 'Lorem ipsum dolor sit amet.',
                  icon: faClock,
                  background: 'primary'

            },
            {
                  title: 'Visit Our Location',
                  description: 'Borklyn , NY, 1230 United Kingdom',
                  icon: faMapMarker,
                  background: 'dark'

            },
            {
                  title: 'Contact Us Now',
                  description: '+013956457',
                  icon: faPhone,
                  background: 'primary'

            }

      ]

      return (
            <section className='d-flex justify-content-center'>
                  <div className='w-75 row'>

                        {
                              infoData.map(data => <InfoCard data={data} ></InfoCard>)
                        }
                  </div>

            </section>
      );
};

export default BusinessInfo;