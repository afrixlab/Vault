'use client';
import React from 'react';

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

import { BiChevronLeft } from 'react-icons/bi';

import {
  Box,
  Center,
  InputGroup,
  InputRightElement,
  FormControl,
  FormErrorMessage,
  Grid,
  Heading,
  Input,
  Text,
  VStack,
  ButtonGroup,
  Flex,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import SocialBtn from '@/components/SocialBtn';
import Logo from '@/components/header/Logo';

const AllForm = () => {
  const router = useRouter();
  const [formState, setFormState] = React.useState(false);
  const [forgetPassword, setForgetPassword] = React.useState(false);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    router.push(
      `?action=${
        formState
          ? 'create-account'
          : forgetPassword
          ? 'forget-password'
          : 'login'
      }`,
      { scroll: false }
    );

    window.location.search

  }, [router, formState, forgetPassword]);

  const handleTogglePassword = () => setShow(!show);

  const handleFormState = () => {
    setFormState((formState) => !formState);
    setForgetPassword(false);
  };

  const handleDefault = () => {
    setForgetPassword(false);
  };

  return (
    <Box as='section' className='min-h-screen py-6 bg-login'>
      <Grid placeItems='center'>
        <Center className='py-4 pb-20'>
          <Logo image={'/logo-header.svg'} />
        </Center>
        <Box
          pos='relative'
          overflow='hidden'
          bg='black'
          color='white'
          w={{
            base: '90%',
            md: '70%',
            lg: '40%',
          }}
          p={6}
          borderRadius='xl'
        >
          {forgetPassword && (
            <button
              onClick={handleDefault}
              className='absolute top-4 left-4 text-[#1EC6B1] flex item-center bg-[#1EC6B1]/50 px-2 rounded'
            >
              <BiChevronLeft className='mt-1 text-lg' />
              <span> Back</span>
            </button>
          )}
          <Formik
            initialValues={{
              email: '',
              password: '',
              firstname: '',
              lastname: '',
            }}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            {({ handleSubmit, errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  <Center className='flex flex-col gap-2 pb-8 text-center'>
                    {forgetPassword ? (
                      <>
                        <Flex className='flex-col gap-1 pt-8'>
                          <Heading>Forget password?</Heading>
                          <Text className='text-sm text-white/70'>
                            Enter the email address you created your account
                            with.
                          </Text>
                        </Flex>
                      </>
                    ) : (
                      <>
                        <Heading>
                          {formState ? 'Create your account' : 'Log in'}{' '}
                        </Heading>
                        <Text className='text-white/70'>
                          {formState
                            ? 'Already have an account?'
                            : 'New to vault?'}{' '}
                          <span
                            onClick={handleFormState}
                            className=' text-[#51EC81] cursor-pointer'
                          >
                            {formState ? 'Log in' : 'Create an account'}
                          </span>
                        </Text>
                      </>
                    )}
                  </Center>

                  {/* Forget Password */}
                  {forgetPassword && (
                    <FormControl isInvalid={!!errors.email && touched.email}>
                      <Field
                        className='bg-[#293534] shadow-form'
                        as={Input}
                        name='email'
                        id='email'
                        type='email'
                        variant='filled'
                        placeholder=' Email'
                        validate={(value) => {
                          let error;
                          if (!value) {
                            error = 'Email is required';
                          }
                          return error;
                        }}
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>
                  )}

                  {/* FirstName and LastName */}
                  {formState && (
                    <Flex
                      gap={4}
                      w='full'
                      flexDir={{ base: 'column', md: 'row' }}
                    >
                      <FormControl
                        className='flex-1'
                        isInvalid={!!errors.firstname && touched.firstname}
                      >
                        <Field
                          className='bg-[#293534] shadow-form'
                          as={Input}
                          name='firstname'
                          id='firstname'
                          type='text'
                          variant='filled'
                          placeholder='First Name'
                          validate={(value) => {
                            let error;
                            if (!value) {
                              error = 'First Name is required';
                            }
                            return error;
                          }}
                        />
                        <FormErrorMessage>{errors.firstname}</FormErrorMessage>
                      </FormControl>
                      <FormControl
                        className='flex-1'
                        isInvalid={!!errors.lastname && touched.lastname}
                      >
                        <Field
                          className='bg-[#293534] shadow-form'
                          as={Input}
                          name='lastname'
                          id='lastname'
                          type='text'
                          variant='filled'
                          placeholder='Last Name'
                          validate={(value) => {
                            let error;
                            if (!value) {
                              error = 'Last Name is required';
                            }
                            return error;
                          }}
                        />
                        <FormErrorMessage>{errors.lastname}</FormErrorMessage>
                      </FormControl>
                    </Flex>
                  )}
                  {/* Log in */}
                  {!forgetPassword && (
                    <>
                      <FormControl isInvalid={!!errors.email && touched.email}>
                        <Field
                          className='bg-[#293534] shadow-form'
                          as={Input}
                          name='email'
                          id='email'
                          type='email'
                          variant='filled'
                          placeholder=' Email'
                          validate={(value) => {
                            let error;
                            if (!value) {
                              error = 'Email is required';
                            }
                            return error;
                          }}
                        />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={!!errors.password && touched.password}
                      >
                        <InputGroup size='md'>
                          <Field
                            className='bg-[#293534] shadow-form'
                            pr='4.5rem'
                            as={Input}
                            name='password'
                            id='password'
                            type={show ? 'text' : 'password'}
                            variant='filled'
                            placeholder='Password'
                            validate={(value) => {
                              let error;
                              if (!value) {
                                error = 'Password is required';
                              } else if (value.length < 8) {
                                error =
                                  'Password must be at least 8 characters long';
                              }
                              return error;
                            }}
                          />
                          <InputRightElement width='4.5rem' cursor='pointer'>
                            <div
                              h='1.75rem'
                              size='sm'
                              onClick={handleTogglePassword}
                            >
                              {show ? (
                                <AiOutlineEye />
                              ) : (
                                <AiOutlineEyeInvisible />
                              )}
                            </div>
                          </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                      </FormControl>
                    </>
                  )}
                  <Button
                    className='w-full'
                    title={
                      formState
                        ? 'Create account'
                        : forgetPassword
                        ? 'Send Instructions'
                        : 'Log In'
                    }
                    type='submit'
                  />
                  {formState ? (
                    <Text className='text-white/70'>
                      By continuing, you agree to our{' '}
                      <Link href='/terms-of-service' className='text-[#51EC81]'>
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href='/privacy-policy' className='text-[#51EC81]'>
                        Privacy Policy
                      </Link>
                    </Text>
                  ) : (
                    <span
                      className='text-center text-[#51EC81] cursor-pointer'
                      onClick={() => setForgetPassword(!forgetPassword)}
                    >
                      {forgetPassword ? '' : 'Forget Password?'}
                    </span>
                  )}
                  {!forgetPassword && (
                    <>
                      <Text className='flex items-center justify-center gap-4 form-or text-white/70'>
                        or
                      </Text>

                      <ButtonGroup className='w-full'>
                        <SocialBtn
                          className='flex-1 w-full'
                          bgColor='#fff'
                          image={'/google.svg'}
                          alt='Google'
                        />
                        <SocialBtn
                          className='flex-1 w-full hover:bg-blue-500'
                          bgColor='#0676Eb'
                          image={'/facebook.svg'}
                          alt='Facebook'
                        />
                      </ButtonGroup>
                    </>
                  )}
                </VStack>
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
    </Box>
  );
};

export default AllForm;
