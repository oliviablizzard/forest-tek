import React, { useState } from "react";
import "./SearchBar.scss";
import axios from 'axios';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/programs?location=${location}`);
      setResults(response.data);
      setShowResults(true); // Show results when they are fetched
    } catch (error) {
      console.error('Error fetching programs:', error);
    }
  };

  return (
    <div className="search-bar" data-testid="header-search">
      <div className="search-bar__content">
        {/* Location Input */}
        <div className="search-bar__location-container">
          <label htmlFor="location-input" className="search-bar__label--location">
            Location
          </label>
          <div className="search-bar__location-wrapper">
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
              className="search-bar__location-input"
              autoComplete="off"
              value={location}
              onChange={(e) => setLocation(e.target.value)} // Update state on input change
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="search-bar__button-container">
          <button type="button" className="search-bar__button" onClick={handleSearch}>
            <svg viewBox="0 0 36 36" aria-label="search button">
              <circle cx="18" cy="18" r="18" />
              <path d="M20.926 19.426a6 6 0 1 0-1.454 1.468L24.5 26l1.5-1.5-5.074-5.074ZM16 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#fff" />
            </svg>
          </button>
        </div>
      </div>

      {/* Show Results */}
      {showResults && (
        <div className="search-bar__results">
          {results.length > 0 ? (
            results.map((program, index) => (
              <div key={index} className="search-bar__result">
                <h4>{program.program_name} ({program.institution_name})</h4>
                <p>{program.location}</p>
              </div>
            ))
          ) : (
            <p>No programs found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;