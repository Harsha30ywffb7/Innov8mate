import React from 'react';
import { Link } from 'react-router-dom';
import { JobsApi } from '../../config/JobsApi';
import JobHeader from './JobHeader';

// const fetchApi = async () => {
//   const response = await fetch('https://jobicy.com/api/v2/remote-jobs');
//   const json = await response.json();
//   console.log(json);
// }

const JobCard = ({id, companyLogo, companyName, jobTitle, jobType, jobIndustry, jobLevel, jobGeo }) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 m-4 flex">
        <img src={companyLogo} alt={companyName} className="w-20 h-20 rounded-full mr-4" />
        <div className='w-4/12'>
          <h2 className="text-xl font-bold mb-2">{companyName}</h2>
          <p className="text-lg font-semibold mb-2">{jobTitle}</p>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <p className="text-gray-700 mb-2"><span className="font-semibold">Type:</span> {jobType.join(', ')}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Industry:</span> {jobIndustry.join(', ')}</p>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-gray-700 mb-2"><span className="font-semibold">Level:</span> {jobLevel}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Location:</span> {jobGeo}</p>
            </div>
          </div>
        </div>
        <div className=''>
          <Link to={`/jobs/job/${id}`}>
            <button className='text-white bg-orange-500 px-2 py-2 rounded-md ml-96 mt-10'>View Job</button>
          </Link>
        </div>
      </div>
    </div>
  );
};


const JobsPage = () => {
  return (
    <div className=''>
      <JobHeader />
      <div className='mx-20'>
        {
          JobsApi[0].jobs.map((eachJob, index) => (
            <JobCard key={index} {...eachJob} />
          ))
        }
      </div>
    </div>
  );
};

export default JobsPage;