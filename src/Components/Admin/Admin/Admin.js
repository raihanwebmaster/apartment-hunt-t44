import React, { useContext, useState } from 'react';
import AddHouse from '../AddHouse/AddHouse';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import BookingList from '../BookingList/BookingList';
import MyRent from '../MyRent/MyRent';
import './Admin.css';
import logo from '../../../logos/Logo.png';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [addhouse, setAddhouse] = useState(true);
    const [booking, setBooking] = useState(false);
    const [myrect, setmyrect] = useState(false);
    const handleaddhouse = () => {
        setAddhouse(true);
        setBooking(false);
        setmyrect(false);
    }
    const handlebooking = () => {
        setAddhouse(false);
        setBooking(true);
        setmyrect(false);
    }
    const handlemyrect = () => {
        setAddhouse(false);
        setBooking(false);
        setmyrect(true);
    }

    return (
        <div className="container pb-5">
            <div className="row pt-5 pb-5">
                <div className="col-md-3 logo">
                    <Link to='/'>
                        <img src={logo} alt="" />
                    </Link>

                </div>
                <div className="col-md-9 d-flex justify-content-between  align-items-center">
                    <h3 >Admin Panel</h3>
                    <div>
                        {/* <img style={{height: "50px", borderRadius: "50%"}} src={loggedInUser.photoURL} alt=""/>
                    <button className="navbar-login m-3">{loggedInUser.name}</button> */}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <AdminSidebar handleaddhouse={handleaddhouse} handlebooking={handlebooking} handlemyrect={handlemyrect} ></AdminSidebar>
                    {/* <AdminSidebar handleServiceList={handleServiceList} handleAddService={handleAddService} handleAddAdmin={handleAddAdmin}></AdminSidebar> */}
                </div>
                <div className="col-md-10 " style={{ height: '100%' }}>
                    {
                        addhouse && <AddHouse></AddHouse>
                    }

                    {
                        booking && <BookingList></BookingList>
                    }
                    {
                        myrect && <MyRent></MyRent>
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;