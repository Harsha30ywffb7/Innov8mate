import React from 'react';
import { Link } from 'react-router-dom';
const companydata = [
    {
        "id": 3,
        "profile": "https://source.unsplash.com/400x400/?company",
        "title": "Healthify Inc.",
        "founders": ["Emily Williams", "Michael Brown"],
        "sector": "Healthcare",
        "location": "London, UK"
    }
];
//{ profile, title, founders, sector, location}
const Company = () => {
    return (
        <div className='rounded-lg mx-auto my-4 w-[320px]   flex gap-5 align-middle justify-between shadow-md'>
            <div>
                <img className='flex align-middle ml-2 mt-8 w-16 rounded-full ' src={companydata.profile} alt="Company logo" />
            </div>
            <div className='mr-4 p-5'>
                <p className=' font-semibold'>Healthify Inc</p>
                <p className='text-gray-500 text-xs'>HealthCare</p>
                <p className=' text-xs'>{["Emily Williams", "Michael Brown"].join(', ')}</p>
                <p className=' text-xs'>Usa</p>
            </div>
        </div>
    );
};



export default Company;