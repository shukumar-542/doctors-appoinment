import React from 'react';
import chair from '../../../images/chair.png'
import './HeaderMain.css'

const HeaderMain = () => {
      return (
            <main style={{height:'600px'}} className='row  d-flex align-items-center'>
             <div className="col-md-4 offset-md-1" style={{color:'#203047'}}>
             <h1>Your New Smile <br /> Starts Here</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat cumque laudantium veniam.</p>
             <button className="btn btn-primary apoinment-btn">GET APPOINMENT</button>
             </div>
             <div className="col-md-6  d-flex align-items-center">
                   <img src={chair} alt="" className="img-fluid" />
             </div>

                  
            </main>
      );
};

export default HeaderMain;