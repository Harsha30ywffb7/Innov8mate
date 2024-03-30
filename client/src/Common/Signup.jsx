import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [data, setData] = useState({
    email: '', password: '', username: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post('http://localhost:5000/user/signup', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.data);
      if (response.status === 200) {
        setShowSuccess(true);
        
        setTimeout(() => {
          navigate('/register');
        }, 2000); // Navigate after 2 seconds
      }
      else {
        // Handle other status codes
        console.error('Error signing up:', response.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // User with this email or username already exists
        console.log(error);
        setErrorMessage(error.response.data.error);
      } else {
        console.error('Error signing up:', error);
      }
    }
  };

  // const successAnimation = useSpring({
  //   opacity: showSuccess ? 1 : 0,
  //   marginTop: showSuccess ? 0 : -50
  // });


  const handleSignin = async (e) => {
    e.preventDefault();
    //after verification send to navigate home page.
    try {
      console.log("hello bro")
      const response = await axios.post('http://localhost:5000/user/signin', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if(response.status=== 200){
        localStorage.setItem("email",response.data.user.email);
        localStorage.setItem("Userid",response.data.user.id);
        localStorage.setItem("Username",response.data.user.username);
      console.log(response.data.user.email);
      }
     // console.log(response.data);
    } catch (error) {
      console.log("Hello error")
      console.error('Error signing up:', error);
    }
  }


  const [isSignIn, setisSignIn] = useState(false);
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          <h2 className="mt-5  text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {isSignIn ? "Sign in to your account" : "create your account"}
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
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400  focus:ring-inset focus:ring-2 ring-1 ring-inset ring-gray-300   
                      sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {!isSignIn && (
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="text"
                    value={data.username}
                    onChange={(e) => setData({ ...data, username: e.target.value })}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400  focus:ring-inset focus:ring-2 ring-1 ring-inset ring-gray-300   
                      sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            )}

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    {isSignIn ? "Forgot password?" : ""}
                  </a> */}
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={data.password}
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>

              {isSignIn ? (

                <button
                  onClick={handleSignin}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

                >
                  Sign in
                </button>

              ) : (

                <button
                  onClick={handleSignup}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>

              )}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            {isSignIn ? 'New to Innov8mate?' : 'Already existed?'}{' '}
            <p onClick={() => { setisSignIn(!isSignIn) }} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">
              {isSignIn ? 'Signup Now' : 'SignIn Now'}
            </p>
          </p>
        </div>
        {/* <animated.div style={successAnimation}>
          <p>Signup successful! Redirecting...</p>
        </animated.div> */}
        {errorMessage && <p className='text-sm text-red-500 text-center mt-5'>{errorMessage}</p>}
      </div>
    </>
  )
}

export default Signup;