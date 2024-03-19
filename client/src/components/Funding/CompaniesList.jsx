import React from 'react';
import { Link } from 'react-router-dom';
const foundedList = [
    {
        "id": 1,
        "profile": "https://www.example.com/company1",
        "title": "GreenTech Solutions Inc.",
        "founders": ["Alice Smith", "John Doe"],
        "sector": "Clean Technology",
        "location": "San Francisco, CA"
    },
    {
        "id": 2,
        "profile": "https://www.example.com/company2",
        "title": "EduTech Interactive",
        "founders": ["David Lee", "Sarah Jones"],
        "sector": "Education Technology",
        "location": "New York, NY"
    },
    {
        "id": 3,
        "profile": "https://www.example.com/company3",
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
                    <img className='flex align-middle ml-2 my-auto w-20 rounded-full ' src="https://source.unsplash.com/400x400/?company" alt="Company logo" />
                </div>
                <div className='mr-4 '>
                    <p className='font-semibold'>Healthify Inc</p>
                    <p className='text-gray-500 text-xs'>HealthCare</p>
                    <p className=' text-xs'>{["Emily Williams", "Michael Brown"].join(', ')}</p>
                    <p className=' text-xs'>London, UK</p>
                </div>
            </div>

     
    );
};



export default Company;