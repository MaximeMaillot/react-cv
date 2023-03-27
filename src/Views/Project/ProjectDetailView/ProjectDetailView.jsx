import React from 'react';
import ProjectDetail from '../../../Components/ProjectDetail/ProjectDetail';
import "./ProjectDetailView.scss";

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProjectDetailView = () => {
    const { projectId } = useParams();
    const project = useSelector((state) => state.data.projects.find((project) => {
        return project.id === parseInt(projectId)
    }));

    return (
        <div>
            <ProjectDetail project={project} />
        </div>
    );
};


export default ProjectDetailView;