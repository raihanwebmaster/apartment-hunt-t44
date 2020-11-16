import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import './AddHouse.scss'
const AddHouse = () => {
    const uploadIcon = <FontAwesomeIcon icon={faCloudUploadAlt} />
    return (
        <Form className="row px-4 p-4" >
            <div className="col-md-6">
                <label htmlFor="" className="form-label-title">Service Title : </label>
                <Form.Control type="text" placeholder="Enter title" name="serviceTitle" required />
                <label htmlFor="" className="form-label-title">Location : </label>
                <Form.Control type="text" placeholder="Enter Location" name="location" required />
                <label htmlFor="" className="form-label-title">No.Of Bathroom : </label>
                <Form.Control type="number" placeholder="Number / only accept numbers" name="bathroomNum" required  pattern="[0-9]+" />
            </div>
            <div className="col-md-6">
                <label htmlFor="" className="form-label-title">Price : </label>
                <Form.Control type="number" placeholder="Price / only accept numbers" name="price" required  pattern="[0-9]+" />
                <label htmlFor="" className="form-label-title">No.Of Bedroom : </label>
                <Form.Control type="number" placeholder="Number / only accept numbers" name="bedroomNum" required  pattern="[0-9]+" />
                <div className="">
                    <div className="">
                        <label htmlFor="" className="form-label-title">Thumbnail: </label>
                        <br />
                        <Form.File placeholder="Name" name="image" required  accept="image/*" id="actual-btn" className="file-input" />
                        <label htmlFor="actual-btn" className="btn btn-outline-success responsive-mobile-width">
                            {uploadIcon} Upload <span className="responsive-file"> Image</span>
                        </label>
                        <span id="file-chosen"></span>
                    </div>
                </div>
                <br />
            </div>
            <div className="col-md-12 =">
                <Button variant="dark" type="submit" className="responsive-mobile-btn float-right">
                    Submit
                </Button>
            </div>
        </Form>
    );
};

export default AddHouse;