import React from 'react';
import { Link } from 'react-router-dom';

//{ profile, title, founders, sector, location}
const Company = ({}) => {
    return (
        <div className='rounded-lg mx-auto my-4 w-[320px]   flex gap-5 align-middle justify-between shadow-md'>
            <div>
                <img className='flex align-middle ml-2 mt-8 w-16 rounded-full ' src={profile} alt="Company logo" />
            </div>
            <div className='mr-4 p-5'>
                <p className=' font-semibold'>{title} || Healthify Inc</p>
                <p className='text-gray-500 text-xs'>{sector} || HealthCare</p>
                <p className=' text-xs'>{founders?.join(',')}{["Emily Williams", "Michael Brown"].join(', ')}</p>
                <p className=' text-xs'>{location} || Usa</p>
            </div>
        </div>
    );
};



export default Company;