import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Apartments = () => {
    const [houseData, setHouseData] = useState([])
    useEffect(() => {
        fetch(`https://apartment-t44.herokuapp.com/allFlats`)
            .then(res => res.json())
            .then(data => setHouseData(data))
    }, [])
    return (
        <>
            <div className="d-flex justify-content-center pt-3">
                <div>
                    <h5 className="text-center" style={{ color: '#275A53' }}>House Rent</h5>
                    <p className='discovery text-center'> Discover the latest Rent<br></br>
                available today</p>
                </div>
            </div>
            <div className='container' style={{ marginTop: 150 }}>
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        houseData.map(data => <div key={data._id} className="col mb-4">
                            <div className="card" style={{ width: '90%' }}>
                                <img src={`data:image/png;base64,${data.image.img}`} style={{ width: '100%' }} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"> {data.serviceTitle} </h5>
                                    <p className="card-text"> {data.location} </p>
                                    <div className="d-flex">
                                        <p className="card-text "> <i className="fa fa-bath"></i> {data.bedroomNum}Bedrooms </p>
                                        <p className="card-text" style={{ marginLeft: 100 }}><i className="fa fa-bath"></i> {data.bathroomNum}bathroom </p>
                                    </div>
                                    <div className="d-flex">
                                        <h1 style={{ color: '#275A53', fontWeight: 'bold' }}>${data.price} </h1>
                                        <Link to={"/apartmentDetails/" + data._id} style={{ textDecoration: 'none', }}>
                                            <button className="btn" style={{ marginLeft: '50%' }}> View details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default Apartments;