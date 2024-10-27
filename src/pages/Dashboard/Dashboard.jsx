import React, { useState } from "react";
import "./Dashboard.scss";
import SearchBar from '../../components/SearchBar/SearchBar';
import Browse from '../../components/Browse/Browse';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import Map from '../../assets/images/map-canada.svg';
import SingleResult from '../../components/SingleResult/SingleResult'; // Import the new component

const Dashboard = () => {
    const [results, setResults] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    // Function to update results and suggestions
    const updateResults = (newResults, newSuggestions) => {
        setResults(newResults);
        setSuggestions(newSuggestions);
    };

    return (
        <div>
            <HeaderSection />
            <SearchSection onUpdateResults={updateResults} />
            <GeoSection results={results} suggestions={suggestions} />
            <BrowseSection />
            <ActionButton />
        </div>
    );
};

// Header Section
const HeaderSection = () => (
    <section>
        <Header />
    </section>
);

// Search Section
const SearchSection = ({ onUpdateResults }) => (
    <section>
        <SearchBar updateResults={onUpdateResults} />
    </section>
);

// Geo Section
const GeoSection = ({ results, suggestions }) => (
    <section>
        <div className="geo-container">
            <div>
                <img src={Map} className="geo-map" alt="Map of Canada" />
            </div>
            <div className="data-container">
                <div className="results">
                    {results.length > 0 ? (
                        results.map((program, index) => (
                            <SingleResult key={index} program={program} />
                        ))
                    ) : (
                        <NoResults suggestions={suggestions} />
                    )}
                </div>
            </div>
        </div>
    </section>
);

// No Results Component
const NoResults = ({ suggestions }) => (
    <>
        <p>No programs found.</p>
        {suggestions.length > 0 && (
            <div className="suggestions">
                <h5>Suggested Locations:</h5>
                <ul>
                    {suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                    ))}
                </ul>
            </div>
        )}
        <Link to="/programs/contact" className="search-bar__contact-link">
            <button className="search-bar__contact-button">
                Submit an additional resource to our site admin <strong>HERE</strong>
            </button>
        </Link>
    </>
);

// Browse Section
const BrowseSection = () => (
    <section>
        <Browse />
    </section>
);

// Action Button
const ActionButton = () => (
    <section>
        <Button />
    </section>
);

export default Dashboard;