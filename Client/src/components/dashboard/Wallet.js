'use client';
import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { BiMoneyWithdraw } from 'react-icons/bi';
import {
    IoSettingsOutline,
    IoAddCircleOutline,
    IoWalletOutline,
} from 'react-icons/io5';
import { GoShieldCheck } from 'react-icons/go';
import WalletForm from "../form/WalletForm";
import { useDisclosure } from '@chakra-ui/react';
import axios from 'axios';



const DashboardWalletCard = () => {
    const token = localStorage.getItem("token");
    const fetchUser = async () => {

        if (token) {
            const headers = {
                Authorization: `Bearer ${token}`
            };

            try {
                const response = await axios.get("https://vaults.protechhire.com:8443/api/v1/wallet/", {
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

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [wallets, setWallet] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (window.localStorage) {
                const userData = await fetchUser();
                console.log("User", userData);
                setWallet(userData);
            }
        };

        fetchData();
    });

    return (
        <>
            <WalletForm isOpen={isOpen} onClose={onClose} />
            <Flex className='flex-col gap-8 pt-6 '>
                <h3
                    onClick={onOpen}
                    className='font-[600] cursor-pointer lg:text-3xl flex items-center gap-2 self-end'>
                    <IoAddCircleOutline /> New Wallet
                </h3>
                {
                    wallets?.map(
                        wallet => (
                            <Box key={wallet.id} className='bg-card rounded-[1.25rem] p-8 shadow-secondary'>
                                <Flex className='flex-col gap-8'>
                                    <Flex className='flex-col items-center justify-between sm:flex-row'>
                                        <h3 className='font-[600] lg:text-3xl text-white/70'>
                                            {wallet.wallet_name}
                                        </h3>
                                        <Text className='flex items-center gap-1 cursor-pointer'>
                                            {wallet.address}
                                        </Text>
                                    </Flex>
                                    <p className=' text-white lg:text-2xl font-[700] pb-8 flex flex-col gap-2'>
                                        <span className='text-white/70'>Available Balance</span>
                                        <span className='text-white/90'> {wallet.wallet_balance} SOL</span>
                                    </p>
                                    <Flex className='flex flex-col items-center justify-between w-full gap-2 sm:flex-row'>
                                        <div className='flex w-full items-center text-[#05784E] rounded-md cursor-pointer  gap-2 bg-white px-6 flex-1 py-2 justify-center'>
                                            <BiMoneyWithdraw /> Withdraw
                                        </div>
                                        <div className='flex w-full items-center text-[#05784E] gap-2 rounded-md justify-center bg-white px-6 py-2 flex-1 cursor-pointer'>
                                            <IoSettingsOutline /> Settings
                                        </div>
                                    </Flex>

                                </Flex>
                            </Box>
                        )
                    )
                }

                {/* barcode */}
                <Box className='bg-card rounded-[1.25rem] p-8 shadow-secondary grid place-items-center text-center'>
                    <Flex className='flex-col gap-4'>
                        <Text className='font-[600] lg:text-3xl text-white/70 '>
                            Vault Wallet
                        </Text>
                        <div className='relative w-40 h-40 mx-auto'>
                            <picture>
                                <img
                                    className='object-cover w-full h-full'
                                    src='/qr_code.jpg'
                                    alt='Barcode'
                                />
                            </picture>
                        </div>
                        <p className='text-white/70'>
                            Scan this QR code to add funds to your Vault Wallet
                        </p>
                    </Flex>
                </Box>
            </Flex>
        </>
    );
};

export default DashboardWalletCard;
