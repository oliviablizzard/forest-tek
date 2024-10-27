import React, { useState } from "react";
import "./SearchBar.scss"; // Ensure your SCSS file reflects BEM conventions
import axios from 'axios';

const provinces = ['NB', 'NL', 'NS', 'PEI']; // Add more provinces as needed

const SearchBar = ({ updateResults }) => {
    const [selectedProvince, setSelectedProvince] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = async () => {
        if (!selectedProvince) return; // Prevent empty searches
        try {
            const response = await axios.get(`http://localhost:8080/programs?province=${selectedProvince}`);
            updateResults(response.data.results.slice(0, 3) || []); // Get only the first 3 results
            setErrorMessage('');
        } catch (error) {
            handleError(error);
        }
    };

    const handleError = (error) => {
        if (error.response) {
            if (error.response.status === 404) {
                updateResults([]); // Pass empty results if no programs found
            } else {
                setErrorMessage('An error occurred while searching.');
            }
        } else {
            setErrorMessage('Network error. Please try again.');
        }
    };

    const handleChange = (e) => {
        setSelectedProvince(e.target.value);
        setErrorMessage(''); // Clear error message on input change
    };

    return (
        <div className="search-bar" data-testid="header-search">
            <div className="search-bar__content">
                <div className="search-bar__input-container">
                    <label htmlFor="province-select" className="search-bar__label">Province</label>
                    <select
                        id="province-select"
                        className="search-bar__select"
                        value={selectedProvince}
                        onChange={handleChange}
                    >
                        <option value="">Select a province</option>
                        {provinces.map(province => (
                            <option key={province} value={province}>{province}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;