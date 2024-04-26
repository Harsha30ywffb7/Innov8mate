import React from 'react'
import { useSelector } from 'react-redux';
import {ProfileFeatureCard} from './ProfileFeatureCard';
import { DeleteAccount } from './ProfileFeatureCard';
import UserProfileCard from './userProfileCard';
import { Link } from 'react-router-dom';

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
    const user = useSelector(state => state.user.item);
    console.log(user)

    return (
        <>
            <div className='bg-gray-200 rounded-md bg-opacity-30'>
                <div className='mx-10 flex justify-between mt-5'>
                <Link to="/">
                    <p className="text-bold text-3xl ">Innov8mate</p>
                </Link>
                    <div className='flex'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-5 my-[18px] cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-5 my-4 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                        </svg>
                    </div>
                </div>

                <div className='flex ml-16 mr-16'>

                    <UserProfileCard/>
                    <div className='w-8/12 border-solid border-2 border-gray-200  rounded-lg my-4 mx-5 justify-center flex flex-wrap'>
                        <ProfileFeatureCard featureName='Ideas' ownerText='submitted' collabText='supported'/>
                        <ProfileFeatureCard featureName='Jobs' ownerText='Applied' collabText='saved'/>
                        <ProfileFeatureCard featureName='Collaborations' ownerText='Projects' collabText='collaborations'/>
                        <ProfileFeatureCard featureName='Ideas' ownerText='submitted' collabText='supported'/>
                        <DeleteAccount featureName='Delete Account' ownerText='Delete' />
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profilepage;