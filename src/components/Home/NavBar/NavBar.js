import React from 'react';

const NavBar = () => {
      return (
            <nav class="navbar navbar-expand-lg navbar-light">
                  <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
                                    <li class="nav-item">
                                          <a class="nav-link ms-4  active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                          <a class="nav-link ms-4 text-black" href="#">About</a>
                                    </li>
                                    
                                    <li class="nav-item">
                                          <a class="nav-link ms-4 text-white" href="#">Reviews</a>
                                    </li>
                                    <li class="nav-item">
                                          <a class="nav-link ms-4 text-white" href="#">Dental Services</a>
                                    </li>
                                    
                                    <li class="nav-item">
                                          <a class="nav-link ms-4 text-white" href="#">Blog</a>
                                    </li>
                                    
                                    <li class="nav-item">
                                          <a class="nav-link ms-4 text-white" href="#">ContactUs</a>
                                    </li>

                              </ul>

                        </div>
                  </div>
            </nav>
      );
};

export default NavBar;