import React from 'react';
import { JobsApi } from '../../config/JobsApi';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';


function getObjectById(id) {
  for (let i = 0; i < JobsApi.length; i++) {
      if (JobsApi?.jobs[i]?.id === id) {
          const data = JobsApi?.jobs[i];
          break;
      }
  }
  console.log(data);
   // Return null if no object with the specified ID is found
}

const JobDescription = () => {

  // const [job, setJob] = useState(null);
   const { resId } = useParams();

  // useEffect(() => {
  //   const foundJob = JobsApi.jobs.find(job => job.id === parseInt(resId));
  //   setJob(foundJob);
  // }, [resId]); // Dependency array ensures useEffect runs only when resId changes.

  console.log(getObjectById(resId));

  console.log(job);
 

  return (
    <div>
      
    </div>
  )
}

export default JobDescription