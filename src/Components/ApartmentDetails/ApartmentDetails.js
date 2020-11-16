import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Header from '../HomePage/Header/Header';
import imgbg from '../../images/Rectangle 406.png';
import img407 from '../../images/Rectangle 407.png';
import img408 from '../../images/Rectangle 408.png';
import img409 from '../../images/Rectangle 409.png';
import img410 from '../../images/Rectangle 410.png';
import { useParams } from 'react-router-dom';

const ApartmentDetails = () => {
    const {flatId} = useParams();
    const [singleData , setSingleData] = useState({})
    useEffect(() =>{
        fetch(`http://localhost:8080/${flatId}`)
        .then(res => res.json())
        .then(data => setSingleData(data))
    },[])
    return (
        <div>
            <Header></Header>
            <div>
                <section className="banner d-flex align-items-center text-center">

                    <div className="container">
                        <h1 style={{fontSize:"40px"}} className='text-white'>Apartment</h1>
                    </div>
                </section>
            </div>
            <section className="container pt-5">
             <div className="d-flex">
                 <div className="col-md-8">
                    <img src={imgbg}  style={{width:'100%'}} alt=""/>
                    <div>
                    <div className=" d-flex ">
                        <div className="col-md-3 col-sm-3 col-6 p-3">
                            <div >
                                <img style={{width:'100%'}} src={img407} alt="" />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-6 p-3">
                            <div >
                                <img style={{width:'100%'}} src={img408} alt="" />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-6 p-3">
                            <div >
                                <img style={{width:'100%'}} src={img409} alt="" />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-6 p-3">
                            <div >
                                <img style={{width:'100%'}} src={img410} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="pt-3">
                       <h2 style={{fontWeight:"bold"}}> Family Apartment Three </h2> 
                       <p>300 sq-ft, 3 Bedroom,Semi-furnished, Luxurious, South facing  <br />
                       Apartment for Rent in Rangs Malancha, Melburne.
                       </p>
                       <h2 className="pt-3" style={{fontWeight:"bold"}}>Price Details-</h2>
                       <p>Rent/Month:$500 (negotiable)</p>
                       <p>Service charge:8,000/=TK per month, subject to change</p>
                       <p>Security deposit: 3 month's rent</p>
                       <p>Flat Release Policy:3 months ealier notice required</p>
                       <h2  className="pt-3" style={{fontWeight:"bold"}}>Property Details-</h2>
                       <p>Address & Area: Range Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area</p>
                       <p>Flat Size:3000 sq feet.</p>
                       <p>Floor: A5 (5th Floor) (6 storied Building) (south facing unit)<br />
                       Room Category: 3 Large Bed Rooms with 3 Verandas, Spaciou <br />
                       Drawing, Dining & Family Living Room, Highly Decorated Kitchen<br />
                       wotj store room and servant rooom with attached Toilet<br />
                       Facilities: 1 Modern Lift, All Modern amenities & SEMI furnished<br />
                       Additional Facilities: a. Electricity with full generator load, b.<br />
                       Central Gas Geyser,c.2 car parking with 1 Driver<br />
                       Accommodation, d. communiuty conference Hall, e.Roog Top<br />
                       Beautified Garden and Grassy Ground. f. Cloth  Hanging facililty <br />
                       with cc camera. 
                       </p>
                       
                    </div>
                    </div>
                 </div>
                 <div  className="col-md-4">
                 <div style={{ backgroundColor: "lightgrey" }} className="px-3 py-3">
                    <Form style={{ backgroundColor: "lightgrey" }} className="my-5 md-5">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="name" placeholder="Full Name" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="phone" placeholder="Phone No." />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Email Address" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={5} placeholder="Massage" />
                        </Form.Group>
                        <input style={{ width: "100%" }} className='btn' type="submit" />
                    </Form>
                </div>
                 </div>
             </div>
        </section>

        </div>
        
    );
};

export default ApartmentDetails;