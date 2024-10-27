import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ContactForm.scss";

const ContactForm = ({ fields, onClose, onSubmit }) => {
    const [formData, setFormData] = useState(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        if (onClose) onClose();
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="contact-form__title">Suggest a Program</h3>
            {fields.map((field) => (
                <label key={field.name} className="contact-form__label">
                    {field.label}
                    {field.type === "textarea" ? (
                        <textarea
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            required={field.required}
                            className="contact-form__textarea"
                        />
                    ) : (
                        <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            required={field.required}
                            className="contact-form__input"
                        />
                    )}
                </label>
            ))}
            <button type="submit" className="contact-form__button">Submit</button>
        </form>
    );
};

ContactForm.propTypes = {
    fields: PropTypes.array.isRequired, // New prop validation
    onClose: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;