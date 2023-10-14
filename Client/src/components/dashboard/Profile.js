'use client';
import { Avatar } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import axios from "axios"

const DashboardProfileCard = () => {
    const [user, setUser] = useState(null);
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
                //console.log(err);
                return null; // Handle the error as needed
            }
        } else {
            //console.log("Token not found");
            return null; // Handle the case where token is not found
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            const userData = await fetchUser();
            console.log("User", userData);
            setUser(userData);
        };

        fetchData();
    }, []);
    //console.log("Hey", user)
    return (
        <>
            <h3 className='text-2xl lg:text-4xl font-[700] -mt-12 pl-4 xl:-ml-[15rem] ml-4'>Profile</h3>
            {user ? ( // Check if user data is available
                <div className='flex flex-col items-center justify-center w-full gap-4 pt-12 lg:pt-24'>
                    <Avatar
                        className='bg-[#158E7F] mx-auto'
                        size={{
                            base: 'sm',
                            md: 'md',
                            lg: 'lg',
                            xl: 'xl',
                            '2xl': '2xl',
                        }}
                        name={`${user?.first_name}`}
                        src='#'
                    />
                    <h3 className='text-2xl lg:text-4xl font-[700] -mt-12 text-center pt-12'>
                        {user?.first_name}
                    </h3>
                </div>
            ) : (
                <div></div>
            )}
        </>
    );

};

export default DashboardProfileCard;
