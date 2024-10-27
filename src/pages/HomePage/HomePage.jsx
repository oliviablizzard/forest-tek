import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';
import mockup from '../../assets/mockups/FSC_:home.png';

export default function HomePage() {
    return (
        <div className="homepage">
            <Link to="/dashboard" className="homepage__link">
                <img src={mockup} alt="Dashboard Mockup" className="homepage__image" />
            </Link>
        </div>
    );
}