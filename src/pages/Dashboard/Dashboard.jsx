import React, { useState } from "react";
import "./Dashboard.scss";
import SearchBar from '../../components/SearchBar/SearchBar';
import Browse from '../../components/Browse/Browse';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import Map from '../../assets/images/map-canada.svg';
import SingleResult from '../../components/SingleResult/SingleResult';

const Dashboard = () => {
    const [results, setResults] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    const updateResults = (newResults, newSuggestions) => {
        setResults(newResults);
        setSuggestions(newSuggestions);
    };

    return (
        <div className="dashboard">
            <HeaderSection />
            <SearchSection onUpdateResults={updateResults} />
            <GeoSection results={results} suggestions={suggestions} />
            <BrowseSection />
            <ActionButton />
        </div>
    );
};

const HeaderSection = () => (
    <section className="dashboard__header">
        <Header />
    </section>
);

const SearchSection = ({ onUpdateResults }) => (
    <section className="dashboard__search">
        <SearchBar updateResults={onUpdateResults} />
    </section>
);

const GeoSection = ({ results, suggestions }) => (
    <section className="dashboard__geo">
        <div className="geo-container">
            <img src={Map} className="geo-container__map" alt="Map of Canada" />
            <div className="geo-container__data">
                <div className="geo-container__results">
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

const NoResults = ({ suggestions }) => (
    <div className="no-results">
        <p>No programs found.</p>
        {suggestions.length > 0 && (
            <div className="no-results__suggestions">
                <h5>Suggested Locations:</h5>
                <ul>
                    {suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
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

const BrowseSection = () => (
    <section className="dashboard__browse">
        <Browse />
    </section>
);

const ActionButton = () => (
    <section className="dashboard__action-button">
        <Button />
    </section>
);

export default Dashboard;