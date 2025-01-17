import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup'
import backgroundImage from '/assets/img/ls.jpg';
import bg from '/assets/img/bg.jpg'
import React from 'react'

function Login() {
  return (
    <div className="min-h-screen h-full w-full bg-no-repeat bg-cover py-40 bg-accent" style={{ backgroundImage: `url(${bg})`}}>
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-accent mx-auto shadow-2xl animate-fadeInLeft overflow-hidden">
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center p-12 bg-no-repeat bg-cover bg-center bg-white">
          <h1 className="text-accent font-primary text-3xl mb-3">Welcome Back!</h1> 
           <div>
            <p className="text-black font-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas acfsfd.</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 py-16 px-12">
          <h2 className="text-3xl font-primary text-white mb-2">Login</h2>
          <p className="mb-4 font-tertiary text-white">
            Welcome back! Log in to your account
          </p>
          <Formik
            initialValues={{ email: '', password: ''}}
            validationSchema={Yup.object({
              email: Yup.string().email().required(),                 
              password: Yup.string().required()
            })}

            // onSubmit={async (values) => {              
            //   const response = await authservice.login(values);
            //   console.log(response);

            //   if (response.result !== null) {
            //     toast.success("Login successful!")
            //     // reload
            //     router('/', { replace: true });
            //     window.location.reload();
            //   }
            // }}
          >
            <Form action="#">

              <div className="mt-5">
                <Field type="text" name="email" placeholder="Email" className="py-1 px-2 w-full h-10 font-tertiary" />
                <ErrorMessage name="email" component="div" className="text-red-600 text-xs" />
              </div>
              <div className="mt-1">
                <Field type="password" name="password" placeholder="Password" className="py-1 px-2 w-full h-10 font-tertiary" />
                <ErrorMessage name="password" component="div" className="text-red-600 text-xs" />
              </div>
             
             
              <div className="mt-5">
                <button type="submit" className="btn btn-secondary w-full h-10 hover:bg-black hover:scale-105 transition-all duration-300">Login</button>
              </div>
              <div className="mt-5 text-center">
                <p className="text-white font-tertiary">Don't have an account? <a href="/signup" className="text-black font-medium">Sign up</a></p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login