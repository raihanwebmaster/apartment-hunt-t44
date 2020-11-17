import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MyRent = () => {
    const [houseData, setHouseData] = useState({})
    useEffect(() => {
        fetch(`https://apartment-t44.herokuapp.com/allFlats`)
            .then(res => res.json())
            .then(data => setHouseData(data))
    }, [])
    return (
        <div>
            <main>
                <table className="table" style={{ marginLeft: '5vw', width: '70vw', marginTop: '5vw' }}>
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        houseData.length ? <tbody>
                            {
                                houseData.map(user => <tr className="bg-light" key={user._id}>
                                    <td>{user.serviceTitle}</td>
                                    <td>${user.price}</td>
                                    <td> <Link to={'/apartmentDetails/'+user._id}> <button className="btn" > View details</button></Link> </td>
                                </tr>)
                            }
                        </tbody>
                            :
                            <img src="https://assets.website-files.com/5c7fdbdd4e3feeee8dd96dd2/5ce46f8ffd710a2c22c15e48_cust_ami.gif" alt="" />
                    }
                </table>
            </main>
        </div >
    );
};

export default MyRent;