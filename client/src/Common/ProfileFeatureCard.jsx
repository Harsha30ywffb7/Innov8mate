import React from 'react'

export const ProfileFeatureCard = (props) => {
    return (
        <div className='bg-white my-5 mx-10 p-5 w-4/12 rounded-xl shadow-md h-36'>
            <div className=' border-l-4 border-l-blue-600'>
                <p className='text-sm font-bold ml-4'>{props.featureName}</p>
            </div>
            <div className='px-2 border-b border-dashed border-slate-600 flex justify-between border-b-3 border-b-slate-600 hover:bg-gray-100 cursor-pointer '>
                <p className='my-4 text-xs font-bold text-slate-600'>{props.ownerText}</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-4 mt-4">
                    <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>

            </div>
            <div className='flex justify-between px-2 cursor-pointer hover:bg-gray-100'>
                <p className=' my-4 text-xs font-bold text-slate-600'>{props.collabText}</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-4 mt-4">
                    <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    )
}

export const DeleteAccount = ()=>{
    return (
        <div className='bg-white my-5 mx-10 p-5 w-4/12 rounded-xl shadow-md h-24'>
            <div className=' border-l-4 border-l-red-600'>
                <p className='text-sm font-bold ml-4'>Delete Account</p>
            </div>
            <div className='px-2 flex justify-between  hover:bg-red-100 cursor-pointer '>
                <p className='my-4 text-xs font-bold text-slate-600'>Delete</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-4 mt-4">
                    <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>

            </div>
        </div>
    )
}