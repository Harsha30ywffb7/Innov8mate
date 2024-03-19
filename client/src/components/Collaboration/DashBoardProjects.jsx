// ProjectOwnerProjectsPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{project.title}</div>
            <p className="text-gray-700 text-base">{project.description}</p>
            <p className="text-gray-600 mt-2">Technologies: {project.technologies.join(', ')}</p>
            <p className="text-gray-600">Members Required: {project.membersRequired}</p>
        </div>
        <div className="px-6 py-4">
            <Link to={`/collaboration/projects/:id`} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">View Details</Link>
        </div>
    </div>
);

const DashBoardProjects = () => {
    // Dummy project data
    const projects = [
        { id: 1, title: "Project 1", description: "Description of Project 1", technologies: ["React", "Node.js"], membersRequired: 3 },
        { id: 2, title: "Project 2", description: "Description of Project 2", technologies: ["Angular", "Express.js"], membersRequired: 2 },
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {projects.map(project => (
                <div key={project.id} className="m-4">
                    <ProjectCard project={project} />
                </div>
            ))}
        </div>
    );
}

export default DashBoardProjects;
