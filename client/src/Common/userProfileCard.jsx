import React from 'react'
import { Link } from 'react-router-dom'

const UserProfileCard = ({user}) => {
    return (
        <div className='w-3/12  my-8 mx-5'>
            <div className='border-solid border-2 bg-white rounded-lg relative'>
                <div className='flex justify-center mt-10 mb-5'>
                    <img src="https://source.unsplash.com/400x400/?smile" alt="userProfile" className='w-[80px] h-[80px] rounded-full' />
                </div>
                <p className='font-bold text-center text-xl'>{user?.username}</p>
                <div className='text-xs text-center text-slate-600'>
                    <p>{user?.email}</p>
                </div>
                <div className='flex my-6 justify-around items-center'>
                    <p className='text-black text-sm font-bold'>120 <span className='text-sm'>Connections</span></p>
                    <button className='py-1 px-2 text-sm  rounded-lg bg-orange-400 text-white'>connect</button>
                </div>

                <div className='absolute top-0 right-0 mt-4 mr-6'>
                    <Link to='/register'><button className='text-blue-500' >Edit</button></Link>
                </div>
            </div>

            <div className='mt-5 border-solid border-2 bg-white rounded-lg p-5'>
                <div className='text-sm text-gray-800 '>
                    <p className='font-semibold'>Education</p>
                    <p className=' text-slate-600 text-sm'>{user?.education}</p>
                    <p className='font-semibold'>Location</p>
                    <p className=' text-slate-600 text-sm'>{user?.city}, {user?.state}, {user?.country}</p>
                    <p className='font-semibold'>About</p>
                    <p className=' text-slate-600 text-sm'>{user?.about}</p>
                </div>
            </div>

            <div className='mt-2 flex justify-center'>
                <button className='py-1 px-2 rounded-lg bg-blue-400 text-white'>message</button>
            </div>

        </div>
    )
}

export default UserProfileCard