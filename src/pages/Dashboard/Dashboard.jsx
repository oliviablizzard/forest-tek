import React, { useState } from "react";
import "./Dashboard.scss";
import SearchBar from '../../components/SearchBar/SearchBar';
import Browse from '../../components/Browse/Browse';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import GeoData from '../../components/GeoData/GeoData'; // Import the new GeoData component

const Dashboard = () => {
    const [results, setResults] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const updateResults = (newResults, newSuggestions) => {
        setResults(newResults);
        setSuggestions(newSuggestions);
    };

    return (
        <div className="dashboard">
            <Header />
            <SearchBar onUpdateResults={updateResults} setErrorMessage={setErrorMessage} />
            <GeoData results={results} suggestions={suggestions} errorMessage={errorMessage} /> {/* Use GeoData here */}
            <Browse />
        </div>
    );
};


export default Dashboard;