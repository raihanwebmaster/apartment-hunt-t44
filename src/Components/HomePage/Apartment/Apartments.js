import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Apartments = () => {
    const [houseData, setHouseData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8080/allFlats`)
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
                        houseData.map(data => <div className="col mb-4">

                            <div className="card">
                                <img src='' className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"> {data.area} </h5>
                                    <p className="card-text"> {data.locaiton} </p>
                                    <div className="d-flex">
                                        <p className="card-text "> <i className="fa fa-bath"></i> {data.Bedrooms}Bedrooms </p>
                                        <p className="card-text" style={{ marginLeft: 100 }}><i className="fa fa-bath"></i> {data.bathroom}bathroom </p>
                                    </div>
                                    <div className="d-flex">
                                        <h1 style={{ color: '#275A53', fontWeight: 'bold' }}>${data.price || 12} </h1>
                                        <Link to={"/apartmentDetails/" + data._id} style={{ textDecoration: 'none', }}>
                                            <button className="btn" style={{ marginLeft: 120 }}> View details</button>
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