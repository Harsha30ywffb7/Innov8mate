import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../../Utils/userSlice";
import { Navigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const username = localStorage.getItem('Username');

    useEffect(()=>{

    },[setUser])

    const handleLogout =()=>{
        localStorage.clear()
       // dispacth(removeUser())
        //setIsLogin(false)
    }


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
                    {/* <li className="mr-4">
                        <Link to="/hackathons" >Hackathons</Link>
                    </li> */}
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
            

            <div className="Profilelogo">
                {username ? (
                    <div className="flex justify-between mr-3 items-center">
                    <p className="text-md font-bold ">{localStorage.getItem('Username')}</p>
                        <div className="flex gap-3">
                            <Link to="/profile"> {/* Link to user profile page */}
                                <img
                                    className="w-6 h-6 cursor-pointer rounded-full m-2"
                                    src='https://source.unsplash.com/400x400/?smile'
                                />
                            </Link>
                            <Link to="/">
                                <button
                                    onClick={handleLogout}
                                    className="cursor-pointer  px-1 py-1 rounded-lg bg-pink-300 text-white"
                                >
                                    Logout
                                </button>
                            </Link>
                        </div>
                    </div>

                ) : (
                    <div>
                        <Link to="/signin">
                            <button
                                onClick={() =>{
                                    setUser(username);
                                    navigate('/')
                                }}
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
