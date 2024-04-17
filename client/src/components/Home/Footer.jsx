import React from "react";

const Footer = () => {
    return (

        <div className=" bottom-0 grid gap-4 grid-cols-6 bg-orange-300 rounded-lg mt-20">
            {/* First div taking up 2 columns */}
            <div className="col-span-2 p-5">
                <p className="text-center text-3xl">innov<span className="text-black">8</span>mate</p>
                <p className="text-center text-md">Join our subscribers list to get the instant news and special offers.</p>
                <div className="flex justify-center mt-4">
                    <input type="text" name="email" id="email" placeholder="Your Email" className="px-4 py-2 rounded-md mr-4" />
                    <button className="px-6 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-700">Subscribe</button>
                </div>
                <p className="text-center mt-4 text-sm">&copy; Copyright 2024. All Rights Reserved by Innov8mate.</p>
                <div className="flex justify-center mt-4">
                    <a href="https://www.instagram.com/" className="mr-2">
                        <i className="bi bi-instagram text-black hover:text-gray-400"></i>
                    </a>
                    <a href="https://www.youtube.com/" className="mr-2">
                        <i className="bi bi-youtube text-black hover:text-gray-400"></i>
                    </a>
                    <a href="https://www.linkedin.com/">
                        <i className="bi bi-linkedin text-black hover:text-gray-400"></i>
                    </a>
                </div>
            </div>

            {/* Second div taking up 1 column */}
            <div className="col-span-1 mt-6">
                <p className="font-semibold">Company</p>
                <ul className="mt-2">
                    <li><a href="">About</a></li>
                    <li><a href="">Help Center</a></li>
                    <li><a href="">Career</a></li>
                    <li><a href="">Plans & pricing</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Profile</a></li>
                </ul>
            </div>

            {/* Third div taking up 1 column */}
            <div className="col-span-1 mt-6">
                <p className="font-semibold">Community</p>
                <ul className="mt-2">
                    <li><a href="">Terms of Services</a></li>
                    <li><a href="">Contact info</a></li>
                </ul>
            </div>

            {/* Fourth div taking up 2 columns */}
            <div className="col-span-2 contact-info mt-6">
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

                    </div>
                    <div className="details">
                        <p className="font-semibold">Address</p>
                        <p>tharapuvalasa,</p>
                        <p>vishakhapatnam-530129,</p>
                    </div>
                </div>
                <div className="flex items-center mt-4">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>

                    </div>
                    <div className="details">
                        <p className="font-semibold text-sm">Email</p>
                        <a href="mailto:innov8mate.co@gmail.com">innov8mate.co@gmail.com</a>
                    </div>
                </div>
                <div className="info flex items-center mt-4">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </div>
                    <div className="details">
                        <p className="font-semibold">Phone</p>
                        <p>+91 9876543210</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;




