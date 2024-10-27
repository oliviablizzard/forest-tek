import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Map from '../../assets/images/canada-east.png';
import ProgramCard from '../ProgramCard/ProgramCard';
import './GeoData.scss';
import axios from 'axios';

const GeoData = ({ suggestions }) => {
  const [randomPrograms, setRandomPrograms] = useState([]);

  useEffect(() => {
    const fetchRandomPrograms = async () => {
      try {
        const response = await axios.get('http://localhost:8080/programs/random');
        setRandomPrograms(response.data); // Store the fetched programs
      } catch (error) {
        console.error('Error fetching programs:', error);
      }
    };

    fetchRandomPrograms();
  }, []);

  return (
    <section className="dashboard__geo">
      <div className="geo-container">
        <img src={Map} className="geo-container__map" alt="Map of Canada" />
        <div className="geo-container__data">
          <div className="geo-container__results">
            {randomPrograms.length > 0 ? (
              randomPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} /> // Ensure program.id is unique
              ))
            ) : (
              <NoResults suggestions={suggestions} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const NoResults = ({ suggestions }) => (
  <div className="no-results">
    <p>No programs found.</p>
    {suggestions.length > 0 && (
      <div className="no-results__suggestions">
        <h5>Suggested Locations:</h5>
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li> // Ensure the index is unique, but consider using a unique ID if possible
          ))}
        </ul>
      </div>
    )}
    <Link to="/programs/contact" className="no-results__contact-link">
      <button className="no-results__contact-button">
        Submit an additional resource to our site admin <strong>HERE</strong>
      </button>
    </Link>
  </div>
);

export default GeoData;




// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Map from '../../assets/images/map-canada.svg';
// import ProgramCard from '../ProgramCard/ProgramCard';
// import './GeoData.scss';
// import axios from 'axios';

// const GeoData = ({ suggestions }) => {
//   const [randomPrograms, setRandomPrograms] = useState([]);

//   useEffect(() => {
//     const fetchRandomPrograms = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/programs/random');
//             // handle the response
//         } catch (error) {
//             console.error('Error fetching programs:', error);
//         }
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
//               randomPrograms.map((program, index) => (
//                 <ProgramCard key={index} program={program} /> // Render ProgramCard for each random program
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
//             <li key={index}>{suggestion}</li>
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