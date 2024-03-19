import React from 'react'
import { Link } from 'react-router-dom';

const DescriptionProject = () => {
    // Dummy project data
    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "A platform for buying and selling products online.",
            longDescription: "The E-commerce Platform is aimed at providing users with an intuitive and efficient way to buy and sell products online. Users can browse through a wide range of categories, add products to their cart, and securely checkout using various payment methods. Sellers can easily list their products, manage inventory, and process orders. The platform also includes features such as product reviews, ratings, and recommendations to enhance the shopping experience. Built using modern web technologies like React, Node.js, and MongoDB.",
            technologies: ["React", "Node.js", "MongoDB"],
            membersRequired: 3
        },
        {
            id: 2,
            title: "Social Networking App",
            description: "A social networking application for connecting people.",
            longDescription: "The Social Networking App is designed to connect people from all around the world. Users can create profiles, share posts, photos, and videos, and interact with friends and followers. The app includes features such as news feeds, messaging, notifications, and user authentication. It also provides a platform for businesses to promote their products and services. Built using modern web technologies like Angular, Express.js, and PostgreSQL.",
            technologies: ["Angular", "Express.js", "PostgreSQL"],
            membersRequired: 2
        },
    ];

    // Find the project based on ID
    // const project = projects.find(project => project.id === parseInt(match.params.id));

    // if (!project) {
    //     return <div>Project not found</div>;
    // }

    return (
        <div className="max-w-xl mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">{projects[0].title}</h1>
            <p className="text-gray-700">{projects[0].description}</p>
            <div className="mt-4">
                <h2 className="text-xl font-bold mb-2">Long Description</h2>
                <p className="text-gray-700">{projects[0].longDescription}</p>
            </div>
            <div className="mt-4">
                <p className="text-black font-medium text-xl">Technologies </p>
                <p className='mt-2 '>{projects[0].technologies.join(', ')}</p>
                <p className="text-black font-medium text-xl">Members Required</p>
                <p className='mt-2'> {projects[0].membersRequired}</p>
            </div>
            <div className='flex '>
                
                <Link to="/collaboration/" className="text-blue-500 block mt-4 mr-20">Back to Projects</Link>
                <button className='rounded-lg px-2 py-2 bg-orange-500 mt-3'>Collaborate</button>
            </div>
        </div>
    );
}

export default DescriptionProject;