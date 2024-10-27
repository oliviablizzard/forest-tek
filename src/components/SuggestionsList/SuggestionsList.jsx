import React from "react";
import "./SuggestionsList.scss";

const SuggestionsList = ({ suggestions }) => {
    if (!suggestions) return null; // Handle null props gracefully

    return (
        <div className="suggestions-list">
            <h3>Existing Suggestions</h3>
            <table>
                <thead>
                    <tr>
                        <th>Program Name</th>
                        <th>Institution Name</th>
                        <th>Submitted At</th>
                    </tr>
                </thead>
                <tbody>
                    {suggestions.length > 0 ? (
                        suggestions.map((suggestion) => (
                            <tr key={suggestion.id}>
                                <td>{suggestion.program_name}</td>
                                <td>{suggestion.institution_name}</td>
                                <td>{new Date(suggestion.submitted_at).toLocaleString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No suggestions available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default SuggestionsList;