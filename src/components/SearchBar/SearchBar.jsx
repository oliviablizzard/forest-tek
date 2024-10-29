import React, { useState } from "react";
import "./SearchBar.scss";
import axios from "axios";

const provinces = ["NB", "NS", "PEI", "NL", "ON"];

const SearchBar = ({ onUpdateResults, setErrorMessage, onProvinceChange }) => {
    const [selectedProvince, setSelectedProvince] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = async () => {
        setErrorMessage(""); // Clear any previous errors
        try {
            const response = await axios.get(`http://localhost:8080/programs`, {
                params: {
                    province: selectedProvince,
                    query: searchQuery
                }
            });
            onUpdateResults(response.data.results || []); // Pass full result list to be handled by display
        } catch (error) {
            handleError(error);
        }
    };

    const handleError = (error) => {
        if (error.response && error.response.status === 404) {
            onUpdateResults([]); // No results found
            setErrorMessage("No programs found for your search.");
        } else {
            setErrorMessage("An error occurred while searching. Please try again.");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSearch();
    };

    const handleProvinceChange = (e) => {
        const province = e.target.value;
        setSelectedProvince(province);
        onProvinceChange(province); // Notify parent of province change
    };

    return (
        <div className="search-bar" data-testid="header-search">
            <div className="search-bar__content">
                {/* Location Filter */}
                <div className="search-bar__input-container">
                    <label htmlFor="province-select" className="search-bar__label">Location</label>
                    <select
                        id="province-select"
                        className="search-bar__select"
                        value={selectedProvince}
                        onChange={handleProvinceChange} // Use updated handler
                    >
                        <option value="">Select location</option>
                        {provinces.map((province) => (
                            <option key={province} value={province}>{province}</option>
                        ))}
                    </select>
                </div>

                {/* Search Bar */}
                <div className="search-bar__input-container">
                    <input
                        type="text"
                        className="search-bar__input"
                        placeholder="Search program names"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button className="search-bar__button" onClick={handleSearch}>Search</button>
                </div>
            </div>
            {setErrorMessage && <div className="search-bar__error">{setErrorMessage}</div>}
        </div>
    );
};

export default SearchBar;




// import React, { useState } from "react";
// import "./SearchBar.scss"; // Ensure your SCSS file reflects BEM conventions
// import axios from 'axios';

// const programTypes = ['Undergrad', 'Masters', 'Diploma', 'Post-Grad', 'PhD', 'Certification'];
// const provinces = ['NB', 'NS', 'PEI', 'NL', 'ON'];

// const SearchBar = ({ updateResults }) => {
//     const [selectedProvince, setSelectedProvince] = useState('');
//     const [selectedType, setSelectedType] = useState('');
//     const [selectedCost, setSelectedCost] = useState('');
//     const [searchQuery, setSearchQuery] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleSearch = async () => {
//         try {
//             const response = await axios.get(`http://localhost:8080/programs`, {
//                 params: {
//                     province: selectedProvince,
//                     type: selectedType,
//                     cost: selectedCost,
//                     query: searchQuery
//                 }
//             });
//             updateResults(response.data.results.slice(0, 3) || []); // Get only the first 3 results
//             setErrorMessage('');
//         } catch (error) {
//             handleError(error);
//         }
//     };

//     const handleError = (error) => {
//         if (error.response) {
//             if (error.response.status === 404) {
//                 updateResults([]); // Pass empty results if no programs found
//             } else {
//                 setErrorMessage('An error occurred while searching.');
//             }
//         } else {
//             setErrorMessage('Network error. Please try again.');
//         }
//     };

//     return (
//         <div className="search-bar" data-testid="header-search">
//             <div className="search-bar__content">
//                 {/* Cost Filter */}
//                 <div className="search-bar__input-container">
//                     <label htmlFor="cost-select" className="search-bar__label">Cost</label>
//                     <select
//                         id="cost-select"
//                         className="search-bar__select"
//                         value={selectedCost}
//                         onChange={(e) => setSelectedCost(e.target.value)}
//                     >
//                         <option value="">Select cost</option>
//                         <option value="low">Low</option>
//                         <option value="medium">Medium</option>
//                         <option value="high">High</option>
//                     </select>
//                 </div>

//                 {/* Type Filter */}
//                 <div className="search-bar__input-container">
//                     <label htmlFor="type-select" className="search-bar__label">Type</label>
//                     <select
//                         id="type-select"
//                         className="search-bar__select"
//                         value={selectedType}
//                         onChange={(e) => setSelectedType(e.target.value)}
//                     >
//                         <option value="">Select type</option>
//                         {programTypes.map(type => (
//                             <option key={type} value={type}>{type}</option>
//                         ))}
//                     </select>
//                 </div>

//                 {/* Location Filter */}
//                 <div className="search-bar__input-container">
//                     <label htmlFor="province-select" className="search-bar__label">Location</label>
//                     <select
//                         id="province-select"
//                         className="search-bar__select"
//                         value={selectedProvince}
//                         onChange={(e) => setSelectedProvince(e.target.value)}
//                     >
//                         <option value="">Select location</option>
//                         {provinces.map(province => (
//                             <option key={province} value={province}>{province}</option>
//                         ))}
//                     </select>
//                 </div>

//                 {/* Search Bar */}
//                 <div className="search-bar__input-container">
//                     <input
//                         type="text"
//                         className="search-bar__input"
//                         placeholder="Search program names"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                     <button className="search-bar__button" onClick={handleSearch}>Search</button>
//                 </div>
//             </div>
//             {errorMessage && <div className="search-bar__error">{errorMessage}</div>}
//         </div>
//     );
// };

// export default SearchBar;




// import React, { useState } from "react";
// import "./SearchBar.scss"; // Ensure your SCSS file reflects BEM conventions
// import axios from 'axios';

// const provinces = ['NB', 'NL', 'NS', 'PEI']; // Add more provinces as needed

// const SearchBar = ({ updateResults }) => {
//     const [selectedProvince, setSelectedProvince] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleSearch = async () => {
//         if (!selectedProvince) return; // Prevent empty searches
//         try {
//             const response = await axios.get(`http://localhost:8080/programs?province=${selectedProvince}`);
//             updateResults(response.data.results.slice(0, 3) || []); // Get only the first 3 results
//             setErrorMessage('');
//         } catch (error) {
//             handleError(error);
//         }
//     };

//     const handleError = (error) => {
//         if (error.response) {
//             if (error.response.status === 404) {
//                 updateResults([]); // Pass empty results if no programs found
//             } else {
//                 setErrorMessage('An error occurred while searching.');
//             }
//         } else {
//             setErrorMessage('Network error. Please try again.');
//         }
//     };

//     const handleChange = (e) => {
//         setSelectedProvince(e.target.value);
//         setErrorMessage(''); // Clear error message on input change
//     };

//     return (
//         <div className="search-bar" data-testid="header-search">
//             <div className="search-bar__content">
//                 <div className="search-bar__input-container">
//                     <label htmlFor="province-select" className="search-bar__label">Province</label>
//                     <select
//                         id="province-select"
//                         className="search-bar__select"
//                         value={selectedProvince}
//                         onChange={handleChange}
//                     >
//                         <option value="">Select a province</option>
//                         {provinces.map(province => (
//                             <option key={province} value={province}>{province}</option>
//                         ))}
//                     </select>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SearchBar;