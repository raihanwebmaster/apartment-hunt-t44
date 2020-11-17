import React from 'react';
import Apartments from './Apartment/Apartments';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './HomePage.scss'
import Service from './Service/Service';

const HomePage = () => {
    return (
        <div>
            <Header />
            <div>
                <section className="banner d-flex align-items-center text-center">

                    <div className="container">
                        <h1 className='text-white'>FIND YOUR HOUSE RENT</h1>
                        <div className="search-box col-md-6 my-5 mx-auto">
                            <input id="query" type="text" className="form-control" placeholder="Search Food Item" />
                            <button className="btn text-white search-btn btn-rounded">Find Now</button>
                        </div>
                    </div>
                </section>
            </div>
            <Apartments></Apartments>
            <Service />
            <Footer></Footer>
        </div>
    );
};

export default HomePage;