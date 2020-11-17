import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlus,  faHouse, faHouseUser, faHandHolding, faHouseDamage, faWarehouse} from '@fortawesome/free-solid-svg-icons';
const AdminSidebar = (props) => {
    const buttonStyle = {
        backgroundColor: "white",
         color: "black", 
         border: "none", 
         height: "50px",
         width: "170px",
         textAlign: "left"
    }
    return (
        <div className=" py-5 px-4" >
            <Button style={buttonStyle} onClick={props. handlebooking} className="mt-3" ><FontAwesomeIcon icon={faHouseUser}/>  Booking list</Button>
            <Button style={buttonStyle} onClick={props.handleaddhouse} className="mt-3" ><FontAwesomeIcon icon={faPlus}/> Add Rent House</Button>
            <Button style={buttonStyle} onClick={props. handlemyrect} className="mt-3" ><FontAwesomeIcon icon={faWarehouse}/> My Rent</Button>    
        </div>
    );
};

export default AdminSidebar;