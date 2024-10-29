import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link if you're using react-router
import './ProgramCard.scss';

const ProgramCard = ({ program, onMouseEnter, onMouseLeave }) => (
    <Link 
        to={program.url} // Use to for internal links or as href for external
        className="program-card"
        data-province={program.province}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        target="_blank" // This will open the link in a new tab
        rel="noopener noreferrer" // Security feature for opening links
    >
        <h3 className="program-card__name">{program.program_name}</h3>
        <p className="program-card__institution">{program.institution_name}</p>
        <p className="program-card__level">{program.program_level}</p>
    </Link>
);

// Prop types for validation
ProgramCard.propTypes = {
    program: PropTypes.shape({
        id: PropTypes.number.isRequired,
        program_name: PropTypes.string.isRequired,
        institution_name: PropTypes.string.isRequired,
        program_level: PropTypes.string.isRequired,
        province: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired, // Assuming url is always present
    }).isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
};

export default ProgramCard;