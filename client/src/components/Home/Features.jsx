import React from 'react'; 
import { Link } from 'react-router-dom';

const Opportunities = ({Image, heading, tagline, link, btnName}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div className="flex flex-wrap  max-w-sm bg-white rounded-lg shadow-md">
        <img src={Image} alt="feature" className="w-full h-auto" />
        <div className="p-4 items-center">
          <p className="text-lg font-bold text-gray-800">{heading}</p>
          <p className="text-slate-600 text-center text-sm font-semibold ">{tagline}</p>
          <Link to={link}>
            <button className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105">
              {btnName}
            </button>
          </Link>
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
          {...eachFeature}
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
    tagline: 'Show case your skills by participating hackathons',
    btnName: 'Participate',
    link:'/hackathons'
  },
  {
    Image: 'https://source.unsplash.com/400x400/?Job Hiring',
    heading: 'Hiring',
    tagline: 'Find the Job matches your skills get hired',
    btnName: 'Explore',
    link:'/jobs'
  },
  {
    Image: 'https://source.unsplash.com/400x400/?ideas',
    heading: 'Ideas Submission',
    tagline: 'Elevate your Prototypes for funding',
    btnName: 'Explore',
    link:'/pitchideas'
  },
  {
    Image: 'https://source.unsplash.com/400x400/?collaboration',
    heading: 'Project Collaborations',
    tagline: 'Collaborate with people create projects',
    btnName: 'Collaborate',
    link:'/collaboration'
  },
  {
    Image: 'https://source.unsplash.com/400x400/?funding',
    heading: 'Funding',
    tagline: 'Be an Investor and founder',
    btnName: 'Invest',
    link:'/funding'
  },
];
