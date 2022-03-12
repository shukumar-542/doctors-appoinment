import React from 'react';
import './Footer.css'

const Footer = () => {
      return (
            <footer className='container mt-5 footer'>
            <div className='row'>
                  
             <div className="col-md-3 mt-5 text-secondary">
                   <ul>
                   <li>emergency Dental Care</li>
                   <li>CheckUp</li>
                    <li>treatment for professional disies</li>
                   <li>Teath wash</li>
                   <li>Checkup</li>

                   </ul>
             </div>
             <div className="col-md-3 text-secondary">
                  <h3 className='text-primary'>Services</h3>
                  <li>emergency Dental Care</li>
                   <li>CheckUp</li>
                    <li>treatment for professional disies</li>
                   <li>Teath wash</li>
                   <li>Checkup</li>
             </div>
             <div className="col-md-3 text-secondary">
             <h3 className='text-primary'>Oral Health</h3>
             <li>emergency Dental Care</li>
                   <li>CheckUp</li>
                    <li>treatment for professional disies</li>
                   <li>Teath wash</li>
                   <li>Checkup</li>
             </div>
             <div className="col-md-3 text-secondary">
                   <h3 className='text-primary'>Our Address</h3>
                   <ul>
                   <li>New Yourk</li>
                   <li>Handsone-100</li>
                   </ul>

             </div>
             <div className='text-center mt-5'>
                   <p>CopyRight {(new Date()).getFullYear()} All Right Reserved</p>
             </div>
            </div>
                  
            </footer>
      );
};

export default Footer;