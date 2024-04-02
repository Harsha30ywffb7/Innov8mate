import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { JobsApi } from '../../config/JobsApi';

const JobDescription = () => {
  const [job, setJob] = useState(null);
  const [applied, setApplied] = useState(false);
  const { id } = useParams();

  const fetchJob = async () => {
    const jobData = JobsApi[0].jobs.find(job => job.id === parseInt(id));
    setJob(jobData);
  };

  useEffect(() => {
    fetchJob();
  }, [id]);

  const handleApply = () => {
    setApplied(!applied);
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center">
          <img src={job.companyLogo} alt={`${job.companyName} Logo`} className="w-20 h-20 mr-4"/>
          <div>
            <h2 className="text-xl font-bold">{job.jobTitle} at {job.companyName}</h2>
            <p className="text-gray-800">{job.jobGeo}</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">Description:</h3>
          <div dangerouslySetInnerHTML={{ __html: job.jobDescription }} />
        </div>
        <div className='flex justify-center mt-4'>
          <button onClick={handleApply} className={`px-2 py-1 rounded-full ${applied ? 'bg-green-500' : 'bg-orange-500'} text-white`}>
            {applied ? 'Applied' : 'Apply to Job'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
