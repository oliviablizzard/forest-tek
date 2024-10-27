import { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.scss';

export default function OrganizationForm() {

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event.target.organization.value);

        let newOrganization = {
            organization: event.target.organization.value,
            acronym: event.target.acronym.value,
            contactTitle: event.target.contactTitle.value,
            contactNumber: event.target.contactNumber.value,
            contactEmail: event.target.contactEmail.value,
            webLink: event.target.webLink.value,
            logo: event.target.logo.value,
            area: event.target.area.value,
        }

        try {
            await axios.put('http://localhost:8080/organizations', newOrganization);
            alert('Organization added successfully!');
        }   catch (error) {
            console.error('Error adding organization:', error);
        }

    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label className="form__label">Organization<input type="text" name="organization" placeholder="xyz" className="form__input" /></label>
            <label className="form__label">Acronym<input type="text" name="acronym" placeholder="xyz" className="form__input" /></label>
            <label className="form__label">Contact Title<input type="text" name="contactTitle" placeholder="xyz" className="form__input" /></label>
            <label className="form__label">Contact Number<input type="text" name="contactNumber" placeholder="xyz" className="form__input" /></label>
            <label className="form__label">Contact Email<input type="email" name="contactEmail" placeholder="xyz" className="form__input" /></label>
            <label className="form__label">Web Link<input type="url" name="webLink" placeholder="xyz" className="form__input" /></label>
            <label className="form__label">Logo<input type="text" name="logo" placeholder="xyz" className="form__input" /></label>
            <label className="form__label">Area
                <select name="area" className="form__input--dropdown">
                <option value="1">License 1</option>
                <option value="2">License 2</option>
                <option value="3">License 3</option>
                <option value="4">License 4</option>
                <option value="5">License 5</option>
                <option value="6">License 6</option>
                <option value="7">License 7</option>
                <option value="8">License 8</option>
                <option value="9">License 9</option>
                <option value="10">License 10</option>
                <option value="NB">Provincial</option>
                </select>
            </label>
            <button type="submit">Add Organization</button>
        </form>
    );
}

