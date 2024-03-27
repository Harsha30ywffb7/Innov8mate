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
        <div className='my-4 rounded-lg mx-auto w-[28rem] border-2 border-slate-200 border-solid flex justify-around  shadow-md'>
            <div>
                <img className='flex  ml-2 mt-8 w-20 rounded-full ' src="https://source.unsplash.com/400x400/?company" alt="Company logo" />
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