
// import React from "react";
// import './styles/nav.css';
// import { useState } from "react";
// import { Link } from "react-router-dom";

// /**
//  * Add Ons: 
//  * If img on profile is null or empty then show default icon or else we use users profile after storing from details.
//  * 
//  */
// const Navbar=()=>{
//     const [isLogin, setIsLogin] = useState(false);
//     return(
//         <>
//             <nav>
//                 <div className="logo">
//                     <a href=""><p>Innov8mate</p></a>
//                 </div>
//                 <div className="navItems">
//                     <ul>
//                         <li><Link to='/' className="nav-list" >Home</Link></li>
//                         <li><Link to="/about"  className="nav-list">About Us</Link></li>
//                         <li><Link to="/hackathons"  className="nav-list" >Hackathons</Link></li>
//                         <li><Link to="/jobs" className="nav-list" >jobs</Link></li>
//                         <li><Link to="/collaboration" className="nav-list" >Collaboration</Link></li>
//                         <li><Link to="/pitchideas"  className="nav-list" >Pitch Ideas</Link></li>
//                         <li><Link to="/funding"  className="nav-list" >Funding</Link></li>
//                     </ul>
//                 </div>

//                 <div className="Profilelogo">
//                     {isLogin?(<i className="home-user bi bi-person-circle" onClick={()=>setIsLogin(!isLogin)} ></i>):
//                     (<button 
//                     onClick=
//                     {()=>setIsLogin(!isLogin)}>login</button>)}
//                     <i className="home-chast bi bi-chat-right"></i>
//                 </div>

//                 <div className="hamburger-menu">
//                     <div className="bar"></div>
//                     <div className="bar"></div>
//                     <div className="bar"></div>
//                 </div>

//             </nav>
//         </>
//     )
// }
// export default Navbar;


import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
            <div className="Profilelogo">
                {isLogin ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => setIsLogin(!isLogin)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /> 
                  </svg>
                ) : (
                    <div>
                           <Link to='/signin'>
                                <button onClick={() => setIsLogin(!isLogin)} className="bg-orange-500 hover:bg-orange-700 text-white py-1 px-2 rounded">
                                Login
                                </button>
                            </Link>
                    </div>
                )}
                <i className=" bi bi-chat-right"></i>
            </div>
        </nav>
    );
};

export default Navbar;
