import React from 'react';
import ExperienceList from '../ExperiencesList/ExperienceList';
import FormationList from '../FormationList/FormationList';
import "./ProfessionalInfo.scss"
import Separator from '../../Separator/Separator';

const ProfessionalInfo = () => {
    return (
        <div className='ProfessionalInfo'>
            <ExperienceList />
            <Separator />
            <FormationList />
        </div>
    );
};

export default ProfessionalInfo;