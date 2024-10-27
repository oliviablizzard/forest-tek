import React from 'react';
import './ProgramCard.scss';

const ProgramCard = ({ program }) => (
    <div className="program-card">
        <h3 className="program-card__name">{program.program_name}</h3>
        <p className="program-card__institution">{program.institution_name}</p>
        <p className="program-card__level">{program.program_level}</p>
    </div>
);

export default ProgramCard;