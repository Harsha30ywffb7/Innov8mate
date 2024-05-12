import React from 'react';
import Company from './CompaniesList.jsx';
import { BiArrowToRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import useCompanies from '../../Utils/hooks/useCompaniesList.js';
const DashBoard = () => {
const allcompanies = useCompanies()

  return (
    <div className='mx-32 '>
      <div className='flex justify-center mt-8 '>
        <p className=' text-3xl font-semibold align-middle '>Start your Enterprenuership journey by explore more startups</p>
      </div>

      <div className='grid grid-cols-2 gap-10 mt-10'>
        <div className=''>
          <Link to='/funding/register'>
            <div className='mx-auto mb-7 rounded-xl cursor-pointer text-center  text-white w-52  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
              <p className='p-4 '>Need funding </p>
            </div>
          </Link>
          <p className='text-center my-4 text-xl font-semibold'>your Companies</p>
          <div className='rounded-lg border-2 border-solid border-slate-300 max-h-[300px] overflow-y-auto no-scrollbar'>
          {
              allcompanies.map((company)=>(
                <Link to={'company/'+ company._id}>
                  <Company key={company._id} company={company}/>
                </Link>
              ))
            }
          </div>
        </div>


        <div className=' '>
          <Link to='/funding/register'>
            <div className='mx-auto mb-7 rounded-xl cursor-pointer text-center  text-white w-52  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
              <p className='p-4 '>Explore More </p>
            </div>
          </Link>
          <p className='text-center my-4 text-xl font-semibold'>Explore companies</p>
          <div className='rounded-lg border-2 border-solid border-slate-300 max-h-[300px] overflow-y-auto  no-scrollbar'>
            {
              allcompanies.map((company)=>(
                <Link to={'company/'+ company._id}>
                  <Company key={company._id} company={company}/>
                </Link>
              ))
            }

          </div>
        </div>

      </div>

    </div>
  )
}

export default DashBoard;