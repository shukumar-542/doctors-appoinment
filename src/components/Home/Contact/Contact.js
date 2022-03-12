import React from 'react';
import './Contact.css'

const Contact = () => {
      return (
            <section className='container '>
                  <div className=" contact-form text-center">
                        <h4 className='text-primary pt-4'>Contact Us</h4>
                        <h3 className='text-white'>Always Contact With Us</h3>
                        <form action="" className='forms'>

                              <input type="email" class="form-control"placeholder="Email Address" />
                              <input type="email" class="form-control mt-3"placeholder="Subjects" />
                              <textarea class="form-control mt-3 " rows='6' placeholder='Your Message'></textarea>
                              <button className="btn btn-primary mt-4  apoinment-btn">Submit</button>

                        </form>
                  </div>

            </section>
      );
};

export default Contact;