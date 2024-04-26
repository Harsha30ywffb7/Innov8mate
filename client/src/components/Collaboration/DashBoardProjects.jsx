import React, { useEffect, useState } from 'react';
import useProjectList from '../../Utils/hooks/useProjectList';
import CollabHeader from './CollabHeader';
import ProjectCard from './ProjectCard';

const ProjectListPage = () => {
    const allProjects = useProjectList();
    return (
        <>
            <CollabHeader />
            <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProjects.map(eachProject => (
                    <ProjectCard key={eachProject._id}project={eachProject}/>
                ))}
            </div>
        </div>
        </>
    );
};


const DashBoardProjects = () => {
    return <ProjectListPage />;
}

export default DashBoardProjects;

