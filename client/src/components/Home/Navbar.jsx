import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <nav className="bg-gray-100 flex justify-between items-center mb-0 sticky top-0 z-50 p-5 font-sans">
            <div className="logo">
                <Link to="/">
                    <p className="text-bold text-3xl ">Innov8mate</p>
                </Link>
            </div>
            <div className="navItems">
                <ul className="flex">
                    <li className="mr-4 text-">
                        <Link to="/" >Home</Link>
                    </li>
                    <li className="mr-4">
                        <Link to="/about" >About Us</Link>
                    </li>
                    <li className="mr-4">
                        <Link to="/hackathons" >Hackathons</Link>
                    </li>
                    <li className="mr-4">
                        <Link to="/jobs" >Jobs</Link>
                    </li>
                    <li className="mr-4">
                        <Link to="/collaboration" >Collaboration</Link>
                    </li>
                    <li className="mr-4">
                        <Link to="/pitchideas" >Pitch Ideas</Link>
                    </li>
                    <li className="mr-4">
                        <Link to="/funding" >Funding</Link>
                    </li>
                </ul>
            </div>
            {/* <div className="Profilelogo">
                {isLogin ? (
                    <div className="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <Link to='/'>
                            <button onClick={() => setIsLogin(!isLogin)}
                                className="cursor-pointer  px-1 py-1 rounded-lg bg-pink-300 text-white">Logout</button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link to='/signin'>
                            <button onClick={() => setIsLogin(!isLogin)} className="bg-orange-500 hover:bg-orange-700 text-white py-1 px-2 rounded">
                                Login
                            </button>
                        </Link>
                    </div>
                )}

            </div> */}

            <div className="Profilelogo">
                {isLogin ? (
                    <div className="flex gap-3">
                        <Link to="/profile"> {/* Link to user profile page */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 cursor-pointer"
                            >
                                {/* SVG for user profile icon */}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                            </svg>
                        </Link>
                        <Link to="/">
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="cursor-pointer  px-1 py-1 rounded-lg bg-pink-300 text-white"
                            >
                                Logout
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/signin">
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="bg-orange-500 hover:bg-orange-700 text-white py-1 px-2 rounded"
                            >
                                Login
                            </button>
                        </Link>
                    </div>
                )}
            </div>

        </nav>
    );
};

export default Navbar;
