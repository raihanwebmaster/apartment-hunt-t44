import React from 'react';

const MyRent = () => {
    return (
        <div>
            <main>
                <table className="table" style={{ marginLeft: '5vw', width: '70vw', marginTop: '5vw' }}>
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">Project Details</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    {/* {
                        details.length ? <tbody>
                            {
                                details.map(user => <tr className="bg-light" key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.service}</td>
                                    <td>{user.description}</td>
                                </tr>)
                            }
                        </tbody>
                            :
                            '' // <img src="https://assets.website-files.com/5c7fdbdd4e3feeee8dd96dd2/5ce46f8ffd710a2c22c15e48_cust_ami.gif" alt="" />
                    } */}
                </table>
            </main>
        </div >
    );
};

export default MyRent;