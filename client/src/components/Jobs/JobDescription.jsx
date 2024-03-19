import React from 'react';
import { JobsApi } from '../../config/JobsApi';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

let data ={};
const  getObjectById=(id)=> {
 // console.log(JobsApi);
  for (let i = 0; i < JobsApi.length; i++) {
    if (JobsApi[0].jobs[i].id === id) {
      data = JobsApi[0].jobs[i];
      break;
    }
  }
  console.log(data);
  // Return null if no object with the specified ID is found
}

const JobDescription = () => {
  // const [job, setJob] = useState(null);
   let  resId  = useParams();
   console.log(useParams);
   console.log(resId);
  return (
    <div>
      <button onClick={()=>getObjectById(resId)} className='rounded-lg bg-slate-600 py-2 px-2  '>clickme</button>
    </div>
  )
}

export default JobDescription

 // useEffect(() => {
  //   const foundJob = JobsApi.jobs.find(job => job.id === parseInt(resId));
  //   setJob(foundJob);
  // }, [resId]); // Dependency array ensures useEffect runs only when resId changes.

  //console.log(getObjectById(resId));

 // console.log(job);
