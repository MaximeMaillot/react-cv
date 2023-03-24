import React from 'react';
import "./ProjectList.scss";
import Project from '../Project/Project';
import { useSelector } from 'react-redux';


const ProjectList = () => {
    const projects = useSelector((state) => state.data.projects);

    return (
        <div className='ProjectList'>
            {projects.map((project) => {
                return project.active ? <Project project={project} key={project.id} /> : undefined
            })}
        </div>
    );
};

export default ProjectList;