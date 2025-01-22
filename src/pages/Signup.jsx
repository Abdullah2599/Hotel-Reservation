import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup'
import backgroundImage from '/assets/img/ls.jpg';
import bg from '/assets/img/bg.jpg'
import React, { useState } from 'react'
import { apiService } from '../services/Apiservice';
import { useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useAppContext } from '../App';



function Signup() {
  const router = useNavigate();
  const { setTempData } = useAppContext();
  const [error, setError] = useState([]);

  return (
    <div className="min-h-screen h-full w-full bg-no-repeat bg-cover py-40 bg-accent" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-accent mx-auto shadow-2xl animate-fadeInLeft overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center p-12 bg-no-repeat bg-cover bg-center bg-white">
            <h1 className="text-accent font-primary text-3xl mb-3">Welcome</h1>
            <div>
              <p className="text-black font-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" className="text-gray-100 font-semibold">Learn more</a></p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl font-primary text-white mb-2">Register</h2>
            <p className="mb-4 font-tertiary text-white">
              Create your account. It`s free and only take a minute
            </p>
            <Formik
              initialValues={{ fname: '', lname: '', email: '', password: '', cpassword: '' }}
              validationSchema={Yup.object({
                fname: Yup.string().required(),
                lname: Yup.string().required(),
                email: Yup.string().email().required(),
                contact: Yup.string().required(),
                cpassword: Yup.string().required().oneOf([Yup.ref('password'), null], 'Passwords must match'), 
                password: Yup.string().required()
              })}

              onSubmit={async (values) => {
                const name = `${values.fname} ${values.lname}`;
                const data = {
                  username: name,
                  email: values.email,
                  password: values.password,
                  contact: values.contact,
                };
              
                try {
                  const response = await apiService.postData('auth/register', data);
                  console.log(response);          
                  if (response.message === 'generate code successfully') {
                    setError(null);
                    toast.success('Account created!');
                   // router('/otp', {data: {email: values.email}});
                    setTempData({ email: values.email, password: values.password });
                  //  localStorage.setItem('tempdata', JSON.stringify({ email: values.email, password: values.password }));
                    router('/otp');
                  }
                } catch (err) {
                  console.error('Error during registration:', err.response.data.errors);
                  const errorMessages = err.response.data.errors.map((error) => ({
                    field: error.path, 
                    message: error.msg,
                  }));
                  setError(errorMessages);
                 
                }
              }}
              
            >
              <Form action="#">
                {error && error.length > 0 && (
                  <div className="text-red-600 bg-red-200 bg-opacity-55 rounded-md backdrop-blur-sm py-2 px-8 my-3">
                    <ul className="list-disc space-y-2">
                      {error.map((err, index) => (
                        <li key={index} className="text-sm">
                          {/* Display each error message from the "message" field */}
                          {err.message}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="grid grid-cols-2 gap-1">
                  <Field type="text" name="fname" placeholder="Firstname" className="py-1 px-2 h-10 font-tertiary" />
                  {/* <ErrorMessage name="fname" component="div" className="text-red-600" /> */}
                  <Field type="text" name="lname" placeholder="Surname" className="py-1 px-2 h-10 font-tertiary" />
                  <ErrorMessage name="fname" component="div" className="text-red-600 text-xs" />
                </div>
                <div className="mt-1">
                  <Field type="text" name="email" placeholder="Email" className="py-1 px-2 w-full h-10 font-tertiary" />
                  <ErrorMessage name="email" component="div" className="text-red-600 text-xs" />
                </div>
                <div className="mt-1">
                  <Field type="text" name="contact" placeholder="Contact" className="py-1 px-2 w-full h-10 font-tertiary" />
                  <ErrorMessage name="contact" component="div" className="text-red-600 text-xs" />
                </div>
                <div className="mt-1">
                  <Field type="password" name="password" placeholder="Password" className="py-1 px-2 w-full h-10 font-tertiary" />
                  <ErrorMessage name="password" component="div" className="text-red-600 text-xs" />
                </div>
                <div className="mt-1">
                  <Field type="password" name="cpassword" placeholder="Confirm Password" className="py-1 px-2 w-full h-10 font-tertiary" />
                  <ErrorMessage name="cpassword" component="div" className="text-red-600 text-xs" />
                </div>
                <div className="mt-1">
                  <input type="checkbox" className="border border-gray-400" />
                  <span className="px-2 font-tertiary">
                    I accept the <a href="#" className=" text-black font-medium">Terms of Use</a> &  <a href="#" className="text-black font-semibold">Privacy Policy</a>
                  </span>
                </div>
                <div className="mt-5">
                  <button type="submit" className="btn btn-secondary w-full h-10 hover:bg-black hover:scale-105 transition-all duration-300">Register Now</button>
                </div>
                <div className="text-center mt-5">
                  <p className="text-black font-tertiary">Already have an account? <a href="/login" className="text-black font-semibold">Login</a></p>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Signup