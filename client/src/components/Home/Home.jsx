import React from "react";
import CompanyPartners from "./companies.jsx";
import Reviews from "./Reviews.jsx";
import Faqs from "./Faqs.jsx";
import Features from "./Features.jsx";
import bg from '../../Assets/bg.avif';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="text-center ">
            <header className="mt-0 ">
                
                <section className="bg-slate-200 p-8 ">
                    <div className="">
                        <p className=" text-4xl text-orange-500 ">Innov<span className="text-black">8</span>Mate</p>
                        <p id="tagline" className="font-semibold text-sm ">Innovate create elevate</p>
                    </div>
                    <div className="">
                        <p id="text" className="m-20 mb-10 text-5xl font-semibold">The best website for Innovators that'll help you upskill yourself </p>
                    </div>
                    <div className=" mt-4 mb-5">
                        <Link to='/signin'><button className="px-6 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600">Get started</button></Link>
                    </div>
                </section>
            </header>
            <div className="p-5 rounded-lg mt-7 flex justify-center ">
                <div className="mx-20 flex mr-10">
                    <div className="w-1/2 mr-10 mt-10">
                        <p className="text-3xl font-semibold mb-4 ">Why innov8mate?</p>
                        <p  className="">Connect with students, founders, and innovators to solve real-world problems, find funding, and launch your dreams..</p>
                        <ul className="mt-4">
                            <li className="">Largest platform to become innovator on the market.</li>
                            <li className="">Completely customizable for innovators.</li>
                            <li className="">Include hirings, hackathons, ideas, fundings, project Collaborations.</li>
                        </ul>
                    </div>
                    <div className="w-5/12">
                        <img src={bg} alt="main-page" className=" items-center  gap-10 rounded-lg" />
                    </div>
                </div>
            </div>
            <article >
                <p className=" text-3xl text-black m-10 mx-20">Featured opportunities</p>
                <Features />
            </article>
            <article >
                <p className="text-3xl text-black m-10">Our partners</p>
                <CompanyPartners />
            </article>
            <article className="mx-20 my-20">
                <p className="text-3xl text-black m-20 ">Reviews</p>
                <Reviews />
            </article>
            <article className="m-28">
                <p className="text-3xl text-black m-10">Frequently asked Questions</p>
                <Faqs />
            </article>
        </div>
    );
};

export default Home;
