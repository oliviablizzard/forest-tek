import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import SearchBar from '../../components/SearchBar/SearchBar';
import Browse from '../../components/Browse/Browse';
import Header from '../../components/Header/Header';
import GeoData from '../../components/GeoData/GeoData';
import axios from 'axios';

const Dashboard = () => {
    const [randomPrograms, setRandomPrograms] = useState([]); 
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedProvince, setSelectedProvince] = useState('NS'); 
    const [searchQuery, setSearchQuery] = useState(""); // Add state for search query

    useEffect(() => {
        const fetchRandomPrograms = async () => {
            try {
                const response = await axios.get('http://localhost:8080/programs/random');
                setRandomPrograms(response.data);
            } catch (error) {
                console.error('Error fetching random programs:', error);
            }
        };

        fetchRandomPrograms();
    }, []);

    const updateResults = (newResults) => {
        setRandomPrograms(newResults);
    };

    const handleProvinceChange = (province) => {
        setSelectedProvince(province);
    };

    const handleSearchQueryChange = (query) => {
        setSearchQuery(query);
    };

    return (
        <div className="dashboard">
            <Header />
            <SearchBar 
                updateResults={updateResults} 
                setErrorMessage={setErrorMessage} 
                onProvinceChange={handleProvinceChange}
                onSearchQueryChange={handleSearchQueryChange} // Pass down the search query change handler
            />
            <GeoData 
                randomPrograms={randomPrograms} 
                selectedProvince={selectedProvince} 
                searchQuery={searchQuery} // Pass search query
                errorMessage={errorMessage} 
            />
            <Browse />
        </div>
    );
};

export default Dashboard;


// import React, { useEffect, useState } from "react";
// import "./Dashboard.scss";
// import SearchBar from '../../components/SearchBar/SearchBar';
// import Browse from '../../components/Browse/Browse';
// import Header from '../../components/Header/Header';
// import GeoData from '../../components/GeoData/GeoData'; // Import the new GeoData component
// import axios from 'axios';

// const Dashboard = () => {
//     const [randomPrograms, setRandomPrograms] = useState([]); // For storing random programs
//     const [suggestions, setSuggestions] = useState([]);
//     const [errorMessage, setErrorMessage] = useState('');

//     // Fetch random programs
//     useEffect(() => {
//         const fetchRandomPrograms = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/programs/random');
//                 setRandomPrograms(response.data); // Store the fetched random programs
//             } catch (error) {
//                 console.error('Error fetching random programs:', error);
//             }
//         };

//         fetchRandomPrograms();
//     }, []); // Empty dependency array to run only on mount

//     const updateResults = (newResults, newSuggestions) => {
//         setSuggestions(newSuggestions);
//         // Assuming newResults might be a different context, adjust as needed
//     };

//     return (
//         <div className="dashboard">
//             <Header />
//             <SearchBar onUpdateResults={updateResults} setErrorMessage={setErrorMessage} />
//             <GeoData randomPrograms={randomPrograms} suggestions={suggestions} errorMessage={errorMessage} /> {/* Pass randomPrograms */}
//             <Browse />
//         </div>
//     );
// };

// export default Dashboard;





// import React, { useState } from "react";
// import "./Dashboard.scss";
// import SearchBar from '../../components/SearchBar/SearchBar';
// import Browse from '../../components/Browse/Browse';
// import Header from '../../components/Header/Header';
// import { Link } from 'react-router-dom';
// import GeoData from '../../components/GeoData/GeoData'; // Import the new GeoData component

// const Dashboard = () => {
//     const [results, setResults] = useState([]);
//     const [suggestions, setSuggestions] = useState([]);
//     const [errorMessage, setErrorMessage] = useState('');

//     const updateResults = (newResults, newSuggestions) => {
//         setResults(newResults);
//         setSuggestions(newSuggestions);
//     };

//     return (
//         <div className="dashboard">
//             <Header />
//             <SearchBar onUpdateResults={updateResults} setErrorMessage={setErrorMessage} />
//             <GeoData results={results} suggestions={suggestions} errorMessage={errorMessage} /> {/* Use GeoData here */}
//             <Browse />
//         </div>
//     );
// };


// export default Dashboard;