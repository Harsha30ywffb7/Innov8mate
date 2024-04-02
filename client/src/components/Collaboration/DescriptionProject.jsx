import React from 'react';

const Description = ({ project }) => {
    return (
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">{project.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Project Details</h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <div>
                  <p className="text-sm text-gray-600">Members Needed:</p>
                  <p className="text-lg font-semibold text-gray-800">{project.membersNeeded}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location:</p>
                  <p className="text-lg font-semibold text-gray-800">{project.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Duration:</p>
                  <p className="text-lg font-semibold text-gray-800">{project.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Posted By:</p>
                  <p className="text-lg font-semibold text-gray-800">{project.postedBy}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Posted At:</p>
                  <p className="text-lg font-semibold text-gray-800">{project.createdAt}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Deadline:</p>
                  <p className="text-lg font-semibold text-gray-800">{project.deadline}</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
              <ul className="list-disc pl-4">
                {project.techStack.map((tech, index) => (
                  <li key={index} className="text-lg  font-light text-gray-800">{tech}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
            <p className="text-lg font-light text-gray-700">{project.description}</p>
          </div>
        </div>
      </div>
    );
  };
  
  

const DescriptionProject = () => {
  const project = {
    "id": 4,
    "title": "Blockchain-Based Voting System",
    "description": "Help us develop a secure and transparent voting system using blockchain technology. The system will ensure the integrity and confidentiality of votes while providing a decentralized platform for voting. We need developers proficient in blockchain development, cryptography, and smart contract programming.",
    "membersNeeded": 4,
    "techStack": ["Solidity", "Web3.js", "Truffle", "Cryptography"],
    "location": "Remote",
    "duration": "4 months",
    "postedBy": "Blockchain Innovations Ltd",
    "createdAt": "2024-04-18T11:20:00Z",
    "deadline": "2024-05-18T23:59:59Z"
  };

  return <Description project={project} />;
};

export default DescriptionProject;
