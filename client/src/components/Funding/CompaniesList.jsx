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
        <div className='rounded-lg mx-auto my-4 w-[32rem] border-2 border-slate-200 border-solid  flex gap-5 align-middle justify-between shadow-md'>
            <div>
                <img className='flex align-middle ml-2 mt-8 w-16 rounded-full ' src={companydata.profile} alt="Company logo" />
            </div>
            <div className='mr-16 p-5'>
                <p className='text-md font-semibold'>Healthify Inc</p>
                <p className='text-gray-500 text-sm mb-1'>HealthCare</p>
                <p className=' text-xs'>{["Emily Williams", "Michael Brown"].join(', ')}</p>
                <p className=' text-xs'>Usa</p>
            </div>
        </div>
    );
};



export default Company;