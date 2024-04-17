import React from 'react'
import { Link } from "react-router-dom";
const ProjectCard = ({project}) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex justify-between items-center">
                    <Link to={`/collaboration/projects/${project._id}`} className="text-blue-500 hover:text-blue-600 font-semibold">
                        View Details
                    </Link>
                    <span className="text-sm text-gray-500">Members Needed: {project.membersNeeded}</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard