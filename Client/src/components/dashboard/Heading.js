import React, { useState, useEffect } from 'react';
import DashboardHeading from './DashboardHeading';
import axios from 'axios';

const fetchUser = async () => {
    const token = localStorage.getItem("token");

    if (token) {
        const headers = {
            Authorization: `Bearer ${token}`
        };

        try {
            const response = await axios.get("https://vaults.protechhire.com:8443/api/v1/auth/me/", {
                headers: headers
            });

            return response.data;
        } catch (err) {
            console.log(err);
            return null; // Handle the error as needed
        }
    } else {
        console.log("Token not found");
        return null; // Handle the case where token is not found
    }
}

const Heading = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const userData = await fetchUser();
            console.log(userData);
            setUser(userData);
        };

        fetchData();
    }, []);

    return (
        <>
            <DashboardHeading name={user?.first_name} image={user?.primary_profile} />
        </>
    );
};

export default Heading;
