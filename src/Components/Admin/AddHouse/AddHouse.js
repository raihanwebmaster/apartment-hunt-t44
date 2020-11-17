import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import './AddHouse.scss'
import { useForm } from 'react-hook-form';


const AddHouse = () => {
    const [file, setFile] = useState(null);
    const { register, handleSubmit, errors ,watch } = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();
        const image = JSON.stringify(data.image)
        formData.append('file', file);
        formData.append('image', image);
        formData.append('serviceTitle', data.serviceTitle);
        formData.append('bathroomNum', data.bathroomNum);
        formData.append('location', data.location);
        formData.append('price', data.price);
        formData.append('bedroomNum', data.bedroomNum);


        fetch('https://apartment-t44.herokuapp.com/addHouse', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {

                if (result) {
                    alert('Data has been send')

                }

                // console.log(result);
            })
            .catch(err => console.log(err))
        console.log(data);
        // data.preventDefault();

    }
    // console.log(watch("example"))
    const fileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const uploadIcon = <FontAwesomeIcon icon={faCloudUploadAlt} />
    return (
        <Form className="row px-4 p-4" onSubmit={handleSubmit(onSubmit)} >
            <div className="col-md-6">
                <label htmlFor="" className="form-label-title">Service Title : </label>
                <Form.Control type="text" placeholder="Enter title" ref={register} name="serviceTitle" required />
                <label htmlFor="" className="form-label-title">Location : </label>
                <Form.Control type="text" placeholder="Enter location" ref={register} name="location" required />

                <label htmlFor="" className="form-label-title">No.Of Bathroom : </label>
                <Form.Control type="text"name="bathroomNum" placeholder="Number / only accept numbers" ref={register}  required pattern="[0-9]+" />
            </div>
            <div className="col-md-6">
                <label htmlFor="" className="form-label-title">Price : </label>
                <Form.Control type="text" placeholder="Price / only accept numbers" ref={register} name="price" required pattern="[0-9]+" />
                <label htmlFor="" className="form-label-title">No.Of Bedroom : </label>
                <Form.Control type="text" placeholder="bedroomNum / only accept numbers" ref={register} name="bedroomNum" required pattern="[0-9]+" />
                <div className="">
                    <div className="">
                        <label htmlFor="" className="form-label-title">Thumbnail: </label>
                        <br />
                        <Form.File placeholder="Name" name="image" onChange={fileChange} ref={register({ required: true })} required accept="image/*" id="actual-btn" className="file-input" />
                        <label htmlFor="actual-btn" className="btn btn-outline-success responsive-mobile-width">
                            {uploadIcon} Upload <span className="responsive-file"> Image</span>
                        </label>
                        <span id="file-chosen"></span>
                    </div>
                </div>
                <br />
            </div>
            <div className="col-md-12 ">
                <Button variant="dark" type="submit" className="responsive-mobile-btn float-right">
                    Submit
                </Button>
            </div>
        </Form>
    );
};

export default AddHouse;