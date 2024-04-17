import React from 'react'
import DashBoardProjects from '../components/Collaboration/DashBoardProjects';
import Company from '../components/Funding/CompaniesList';
import CardsContainer from '../components/Ideas/card';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
/** 
 * !Header ---  only name  ---- profile --> logout message
 * 
 * !Profile div            --- !total div
 * 
 * !(profile, username, about, location , study ) 
 * 
 * !(ideas list,  hackathons , list, companies , projects )
 *  
 *  -----------          TODO  :
 * 
 * 
 * name
 * 
 */


const Profilepage = () => {
    return (
        <><div>
            <Navbar />
        </div>
            <div>
                <div className='mx-10 flex justify-between'>
                    <p className='mx-10 leading-loose text-3xl font-medium text-black mt-4'>Hello Harshavardhan...</p>
                    <div className='flex '>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-5 my-[18px] cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-5 my-4 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                        </svg>

                    </div>
                </div>

                <div className='flex ml-16 mr-16'>
                    <div className='w-3/12 border-solid border-2 border-gray-200  rounded-lg my-8 mx-5 relative'>
                        <div className='flex justify-center mt-10 mb-5'>
                            <img src="https://source.unsplash.com/400x400/?face" alt="userProfile" className='w-[100px] h-[100px] rounded-full' />
                        </div>
                        <div className='flex justify-center'><p className='font-semibold'>Harshavardhan Gulla</p></div>

                        <div className=' ml-6 mt-4'>
                            <div className='flex justify-around text-slate-600 mb-6'>
                                <p className='ml-36 '>Connections</p>
                                <p>529</p>
                            </div>
                            <div className='text-md '><p>Btech, Information technology</p></div>
                            <div className='text-md my-1'><p>vishakhapatnam</p></div>
                            <div className='mt-4'>
                                <p className='font-semibold'>About</p>
                                <p className=' text-slate-600 text-sm'>I will playing games and developing is my hobby.</p>
                            </div>
                        </div>

                        <div className='absolute top-0 right-0 mt-4 mr-6'>
                            <button className='text-blue-500' >Edit</button>
                        </div>

                        <div class='content-center mt-2 mb-4 flex justify-center items-center'>
                            <button class='py-1 px-2 mt-10 mr-5 rounded-lg bg-orange-400 text-white'>connect</button>
                            <button class='py-1 px-2 mt-10 ml-5 rounded-lg bg-blue-400 text-white'>message</button>
                        </div>

                    </div>

                    <div className='w-8/12 border-solid border-2 border-gray-200  rounded-lg my-8 mx-5'>
                        <div className='m-5'>
                            <p className='text-xl font-semibold'>Projects Collborated</p>
                            <div className='overflow-auto-x'>
                                <DashBoardProjects />
                            </div>
                        </div>

                        <div className='m-5 '>
                            <p className='text-xl font-semibold mr-5'>companies </p>
                            <div className='flex'>
                                <div className='overflow-auto-x'>
                                    <Company />
                                    <Company />
                                    <Company />
                                </div>
                            </div>
                        </div>

                        <div className='m-5 '>
                            <p className='text-xl font-semibold mr-5'>Ideas Supported </p>
                            <div className='flex'>
                                <div className='overflow-auto-x'>
                                    <CardsContainer />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Profilepage;