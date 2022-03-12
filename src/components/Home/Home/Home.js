import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import FetauredService from '../FeaturedService/FetauredService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services'

const Home = () => {
      return (
            <div>
                  <Header/>
                  <Services/>
                  <FetauredService/>
                  <Appoinment/>
                  <Doctor/>
                  <Contact/>
                  <Footer/>
                  
            </div>
      );
};

export default Home;