// import React from "react";
// import './styles/footer.css'

// const Footer = () => {
//   return (
//     <div className="footer">
//         <div className="footer-left">
//             <p className="title">innov<span>8</span>mate</p>
//             <p className="text">Join our subscribers list to get the instant news and special offers.</p>
//             <div className="email">
//                 <input type="text" name="email" id="email" placeholder="Your Email"/>
//                 <button>Subscribe</button>
//             </div>
//             <p className="copyrights">
//             &#169; Copyright 2024. All Rights Reserved by Innov8mate.
//             </p>
//             <div className="socialicons">
//                 <a href="https://www.instagram.com/"><i class="bi bi-instagram"></i></a>
//                 <a href="https://www.youtube.com/"><i class="bi bi-youtube"></i></a>
//                 <a href="https://www.linkedin.com/"><i class="bi bi-linkedin"></i></a>

//             </div>
//         </div>
//         <div className="footer-right">
//             <div className="company">
//                 <p className="headings">Company</p>
//                 <ul>
//                     <li><a href="">About</a></li>
//                     <li><a href="">Help Center</a></li>
//                     <li><a href="">Career</a></li>
//                     <li><a href="">Plans & pricing</a></li>
//                     <li><a href="">Contact</a></li>
//                     <li><a href="">Profile</a></li>
//                 </ul>
//             </div>
//             <div className="community">
//                 <p className="headings">Community</p>
//                 <ul>
//                     <li><a href="">Terms of Services</a></li>
//                     <li><a href="">Contact info</a></li>
//                 </ul>
//             </div>
//             <div className="contact-info">

//                 <div className="info">
//                     <div className="Icon">

//                     </div>
//                     <div className="details">
//                         <p id="title"><i class="bi bi-house"></i>Address</p>
//                         <p>tharapuvalasa,</p>
//                         <p>vishakhapatnam-530129,</p>
//                     </div>
//                 </div>

//                 <div className="info">
//                     <div className="Icon">
//                     <i class="bi bi-envelope"></i>
//                     </div>
//                     <div className="details">
//                         <p id="title">Email</p>
//                         <a href = "mailto: abc@example.com">innov8mate.co@gmail.com</a>
//                     </div>
//                 </div>

//                 <div className="info">
//                     <div className="Icon">
//                     <i class="bi bi-telephone-fill"></i>
//                     </div>
//                     <div className="details">
//                         <p id="title">Phone</p>
//                         <p>tharapuvalasa,</p>
//                     </div>
//                 </div> 
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer;

import React from "react";

const Footer = () => {
    return (
        
        <div className="grid gap-4 grid-cols-6 bg-orange-300 rounded-lg mt-20">
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
                    <a href="https://www.instagram.com/" className="mr-2"><i className="bi bi-instagram text-black hover:text-gray-400"></i></a>
                    <a href="https://www.youtube.com/" className="mr-2"><i className="bi bi-youtube text-black hover:text-gray-400"></i></a>
                    <a href="https://www.linkedin.com/"><i className="bi bi-linkedin text-black hover:text-gray-400"></i></a>
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
                <div className="info flex items-center">
                    <div className="Icon w-12 h-12 rounded-full bg-black flex items-center justify-center text-white mr-4">
                        <i className="bi bi-house"></i>
                    </div>
                    <div className="details">
                        <p className="font-semibold">Address</p>
                        <p>tharapuvalasa,</p>
                        <p>vishakhapatnam-530129,</p>
                    </div>
                </div>
                <div className="info flex items-center mt-4">
                    <div className="Icon w-12 h-12 rounded-full bg-black flex items-center justify-center text-white mr-4">
                        <i className="bi bi-envelope"></i>
                    </div>
                    <div className="details">
                        <p className="font-semibold text-sm">Email</p>
                        <a href="mailto:abc@example.com">innov8mate.co@gmail.com</a>
                    </div>
                </div>
                <div className="info flex items-center mt-4">
                    <div className="Icon w-12 h-12 rounded-full bg-black flex items-center justify-center text-white mr-4">
                        <i className="bi bi-telephone-fill"></i>
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




