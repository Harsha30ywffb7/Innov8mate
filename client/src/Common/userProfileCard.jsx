import React from 'react'

const UserProfileCard = () => {
    return (
        <div className='w-3/12  my-8 mx-5'>
            <div className='border-solid border-2 bg-white rounded-lg relative'>
                <div className='flex justify-center mt-10 mb-5'>
                    <img src="https://source.unsplash.com/400x400/?smile" alt="userProfile" className='w-[80px] h-[80px] rounded-full' />
                </div>
                <p className='font-bold text-center text-xl'>Harsha vardhan</p>
                <div className='text-xs text-center text-slate-600'>
                    <p>harshavardhan.gulla2003@gmail.com</p>
                </div>
                <div className='flex my-6 justify-around items-center'>
                    <p className='text-black text-sm font-bold'>120 <span className='text-sm'>Connections</span></p>
                    <button className='py-1 px-2 text-sm  rounded-lg bg-orange-400 text-white'>connect</button>
                </div>

                <div className='absolute top-0 right-0 mt-4 mr-6'>
                    <button className='text-blue-500' >Edit</button>
                </div>
            </div>

            <div className='mt-5 border-solid border-2 bg-white rounded-lg p-5'>
                <div className='text-sm text-gray-800 '>
                    <p className='font-semibold'>Education</p>
                    <p className=' text-slate-600 text-sm'>Btech, Information technology</p>
                    <p className='font-semibold'>Location</p>
                    <p className=' text-slate-600 text-sm'>vishakhapatnam, AndhraPradesh, India</p>
                    <p className='font-semibold'>About</p>
                    <p className=' text-slate-600 text-sm'>I will playing games and developing is my hobby.</p>
                </div>
            </div>

            <div className='mt-2 flex justify-center'>
                <button className='py-1 px-2 rounded-lg bg-blue-400 text-white'>message</button>
            </div>

        </div>
    )
}

export default UserProfileCard