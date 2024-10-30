import React, { useState, useEffect } from 'react';
import api from '../utils/api';

export default function ProgramsPage() {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        api.get('/programs')
            .then((response) => setPrograms(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            {programs.map(program => (
                <ProgramList key={program.id} program={program} />
            ))}
        </div>
    );
}