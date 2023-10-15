'use client';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    Box,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    VStack,
    useToast,
} from '@chakra-ui/react';
import axios from 'axios';

import { Field, Form, Formik } from 'formik';
import Button from '../ui/Button';
export default function WalletForm({ onClose, isOpen }) {
    const toast = useToast();

    return (
        <>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <Box
                        bg='black'
                        color='white'
                        p={10}
                        className='shadow-primary'
                        borderRadius='md'
                    >
                        <Formik
                            initialValues={{
                                wallet_name: '',
                                hint: '',
                            }}
                            onSubmit={async (values) => {
                                //console.log(values)
                                const token = localStorage.getItem("token");
                                const headers = {
                                    Authorization: `Bearer ${token}`
                                };
                                await axios
                                    .post(
                                        'https://vaults.protechhire.com:8443/api/v1/wallet/new_wallet/',
                                        values, {
                                        headers: headers
                                    }
                                    )
                                    .then((res) => {
                                        if (res.status === 200) {
                                            toast({
                                                position: 'top',
                                                title: 'Wallet created.',
                                                description: "We've created your wallet for you.",
                                                status: 'success',
                                                duration: 3000,
                                                isClosable: true,
                                            });
                                            onClose();
                                        }
                                    })
                                    .catch((error) => {
                                        //console.log(error.response.data.message)
                                        toast({
                                            position: 'top',
                                            title: error.response.data.error,
                                            description: error.response.data.message,
                                            status: 'error',
                                            duration: 3000,
                                            isClosable: true,
                                        });
                                    })
                                    .finally(() => {
                                        values.wallet_name = '';
                                        values.hint = '';
                                        onClose();
                                    });
                            }}
                        >
                            {({ handleSubmit, errors, touched, isSubmitting }) => (
                                <Form onSubmit={handleSubmit}>
                                    <VStack spacing={6}>
                                        <FormControl isInvalid={!!errors.amount && touched.amount}>
                                            <Field
                                                className='bg-[#293534] shadow-form'
                                                as={Input}
                                                name='wallet_name'
                                                id='wallet_name'
                                                type='text'
                                                variant='filled'
                                                placeholder='Enter a wallet name'
                                                validate={(value) => {
                                                    let error;
                                                    if (!value) {
                                                        error = 'Enter a wallet name';
                                                    }
                                                    return error;
                                                }}
                                            />
                                            <FormErrorMessage>{errors.wallet_name}</FormErrorMessage>
                                        </FormControl>
                                        <div className='flex flex-col items-center w-full gap-4 sm:flex-row'>
                                            <FormControl
                                                isInvalid={!!errors.duration && touched.duration}
                                            >
                                                <Field
                                                    className='bg-[#293534] shadow-form w-full'
                                                    as={Input}
                                                    name='hint'
                                                    id='hint'
                                                    type='text'
                                                    variant='filled'
                                                    placeholder='Wallet Password'
                                                    validate={(value) => {
                                                        let error;
                                                        if (!value) {
                                                            error = 'Enter hint';
                                                        }
                                                        return error;
                                                    }}
                                                />
                                                <FormErrorMessage>{errors.hint}</FormErrorMessage>
                                            </FormControl>
                                        </div>
                                        <Button
                                            className='w-full'
                                            title={`${isSubmitting ? 'Creating Wallet...' : 'Create Wallet'
                                                }`}
                                            type='submit'
                                        />
                                    </VStack>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </ModalContent>
            </Modal>
        </>
    );
}
