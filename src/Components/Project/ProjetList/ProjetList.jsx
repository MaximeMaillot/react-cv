import React from 'react';
import "./ProjetList.scss";
import Projet from '../Project/Project';
import { useSelector } from 'react-redux';


const ProjetList = () => {
    const projects = useSelector((state) => state.data.projects);

    return (
        <div className='ProjetList'>
            {projects.map((project) => {
                <Projet project={project} />
            })}
        </div>
    );
};

export default ProjetList;