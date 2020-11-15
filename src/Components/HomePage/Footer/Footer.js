import React from 'react';
import location from '../../../logos/map-marker-alt-solid 1.png'
import icon1 from '../../../logos/Vector-1.png'
import icon2 from '../../../logos/Vector-2.png'
import icon3 from '../../../logos/Vector-3.png'
import icon4 from '../../../logos/Vector.png'


const Footer = () => {
    return (
        <footer class="page-footer font-small mt-5 pt-4 text-white last-bg">

            <div class="container text-center text-md-left">

                < div class="row">

                    <div class="col-md-3 mx-auto d-flex pt-3 ">
                        {/* <div className='row d-flex '> */}
                        <div >
                            <img src={location} className="location mr-3" alt="" />
                        </div>
                        <div>
                            <p>  H#340 (4th Floor), Road #24,
                            New DOHS, Mohakhali, Dhaka, Bangladesh
                            Phone: 018XXXXXXXX
                            E-mail: info@company.com
                        </p>
                        </div>
                        {/* </div> */}



                    </div>

                    <div class="col-md-2 mx-auto">

                        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Company</h5>

                        <ul class="list-unstyled">
                            <li>
                                <a href="#!" style={{ color: 'white' }}>About</a>
                            </li>
                            <li>
                                <a href="#!" style={{ color: 'white' }} >Site Map</a>
                            </li>
                            <li>
                                <a href="#!" style={{ color: 'white' }} >Support center</a>
                            </li>
                            <li>
                                <a href="#!" style={{ color: 'white' }}>Terms Conditions</a>
                            </li>
                            <li>
                                <a href="#!" style={{ color: 'white' }}>Submit Listing</a>
                            </li>
                        </ul>

                    </div>


                    <div class="col-md-2 mx-auto">

                        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Quick Links</h5>

                        <ul class="list-unstyled">
                            <li>
                                <a href="#!" style={{ color: 'white' }}>Quick Links</a>
                            </li>
                            <li>
                                <a href="#!" style={{ color: 'white' }}>Rentals</a>
                            </li>
                            <li>
                                <a href="#!" style={{ color: 'white' }}>Sales</a>
                            </li>
                            <li>
                                <a href="#!" style={{ color: 'white' }}>Contact </a>
                            </li>
                            <li>
                                <a href="#!" style={{ color: 'white' }}>Terms Conditions </a>
                            </li>
                            <li>
                                <a href="#!" style={{ color: 'white' }}>Our blog </a>
                            </li>
                        </ul>

                    </div>


                    <div class="col-md-3 mx-auto">

                        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">About Us</h5>

                        <ul class="list-unstyled">
                            <li>
                                <p style={{ color: 'white' }}>We are the top real estate
                                agency in Sydney, with agents
                                available to answer any
                                question 24/7.</p>
                                <div className='d-flex'>
                                    <img src={icon1} style={{ height: '30px' }} class="m-1 " alt="" />
                                    <img src={icon2} style={{ height: '30px' }} class="m-1 " alt="" />
                                    <img src={icon3} style={{ height: '30px' }} class="m-1 " alt="" />
                                    <img src={icon4} style={{ height: '30px' }} class="m-1 " alt="" />
                                </div>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

            <ul class="list-unstyled list-inline text-center">
                <li class="list-inline-item">
                    <a class="btn-floating btn-fb mx-1">
                    </a>
                </li>
                <li class="list-inline-item">
                    <a class="btn-floating btn-tw mx-1">
                    </a>
                </li>
                <li class="list-inline-item">
                    <a class="btn-floating btn-gplus mx-1">
                    </a>
                </li>
                <li class="list-inline-item">
                    <a class="btn-floating btn-li mx-1">
                    </a>
                </li>
                <li class="list-inline-item">
                    <a class="btn-floating btn-dribbble mx-1">
                    </a>
                </li>
            </ul>


            <div class="footer-copyright text-center py-3">
            </div>
        </footer>
    );
};

export default Footer;