import React, { useEffect, useState } from 'react';
import './Data.scss';

const Data = () => {
    const apiUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";
    const [organizations, setOrganizations] = useState([]);
    const [programs, setPrograms] = useState([]);
    const [tools, setTools] = useState([]);

    // Fetch data function
    const fetchData = async (endpoint, setData) => {
        try {
            const response = await fetch(`${apiUrl}/${endpoint}`);
            const data = await response.json();
            setData(data.slice(0, 5)); // Limit to 5 items for preview
        } catch (error) {
            console.error(`Error fetching ${endpoint}:`, error);
        }
    };

    useEffect(() => {
        fetchData('organizations', setOrganizations);
        fetchData('programs', setPrograms);
        fetchData('tools', setTools);
    }, []);

    return (
        <div className="data-page">
            <h1 className="data-page__title">Data Overview</h1>

            {/* Organizations Carousel */}
            <section className="data-page__section">
                <h2 className="data-page__section-title">Organizations</h2>
                <div className="carousel">
                    {organizations.map(org => (
                        <div key={org.id} className="carousel__card">
                            <h3>{org.organization}</h3>
                            <p>Acronym: {org.acronym}</p>
                            <p>Contact: {org.contactEmail}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Programs Carousel */}
            <section className="data-page__section">
                <h2 className="data-page__section-title">Programs</h2>
                <div className="carousel">
                    {programs.map(program => (
                        <div key={program.id} className="carousel__card">
                            <h3>{program.name}</h3>
                            <p>Location: {program.location}</p>
                            <p>Contact: {program.contactEmail}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tools Carousel */}
            <section className="data-page__section">
                <h2 className="data-page__section-title">Tools</h2>
                <div className="carousel">
                    {tools.map(tool => (
                        <div key={tool.id} className="carousel__card">
                            <h3>{tool.toolName}</h3>
                            <p>Type: {tool.type}</p>
                            <p>Level: {tool.level}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Data;