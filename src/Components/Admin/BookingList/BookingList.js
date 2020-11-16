import React from 'react';

const BookingList = () => {
    return (
        <div className="mt-4" style={{backgroundColor: "white"}}>
            <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email ID</th>
                    <th className="text-secondary" scope="col">Phone No</th>
                    <th className="text-secondary" scope="col">Massage</th>
                    <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {/* {
                  customer.map((user) => 
                        
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.service}</td>
                        <td>{user.description}</td>
                        <td>padding</td>
                    </tr>
                    )
                } */}
                <tr>
                        <td>name</td>
                        <td>email</td>
                        <td>service</td>
                        <td>description</td>
                        <td>padding</td>
                    </tr>
            </tbody>
        </table>
        </div>
    );
};

export default BookingList;<h1>booking</h1>