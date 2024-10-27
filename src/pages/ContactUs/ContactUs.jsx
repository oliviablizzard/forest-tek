import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from "../../components/ContactForm/ContactForm";
import SuggestionsList from "../../components/SuggestionsList/SuggestionsList"; 
import { formFields } from "../../constants";
import "./ContactUs.scss";

const ContactUs = ({ onClose }) => {
    const [submissionSuccess, setSubmissionSuccess] = useState(false); 
    const [suggestions, setSuggestions] = useState([]);
    const [error, setError] = useState(null); // State for error handling

    // Fetch suggestions on component mount
    useEffect(() => {
        const fetchSuggestions = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/suggestions");
                setSuggestions(response.data);
            } catch (error) {
                console.error("Error fetching suggestions:", error);
                setError("Failed to load suggestions. Please try again later."); // Set error message
            }
        };
        fetchSuggestions();
    }, []); // Empty dependency array to run only once when the component mounts

    const handleFormSubmit = async (formData) => {
        try {
            await axios.post("http://localhost:8080/api/suggestions", formData);
            setSubmissionSuccess(true);
            // Re-fetch suggestions after successful submission
            const response = await axios.get("http://localhost:8080/api/suggestions");
            setSuggestions(response.data);
            if (onClose) onClose();
        } catch (error) {
            console.error("Error submitting data:", error);
            setSubmissionSuccess(false);
            setError("Failed to submit your suggestion. Please try again."); // Set error message
        }
    };

    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <div className="contact-us__form-container">
                <ContactForm fields={formFields} onSubmit={handleFormSubmit} onClose={onClose} />
                {submissionSuccess && <p className="success-message">Your suggestion has been submitted successfully!</p>}
                {error && <p className="error-message">{error}</p>} {/* Display error message */}
                <SuggestionsList suggestions={suggestions} />
            </div>
        </div>
    );
};

export default ContactUs;