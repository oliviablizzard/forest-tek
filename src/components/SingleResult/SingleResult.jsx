import React from 'react';

const SingleResult = ({ program }) => (
    <div className="result-item">
        <h4>{program.program_name} ({program.institution_name})</h4>
        <p>{program.location}</p>
    </div>
);

export default SingleResult;