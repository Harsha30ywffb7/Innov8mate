import React from 'react';
import { Link } from 'react-router-dom';
import projects from './projects';
import CollabHeader from './CollabHeader';
const ProjectListPage = ({ projects }) => {
    return (
        <>
            <CollabHeader/>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map(project => (
                        <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                                <p className="text-gray-600 mb-4 line-clamp-5">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <Link to={`/collaboration/projects/${project.id}`} className="text-blue-500 hover:text-blue-600 font-semibold">
                                        View Details
                                    </Link>
                                    <span className="text-sm text-gray-500">Members Needed: {project.membersNeeded}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const DashBoardProjects = () => {
    return (<ProjectListPage projects={projects} />)
}

export default DashBoardProjects;


