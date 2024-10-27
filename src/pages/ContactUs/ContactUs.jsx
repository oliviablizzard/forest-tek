import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from "../../components/ContactForm/ContactForm";
import SuggestionsList from "../../components/SuggestionsList/SuggestionsList"; 
import { formFields } from "../../constants";
import "./ContactUs.scss";

const ContactUs = ({ onClose }) => {
    const [submissionSuccess, setSubmissionSuccess] = useState(false); 
    const [suggestions, setSuggestions] = useState([]);

    // Fetch suggestions on component mount
    useEffect(() => {
        const fetchSuggestions = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/suggestions");
                setSuggestions(response.data);
            } catch (error) {
                console.error("Error fetching suggestions:", error);
            }
        };
        fetchSuggestions();
    }, []); // Empty dependency array to run only once when the component mounts

    const handleFormSubmit = async (formData) => {
        try {
            await axios.post("http://localhost:8080/api/suggestions", formData);
            setSubmissionSuccess(true);
            fetchSuggestions(); // Re-fetch suggestions after successful submission
            if (onClose) onClose();
        } catch (error) {
            console.error("Error submitting data:", error);
            setSubmissionSuccess(false);
        }
    };

    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <div className="contact-us__form-container">
                <ContactForm fields={formFields} onSubmit={handleFormSubmit} onClose={onClose} />
                {submissionSuccess && <p className="success-message">Your suggestion has been submitted successfully!</p>}
                <SuggestionsList suggestions={suggestions} />
            </div>
        </div>
    );
};

export default ContactUs;