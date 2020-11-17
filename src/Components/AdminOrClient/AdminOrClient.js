import React, { useContext, useState, useEffect } from 'react';
import Admin from '../Admin/Admin/Admin';
import { UserContext } from '../../App';
import HomePage from '../HomePage/HomePage';

const AdminOrClient = () => {
    const [admin, setAdmin] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://apartment-t44.herokuapp.com/allAdmin?email=${loggedInUser.email}`)
            .then(response => response.json())
            .then(data => {
                setAdmin(data)
            }
            )
    }, [])
    return (
        <div>
            {
                admin.length ? <Admin></Admin> : <HomePage></HomePage>
            }
        </div>
    );
};

export default AdminOrClient;