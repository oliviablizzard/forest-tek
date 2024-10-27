import React, { useEffect, useState } from 'react';
import ProgramCard from './ProgramCard';
import './MainComponent.scss'; // Ensure to include your styles
import './MapStyles.scss'; // Include your SVG styles

const MainComponent = () => {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await fetch('/api/programs/random');
                const data = await response.json();
                setPrograms(data);
            } catch (error) {
                console.error('Error fetching programs:', error);
            }
        };

        fetchPrograms();
    }, []);

    const handleMouseEnter = (event) => {
        const provinceId = event.currentTarget.getAttribute('data-province');
        const province = document.getElementById(provinceId);
        if (province) province.classList.add('hovered'); // Add hover effect
    };

    const handleMouseLeave = (event) => {
        const provinceId = event.currentTarget.getAttribute('data-province');
        const province = document.getElementById(provinceId);
        if (province) province.classList.remove('hovered'); // Remove hover effect
    };

    return (
        <div className="main-component">
            <div className="program-cards">
                {programs.map((program) => (
                    <ProgramCard
                        key={program.program_name} // Assuming program_name is unique
                        program={program}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                ))}
            </div>

            <svg id="east-coast-map" xmlns="http://www.w3.org/2000/svg" viewBox="...">
                <path id="nova-scotia" className="province" d="..." />
                <path id="new-brunswick" className="province" d="..." />
                <path id="prince-edward-island" className="province" d="..." />
                {/* Add other provinces */}
            </svg>
        </div>
    );
};

export default MainComponent;