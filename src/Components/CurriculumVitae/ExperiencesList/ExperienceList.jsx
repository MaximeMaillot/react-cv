import React from 'react';
import "./ExperienceList.scss"
import Experience from "../Experience/Experience"
import Title from '../Title/Title';
import { useSelector } from 'react-redux';

const ExperienceList = () => {
    const experiences = useSelector((state) => state.data.experiences);
    return (
        <>
            <Title text='Expériences Professionnelles' />
            <div className='ExperienceList'>
                {experiences.map((experience) => {
                    return experience.active ? <Experience experience={experience} key={experience.id} /> : undefined
                })}
            </div>
        </>
    );
};

export default ExperienceList;