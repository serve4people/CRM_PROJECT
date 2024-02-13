import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    //y
    event.preventDefault();
    console.log(`Login by ${email}`);
  };
  return (
    <>
      <div className='relative flex flex-col justify-center min-h-screen overflow-hidden'>
        <img
          className='flex justify-center items-center max-w-xs mx-auto mt-12'
          src='https://crms.mymudra.com/images/logo.png'
        ></img>
        <div className='w-10/12 p-6 m-auto mt-8 bg-white rounded-md shadow-xl shadow-teal-600/40 ring ring-2 ring-gray-200 sm:max-w-sm lg:max-w-lg'>
          <h1 className='text-2xl font-semibold text-center text-black-700 uppercase'>
            Login
          </h1>
          <form className='mt-6' onSubmit={handleSubmit}>
            <div className='mb-2'>
              <label
                for='email'
                className='block text-sm font-semibold text-gray-800'
              >
                Email
              </label>
              <input
                type='email'
                className='block w-full px-4 py-2 mt-2 text-teal-700 bg-white border rounded-md focus:border-teal-400 focus:ring-teal-300 focus:outline-none focus:ring focus:ring-opacity-40'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-2'>
              <label
                for='password'
                className='block text-sm font-semibold text-gray-800'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              >
                Password
              </label>
              <input
                type='password'
                className='block w-full px-4 py-2 mt-2 text-teal-700 bg-white border rounded-md focus:border-teal-400 focus:ring-teal-300 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>
            <div>
              <div className='flex items-stretch'>
                <div className=''>
                  <input type='checkbox' className='ml-1'></input>
                  <label className='ml-1'>Remember me</label>
                </div>
                <div className=''>
                  <a
                    href='#'
                    className='lg:ml-52 text-xs max-w-sm text-teal-600 hover:underline'
                  >
                    <label className='max-w-sm'>Forget Password?</label>
                  </a>
                </div>
              </div>
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-teal-700 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600'
              >
                Login
              </button>
            </div>
            <span className='lg:ml-28 md:ml-16 text-xs'>
              &copy; 2024 mudrafincorp.co.in | All Rights Reserved
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
