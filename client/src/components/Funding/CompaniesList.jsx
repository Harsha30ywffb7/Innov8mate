import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import useCompanies from '../../Utils/hooks/useCompaniesList';

//{ profile, title, founders, sector, location}
const Company = ({company}) => {

    // const allcompanies = useCompanies();

    // const company = allcompanies[0]
    console.log(company)
    if(!company) return null

    const {companyName, description , founder , location , sector, sharesDiluted} = company

    return (
        <div className='my-4 rounded-lg mx-auto w-[28rem] border-2 border-slate-200 border-solid flex justify-around  shadow-md'>
            <div>
                <img className='flex  ml-2 mt-8 w-20 rounded-full ' src="https://source.unsplash.com/400x400/?company" alt="Company logo" />
            </div>
            <div className='mr-16 p-5'>
                <p className='text-md font-semibold'>{companyName}</p>
                <p className='text-gray-500 text-sm mb-1'>{sector}</p>
                <p className=' text-xs'>{founder.name}</p>
                <p className=' text-xs'>{location}</p>
            </div>
        </div>
    );
};



export default Company;