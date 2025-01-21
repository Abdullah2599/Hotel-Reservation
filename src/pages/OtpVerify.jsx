import { Field, Formik } from 'formik'
import React, { useState } from 'react'
import bg from '/assets/img/bg.jpg'
import { apiService } from '../services/Apiservice';
import * as Yup from 'yup'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../App';

function OtpVerify() {
    
   // const navigate = useNavigate(); 
    const { tempdata } = useAppContext();
    console.log(tempdata);
    const { email, password } = tempdata; // Extract email from user data
    const [error, setError] = useState(null); // To track any errors

    const handleOtpSubmit = async (values) => {
        try {
            // API request to verify OTP
            const code = values.otp;
            const response = await apiService.postData('auth/verifycode', code,);
            
            // If OTP is verified successfully
            if (response.data && response.data.code === 200) {
                // Optionally store token in localStorage or sessionStorage
                //localStorage.setItem('token', response.data.token); // Assuming the token is returned
                // Redirect user to login or protected page

                toast.success('OTP verified successfully!');
                const respons = await apiService.postData('auth/login', { email, password });
                console.log(respons);
  
                if (response.result !== null) {
                  toast.success("Login successful!")
                  // reload
                  //navigate('/');                
                }
            }
        } catch (err) {
            console.error('OTP Verification Error:', err);
            setError('Invalid OTP or verification failed!');
        }
    };
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
                            validate={values => {
                                const errors = {};
                                if (!values.otp) {
                                    errors.otp = 'Required';
                                }
                                return errors;
                            }
                        }
                        onSubmit={handleOtpSubmit}
                        >
                            <form>
                                <Field name="otp" type="text" placeholder="Enter OTP" className="w-full p-2 border border-gray-300 h-10 mb-4" />
                                {/* {errors.otp && touched.otp && <p className="text-red-500">{errors.otp}</p>} */}

                                <button type="submit" className="btn btn-secondary w-full h-10 hover:bg-primary-dark transition duration-300">
                                    Verify
                                </button>

                                <p className="text-center text-white mt-4">
                                    Forgot OTP? <a href="#" className="text-primary hover:text-primary-dark">Resend</a>
                                </p>
                            </form>
                        </Formik>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtpVerify
