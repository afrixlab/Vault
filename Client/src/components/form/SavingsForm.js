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
export default function SavingsForm({ onClose, isOpen }) {
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
                                amount: '',
                                duration: '',
                                days: '',
                            }}
                            onSubmit={async (values) => {
                                // Make a post request with axios to https://vaults.protechhire.com:8443/#tag/wallet/operation/wallet_new_wallet
                                await axios
                                    .post(
                                        'https://vaults.protechhire.com:8443/api/v1/wallet/new',
                                        values
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
                                        toast({
                                            position: 'top',
                                            title: 'Something went wrong.',
                                            description: "ji",
                                            status: 'error',
                                            duration: 3000,
                                            isClosable: true,
                                        });
                                    })
                                    .finally(() => {
                                        values.amount = '';
                                        values.duration = '';
                                        values.days = '';
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
                                                name='amount'
                                                id='amount'
                                                type='number'
                                                variant='filled'
                                                placeholder='Amount to Lock'
                                                validate={(value) => {
                                                    let error;
                                                    if (!value) {
                                                        error = 'Enter an Amount';
                                                    }
                                                    return error;
                                                }}
                                            />
                                            <FormLabel
                                                className='text-sm text-white/70'
                                                htmlFor='amount'
                                            >
                                                Wallet Balance: (&euro;)****{' '}
                                            </FormLabel>
                                            <FormErrorMessage>{errors.amount}</FormErrorMessage>
                                        </FormControl>
                                        <div className='flex flex-col items-center w-full gap-4 sm:flex-row'>
                                            <FormControl
                                                isInvalid={!!errors.duration && touched.duration}
                                            >
                                                <Field
                                                    className='bg-[#293534] shadow-form w-full'
                                                    as={Input}
                                                    name='duration'
                                                    id='duration'
                                                    type='number'
                                                    variant='filled'
                                                    placeholder='Lock Duration'
                                                    validate={(value) => {
                                                        let error;
                                                        if (!value) {
                                                            error = 'Enter Duration';
                                                        }
                                                        return error;
                                                    }}
                                                />
                                                <FormErrorMessage>{errors.duration}</FormErrorMessage>
                                            </FormControl>

                                            {/* Selection*/}
                                            <FormControl isInvalid={!!errors.days && touched.days}>
                                                <Field
                                                    as='select'
                                                    name='days'
                                                    id='days'
                                                    className='bg-[#293534] shadow-form w-full p-2 text-white/70'
                                                    validate={(value) => {
                                                        let error;
                                                        if (!value) {
                                                            error = 'Enter an Duration';
                                                        }
                                                        return error;
                                                    }}
                                                >
                                                    <option selected disabled value=''>Select Duration</option>
                                                    {['Days', 'Weeks', 'Months', 'Years'].map(
                                                        (option) => (
                                                            <option key={option} value={option}>
                                                                {option}
                                                            </option>
                                                        )
                                                    )}
                                                </Field>
                                                <FormErrorMessage>{errors.days}</FormErrorMessage>
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
