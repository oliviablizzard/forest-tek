import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';
import ProgramCard from '../../components/ProgramCard/ProgramCard';
import axios from 'axios'; // Make sure to import axios
import './GeoData.scss';

const provinceCoordinates = {
    'NB': [46.5653, -66.4619],
    'NS': [44.6820, -63.7443],
    'PEI': [46.5107, -63.4168],
    'NL': [53.1355, -57.6604],
    'ON': [51.2538, -85.3232],
};

const GeoData = ({ selectedProvince, searchQuery }) => {
    const mapRef = useRef(null);
    const [programs, setPrograms] = useState([]);

    // Function to fetch programs based on selected province
    const fetchPrograms = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/programs`, {
                params: {
                    province: selectedProvince,
                }
            });
            console.log('Fetched Programs:', response.data); // Log fetched programs
            setPrograms(response.data); // Update the state with fetched programs
        } catch (error) {
            console.error('Error fetching programs:', error);
        }
    };

    useEffect(() => {
        if (selectedProvince) {
            fetchPrograms(); // Fetch programs whenever the selected province changes
        }
    }, [selectedProvince]);

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map('map').setView([45.4215, -75.699], 6);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; OpenStreetMap contributors',
            }).addTo(mapRef.current);
        }

        // Clear existing markers
        mapRef.current.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
                mapRef.current.removeLayer(layer);
            }
        });

        programs
            .filter((program) => 
                program.province === selectedProvince && 
                program.program_name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .forEach((program) => {
                const coordinates = provinceCoordinates[program.province];
                if (coordinates) {
                    L.marker(coordinates)
                        .addTo(mapRef.current)
                        .bindPopup(
                            program.url
                                ? `<a href="${program.url}" target="_blank">${program.program_name}</a>`
                                : program.program_name
                        );
                }
            });

        return () => {
            mapRef.current.remove();
            mapRef.current = null;
        };
    }, [programs, selectedProvince, searchQuery]);

    return (
        <section className="dashboard__geo">
            <div className="geo-container">
                <div id="map" className="geo-container__map"></div>
                <div className="geo-container__data">
                    <div className="geo-container__results">
                        {programs
                            .filter((program) => 
                                program.province === selectedProvince && 
                                program.program_name.toLowerCase().includes(searchQuery.toLowerCase())
                            )
                            .slice(0, 5)
                            .map((program) => {
                                console.log('Rendering ProgramCard with:', program); // Log each program being rendered
                                return <ProgramCard key={program.id} program={program} />;
                            })}
                    </div>
                </div>
            </div>
        </section>
    );
};

GeoData.propTypes = {
    selectedProvince: PropTypes.string.isRequired,
    searchQuery: PropTypes.string.isRequired,
};

export default GeoData;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Map from '../../assets/images/canada-east.png';
// import ProgramCard from '../ProgramCard/ProgramCard';
// import './GeoData.scss';
// import axios from 'axios';

// const GeoData = ({ suggestions }) => {
//   const [randomPrograms, setRandomPrograms] = useState([]);

//   useEffect(() => {
//     const fetchRandomPrograms = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/programs/random');
//         setRandomPrograms(response.data); // Store the fetched programs
//       } catch (error) {
//         console.error('Error fetching programs:', error);
//       }
//     };

//     fetchRandomPrograms();
//   }, []);

//   return (
//     <section className="dashboard__geo">
//       <div className="geo-container">
//         <img src={Map} className="geo-container__map" alt="Map of Canada" />
//         <div className="geo-container__data">
//           <div className="geo-container__results">
//             {randomPrograms.length > 0 ? (
//               randomPrograms.map((program) => (
//                 <ProgramCard key={program.id} program={program} /> // Ensure program.id is unique
//               ))
//             ) : (
//               <NoResults suggestions={suggestions} />
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const NoResults = ({ suggestions }) => (
//   <div className="no-results">
//     <p>No programs found.</p>
//     {suggestions.length > 0 && (
//       <div className="no-results__suggestions">
//         <h5>Suggested Locations:</h5>
//         <ul>
//           {suggestions.map((suggestion, index) => (
//             <li key={index}>{suggestion}</li> // Ensure the index is unique, but consider using a unique ID if possible
//           ))}
//         </ul>
//       </div>
//     )}
//     <Link to="/programs/contact" className="no-results__contact-link">
//       <button className="no-results__contact-button">
//         Submit an additional resource to our site admin <strong>HERE</strong>
//       </button>
//     </Link>
//   </div>
// );

// export default GeoData;


