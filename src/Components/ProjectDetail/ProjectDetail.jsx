import React from 'react';
import "./ProjectDetail.scss";

const ProjectDetail = ({ project }) => {
    return (
        <div>
            <div>{project.id} | {project.name}</div>
        </div>
    );
};

export default ProjectDetail;