import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Project.scss";

const Project = ({ project }) => {

    const navigate = useNavigate();

    return (
        <div className='Project'>
            <div className='Project-card'>
                <div className='Project-title'><span>{project.name}</span><span>Github FontAwesome</span></div>
                <img className='Project-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Solid_white_bordered.svg/2048px-Solid_white_bordered.svg.png' alt="projet"></img>
                <div className='Project-description'>Description</div>
                <button className='Project-button' onClick={() => { navigate("/projet/" + project.id) }}>Show more</button>
            </div>
        </div>
    );
};

export default Project;