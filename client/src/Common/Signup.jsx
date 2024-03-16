import React from 'react'
import Logo from '../Assets/Logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const[isSignIn, setisSignIn] = useState(false);
    return (
        <>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
             
              <h2 className="mt-5  text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {isSignIn?"Sign in to your account":"create your account"}
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400  focus:ring-inset focus:ring-2 ring-1 ring-inset ring-gray-300   
                      sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        {isSignIn?"Forgot password?":""}
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                  {/* Conditional rendering of Link based on isSignIn state */}
                  {isSignIn ? (
                    <Link to="/"> {/* Route for signing in */}
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign in
                      </button>
                    </Link>
                  ) : (
                    <Link to="/registration"> {/* Route for signing up */}
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign up
                      </button>
                    </Link>
                  )}
                </div>
              </form>
    
              <p className="mt-10 text-center text-sm text-gray-500">
                {isSignIn?'New to Innov8mate?':'Already existed?'}{' '}
                <a onClick={()=>{setisSignIn(!isSignIn)}} href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  {isSignIn?'Signup Now':'SignIn Now'}
                </a>
              </p>
            </div>
          </div>
        </>
      )
}

export default Signup;