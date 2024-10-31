import React, { useState, useEffect } from 'react';
import axios from '../../utils/api';
import { Link } from 'react-router-dom';
import './ProgramsPage.scss';
import DefaultImage from '../../assets/images/default_card.png';
import Map from '../../components/Map/Map.jsx';

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
        <div className="page">
            <h1 className="page__title">Programs</h1>

            <div className="page__filter">
                <label htmlFor="province-select" className="page__filter-label">
                    Filter by Province:
                </label>
                <select
                    id="province-select"
                    className="page__filter-select"
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
            </div>

            <div className="page__cards">
                {programs.map((program) => (
                    <Link
                        key={program.id}
                        to={program.url}
                        className="page__card page__card--hover"
                        style={{ backgroundImage: `url(${program.image || DefaultImage})` }}
                    >
                        <div className="card">
                            <h3 className="card__content-title">{program.program_name}</h3>
                            <div className="card__logo">
                                <img
                                    src={program.logo}
                                    alt={`${program.program_name} logo`}
                                    className="card__logo-icon"
                                />
                            </div>
                            <p className="card__content-text">{program.institution_name}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div>
                <Map />
            </div>
        </div>
    );
};

export default ProgramsPage;