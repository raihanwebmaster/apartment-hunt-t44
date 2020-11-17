import React from 'react';
import img1 from '../../../logos/apartment 1.png'
import img3 from '../../../logos/affordable 1.png'
import img2 from '../../../logos/lessee 1.png'


const Service = () => {
    return (
        <div className='container' >
            <div className="d-flex justify-content-center pt-5">
                <div>
                    <h5 className="text-center" style={{ color: '#275A53' }}>Service</h5>
                    <p className='discovery text-center'>We're an agency tailored to all
                    <br></br>
                    clients' needs that always deliverst</p>
                </div>
            </div>
            <div className="card-deck  text-center" >
                <div className="card" style={{ border: 'none', background: "none" }}>
                    <div className='pt-2'>
                        <img src={img1} className="card-img-top w-25 service-img" alt="kaj kore na" />
                    </div>

                    <div className="card-body">
                        <h5 className="card-title  service-text ">Wide Range of Properties</h5>
                        <p className="card-text">With a robust selection of popular properties on hand, as well as leading properties from experts..</p>
                    </div>
                </div>
                <div className="card" style={{ border: 'none', background: "none" }}>
                    <div className='pt-2'>
                        <img src={img3} className="card-img-top w-25 service-img" alt="..." />
                    </div>

                    <div className="card-body ">
                        <h5 className="card-title  service-text">Financing Made Easy</h5>
                        <p className="card-text">Our stress-free finance department that can find financial solutions to save you money.</p>
                    </div>
                </div>
                <div className="card " style={{ border: 'none', background: "none" }} >
                    <div className='pt-2'>
                        <img src={img2} className="card-img-top service-img w-25" alt="..." />
                    </div>

                    <div className="card-body ">
                        <h5 className="card-title service-text ">Trusted by Thousands</h5>
                        <p className="card-text">10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;