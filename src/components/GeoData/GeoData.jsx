import React, { useEffect } from 'react';
import L from 'leaflet';
import ProgramCard from '../../components/ProgramCard/ProgramCard';
import './GeoData.scss';

const GeoData = ({ randomPrograms }) => {
  useEffect(() => {
    // Initialize the map with a center point and zoom level
    const map = L.map('map').setView([45.4215, -75.699], 6); // Centered on Canada East

    // Add OpenStreetMap tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Function to get coordinates based on province (for demo purposes)
    const getCoordinatesByProvince = (province) => {
      const provinceCoordinates = {
        'Ontario': [51.2538, -85.3232],
        'Quebec': [52.9399, -73.5491],
        'New Brunswick': [46.5653, -66.4619],
        'Nova Scotia': [44.6820, -63.7443],
        'Manitoba': [53.7609, -98.8139],
        'British Columbia': [53.7267, -127.6476],
        'Alberta': [53.9333, -116.5765],
        'Saskatchewan': [52.9399, -106.4509],
        // Add more provinces as needed
      };
      return provinceCoordinates[province];
    };

    // Add markers for each program
    randomPrograms.forEach((program) => {
      const coordinates = getCoordinatesByProvince(program.province);
      if (coordinates) {
        L.marker(coordinates)
          .addTo(map)
          .bindPopup(`<a href="${program.url}" target="_blank">${program.program_name}</a>`);
      }
    });

    // Cleanup function to remove map on component unmount
    return () => {
      map.remove();
    };
  }, [randomPrograms]);

  return (
    <section className="dashboard__geo">
      <div className="geo-container">
        <div id="map" className="geo-container__map"></div> {/* Leaflet Map */}
        <div className="geo-container__data">
          <div className="geo-container__results">
            {randomPrograms.length > 0 &&
              randomPrograms.slice(0, 5).map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
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


