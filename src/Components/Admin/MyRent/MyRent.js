import React from 'react';

const MyRent = () => {
    return (
        <div className="mt-4" style={{backgroundColor: "white"}}>
            <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">Home name</th>
                    <th className="text-secondary" scope="col">Price</th>
                    <th className="text-secondary" scope="col">Action</th>
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
                        <td>washington</td>
                        <td>$600</td>
                        <td><button>View Details</button></td>
                    </tr>
            </tbody>
        </table>
        </div>
    );
};

export default MyRent;