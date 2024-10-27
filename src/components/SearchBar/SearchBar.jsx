import React, { useState } from "react";
import "./SearchBar.scss"; // Ensure your SCSS file reflects BEM conventions
import axios from 'axios';

const SearchBar = ({ updateResults }) => {
    const [location, setLocation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleSearch = async () => {
        if (!location) return; // Prevent empty searches
        try {
            const response = await axios.get(`http://localhost:8080/programs?location=${location}`);
            updateResults(response.data.results || [], response.data.suggestions || []);
            setErrorMessage('');
        } catch (error) {
            handleError(error);
        }
    };

    const handleError = (error) => {
        if (error.response) {
            if (error.response.status === 404) {
                setSuggestions(error.response.data.suggestions || []);
                updateResults([], suggestions); // Pass empty results to GeoSection
            } else {
                setErrorMessage('An error occurred while searching.');
            }
        } else {
            setErrorMessage('Network error. Please try again.');
        }
    };

    const handleChange = (e) => {
        setLocation(e.target.value);
        setSuggestions([]); // Clear suggestions on input change
    };

    return (
        <div className="search-bar" data-testid="header-search">
            <div className="search-bar__content">
                <div className="search-bar__input-container">
                    <label htmlFor="location-input" className="search-bar__label">Location</label>
                    <div className="search-bar__input-wrapper">
                        <i className="search-bar__icon">
                            <svg viewBox="0 0 24 24">
                                <path d="M11.6 11.6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-7.6C8.5 4 6 6.5 6 9.6 6 13.8 11.6 20 11.6 20s5.6-6.2 5.6-10.4c0-3.1-2.5-5.6-5.6-5.6z" />
                            </svg>
                        </i>
                        <input
                            type="text"
                            id="location-input"
                            name="location"
                            placeholder="Enter location"
                            className="search-bar__input"
                            autoComplete="off"
                            value={location}
                            onChange={handleChange} 
                        />
                    </div>
                </div>

                <button type="button" className="search-bar__button" onClick={handleSearch}>
                    <svg viewBox="0 0 36 36" aria-label="search button">
                        <circle cx="18" cy="18" r="18" />
                        <path d="M20.926 19.426a6 6 0 1 0-1.454 1.468L24.5 26l1.5-1.5-5.074-5.074ZM16 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#fff" />
                    </svg>
                </button>
            </div>
            {errorMessage && <p className="search-bar__error">{errorMessage}</p>}
            {suggestions.length > 0 && (
                <div className="search-bar__suggestions">
                    <h5>Suggestions:</h5>
                    <ul>
                        {suggestions.map((suggestion, index) => (
                            <li key={index}>{suggestion}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBar;