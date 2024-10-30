import React, { useState, useEffect } from 'react';
import axios from '../../utils/api';
import { Link } from 'react-router-dom';
import './ProgramsPage.scss';
import DefaultImage from '../../assets/images/default_card.png';

const ProgramsPage = () => {
    const [programs, setPrograms] = useState([]);
    const [province, setProvince] = useState('');

    const fetchPrograms = async () => {
        try {
            const response = await axios.get('/programs', {
                params: { province: province || undefined },
            });
            setPrograms(response.data);
        } catch (error) {
            console.error("Error fetching programs:", error);
        }
    };

    useEffect(() => {
        fetchPrograms();
    }, []);

    useEffect(() => {
        fetchPrograms();
    }, [province]);

    return (
        <div>
            <h1>Programs</h1>

            <label htmlFor="province-select">Filter by Province:</label>
            <select
                id="province-select"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
            >
                <option value="">All Provinces</option>
                <option value="NB">New Brunswick</option>
                <option value="NS">Nova Scotia</option>
                <option value="NL">Newfoundland and Labrador</option>
                <option value="PEI">Prince Edward Island</option>
                <option value="ON">Ontario</option>
            </select>

            <div className="program-cards">
                {programs.map((program) => (
                    <Link
                        key={program.id}
                        to={program.url}
                        className="program-card"
                        style={{ 
                            backgroundImage: `url(${program.image || DefaultImage})`
                        }}
                    >
                        <img src={program.logo} alt={`${program.program_name} logo`} />
                        <h3>{program.program_name}</h3>
                        <p>{program.institution_name}</p>
                        <p>{program.program_level}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProgramsPage;