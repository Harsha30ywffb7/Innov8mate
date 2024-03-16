// import React from 'react'
// import './styles/features.css'
// const Opportunities = (props) => {
//     return (
//       <div className="feature-card">
//         <img src={props.Image} alt="feature" />
//         <div className="content">
//           <p className="heading">{props.heading}</p>
//           <p className="tagline">{props.tagline}</p>
//           <button>{props.btnName}</button>
//         </div>
//       </div>
//     );
//   };
  
//   const Features = () => {
//     return (
//       <div className="features-container">
//         {features.map((eachFeature, index) => (
//           <Opportunities
//             key={index}
//             Image={eachFeature.Image}
//             heading={eachFeature.heading}
//             tagline={eachFeature.tagline}
//             btnName={eachFeature.btnName}
//           />
//         ))}
//       </div>
//     );
//   };
  

// const features = [
//     {
//         Image: "https://source.unsplash.com/400x400/?Hackathons",
//         heading: "Hackathons",
//         tagline: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
//         btnName: "Participate"
//     },
//     {
//         Image: "https://source.unsplash.com/400x400/?Job Hiring",
//         heading: "Hiring",
//         tagline: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
//         btnName: "Explore"
//     },
//     {
//         Image: "https://source.unsplash.com/400x400/?ideas",
//         heading: "Ideas Submission",
//         tagline: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
//         btnName: "Explore"
//     },
//     {
//         Image: "https://source.unsplash.com/400x400/?collaboration",
//         heading: "Project Collaborations",
//         tagline: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
//         btnName: "Collaborate"
//     },
//     {
//         Image: "https://source.unsplash.com/400x400/?funding",
//         heading: "Funding",
//         tagline: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
//         btnName: "Invest"
//     }
// ];

// export default Features;

import React from 'react'; 
import { useState } from 'react';

const Opportunities = (props) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div className="flex flex-wrap  max-w-sm bg-white rounded-lg shadow-md">
        <img src={props.Image} alt="feature" className="w-full h-auto" />
        <div className="p-4">
          <p className="text-lg font-bold text-gray-800">{props.heading}</p>
          <p className="text-gray-600">{props.tagline}</p>
          <button className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105">
            {props.btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="flex flex-wrap justify-center mx-20 ">
      {features.map((eachFeature, index) => (
        <Opportunities
          key={index}
          Image={eachFeature.Image}
          heading={eachFeature.heading}
          tagline={eachFeature.tagline}
          btnName={eachFeature.btnName}
        />
      ))}
    </div>
  );
};

export default Features;

const features = [
  {
    Image: 'https://source.unsplash.com/400x400/?Hackathons',
    heading: 'Hackathons',
    tagline: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
    btnName: 'Participate',
  },
  {
    Image: 'https://source.unsplash.com/400x400/?Job Hiring',
    heading: 'Hiring',
    tagline: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
    btnName: 'Explore',
  },
  {
    Image: 'https://source.unsplash.com/400x400/?ideas',
    heading: 'Ideas Submission',
    tagline: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
    btnName: 'Explore',
  },
  {
    Image: 'https://source.unsplash.com/400x400/?collaboration',
    heading: 'Project Collaborations',
    tagline: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
    btnName: 'Collaborate',
  },
  {
    Image: 'https://source.unsplash.com/400x400/?funding',
    heading: 'Funding',
    tagline: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
    btnName: 'Invest',
  },
];
