import { Field, Formik ,Form} from 'formik'
import React, { useState } from 'react'
import bg from '/assets/img/bg.jpg'
import { apiService } from '../services/Apiservice';
import * as Yup from 'yup'
import { useAppContext } from '../App';
import { CgFormatColor } from 'react-icons/cg';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function OtpVerify() {
    
   const navigate = useNavigate(); 
    const { tempdata } = useAppContext();
    console.log(tempdata);
    const { email, password } = tempdata; // Extract email from user data
    const [error, setError] = useState(null); // To track any errors

    return (
        <div className="min-h-screen h-full w-full bg-no-repeat bg-cover py-40 bg-accent" style={{ backgroundImage: `url(${bg})` }}>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-accent mx-auto shadow-2xl animate-fadeInLeft overflow-hidden">
                    <div className="w-full lg:w-1/2 flex flex-col items-start justify-center p-12 bg-no-repeat bg-cover bg-center bg-white">
                        <h1 className="text-accent font-primary text-3xl mb-3">Email Verification!</h1>
                        <div>
                            <p className="text-black font-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas acfsfd.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <h2 className="text-3xl font-primary text-white mb-2">Enter OTP</h2>
                        <p className="mb-4 font-tertiary text-white">
                            Enter the OTP sent to your email
                        </p>
                        <Formik
                            initialValues={{ otp: '' }}
                            // validate={values => {
                            //     const errors = {};
                            //     if (!values.otp) {
                            //         errors.otp = 'Required';
                            //     }
                            //     return errors;
                            // }
                       // }
                       onSubmit={async (values) => {
                        try {
                          const code = values.otp;
                      
                          // Verify OTP API call
                          const verifyResponse = await axios.post('http://192.168.2.2:90/api/v1/auth/verifycode', { code });
                      
                          if (verifyResponse.data.message === 'user registered successfully') {
                            console.log('OTP verified successfully:', verifyResponse.data);
                      
                            // Display success message
                            toast.success('OTP verified successfully!');
                      
                            // Login API call
                            const respons = await apiService.postData('auth/login', { email, password });
                            console.log(respons);
                            
                            // Save token to localStorage
                            localStorage.setItem('token', respons.token);
                      
                            // Redirect user to the home page
                            navigate('/');
                          } else {
                            // Handle OTP verification failure
                            setError(verifyResponse.data.message || 'OTP verification failed!');
                            toast.error(verifyResponse.data.message || 'OTP verification failed!');
                          }
                        } catch (err) {
                          console.error('Error during OTP verification or login:', err);
                      
                          // Display error message
                          setError(err.response?.data?.message || 'An error occurred!');
                          toast.error(err.response?.data?.message || 'An error occurred!');
                        }
                      }}
                      
                        >
                            <Form action='#'>
                                <Field name="otp" type="text" placeholder="Enter OTP" className="w-full p-2 border border-gray-300 h-10 mb-4" />
                                {error && <p className="text-red-500">{error}</p>}

                                <button type="submit" className="btn btn-secondary w-full h-10 hover:bg-primary-dark transition duration-300">
                                    Verify
                                </button>

                                <p className="text-center text-white mt-4">
                                    Forgot OTP? <a href="#" className="text-primary hover:text-primary-dark">Resend</a>
                                </p>
                            </Form>
                        </Formik>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtpVerify
