import React, { useEffect, useState } from 'react';

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
                <div class="row row-cols-1 row-cols-md-3">
                    {
                        houseData.map(data => <div class="col mb-4">
                            <div class="card">
                                <img src='' class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"> {data.area} </h5>
                                    <p class="card-text"> {data.locaiton} </p>
                                    <div className="d-flex">
                                        <p class="card-text "> <i class="fa fa-bath"></i> {data.Bedrooms}Bedrooms </p>
                                        <p class="card-text" style={{ marginLeft: 100 }}><i class="fa fa-bath"></i> {data.bathroom}bathroom </p>
                                    </div>
                                    <div className="d-flex">
                                        <h1 style={{ color: '#275A53', fontWeight: 'bold' }}>$12 </h1>
                                        <button className="btn" style={{ marginLeft: 120 }}> View details</button>
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