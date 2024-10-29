import './Header.scss';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../../assets/icons/logo.png';
import Search from '../../assets/icons/arrow-nav.svg';
import Menu from '../../assets/icons/menu.png';

export default function Header() {
    return (
        <div className="header">
            <div className="header__bottom-row">
                <div>
                    <Link to="/" className="header__logo-link"> {/* Link for logo, adjust the path as needed */}
                        <img src={Logo} alt="FSC Logo" />
                    </Link>
                </div>
                <div>
                    <Link to="https://forsec.ca/" className="header__icon-link">
                        <img src={Search} className="header__icon" alt="Search Icon" />
                    </Link>
                    <Link to="https://forsec.ca/" className="header__icon-link">
                        <img src={Menu} className="header__icon" alt="Menu Icon" />
                    </Link>
                </div>
            </div>
        </div>
    );
}