import { useState } from 'react';
import axios from 'axios';
import './Form.scss';

export default function OrganizationForm() {
    const [organizationData, setOrganizationData] = useState({
        organization: '',
        acronym: '',
        contactTitle: '',
        contactNumber: '',
        contactEmail: '',
        webLink: '',
        logo: '',
        area: ''
    });

    const handleChange = (e) => {
        setOrganizationData({ ...organizationData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put('http://localhost:3000/organizations', organizationData);
            alert('Organization added successfully!');
        }   catch (error) {
            console.error('Error adding organization:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Organization<input type="text" name="organization" placeholder="xyz" className="class" value={organizationData.organization} onChange={handleChange} /></label>
            <label>Acronym<input type="text" name="acronym" placeholder="xyz" className="class" value={organizationData.acronym} onChange={handleChange} /></label>
            <label>Contact Title<input type="text" name="contactTitle" placeholder="xyz" className="class" value={organizationData.contactTitle} onChange={handleChange} /></label>
            <label>Contact Number<input type="text" name="contactNumber" placeholder="xyz" className="class" value={organizationData.contactNumber} onChange={handleChange} /></label>
            <label>Contact Email<input type="email" name="contactEmail" placeholder="xyz" className="class" value={organizationData.contactEmail} onChange={handleChange} /></label>
            <label>Web Link<input type="url" name="webLink" placeholder="xyz" className="class" value={organizationData.webLink} onChange={handleChange} /></label>
            <label>Logo<input type="text" name="logo" placeholder="xyz" className="class" value={organizationData.logo} onChange={handleChange} /></label>
            <label>Area
                <select name="area" className="class" value={organizationData.area} onChange={handleChange}>
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

