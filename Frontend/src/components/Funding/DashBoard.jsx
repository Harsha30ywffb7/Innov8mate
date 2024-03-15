import React from 'react';
import Company from './CompaniesList.jsx';
import { BiArrowToRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const DashBoard = () => {
  return (
    <div className='mx-32 '>

      <div className='flex justify-center mt-8 '>
        <p className=' text-3xl font-semibold align-middle '>Start your Enterprenuership journey by explore more startups</p>
      </div>

      <div className='flex justify-between mt-4 gap-5'>

        <Link to='/funding/register'>
            <div className='w-6/12'>
              <div className='mx-auto mb-7 rounded-xl cursor-pointer text-center  text-white w-52  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <p className='p-4 '>Need funding </p>
              </div>
              <div className='rounded-lg border-2 border-solid border-slate-500'>
                <Company/>
              </div>
            </div>
        </Link>


        <div className='w-6/12 '>
          <div className='mx-auto mb-7 rounded-xl cursor-pointer text-center  text-white w-52  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' >
            <p className='p-4'>Explore to Invest</p>
          </div>
          <div className='rounded-lg border-2 border-solid border-slate-500'>
            <Company/>
          </div>
        </div>

      </div>

    </div>
  )
}

export default DashBoard;