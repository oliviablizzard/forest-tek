import './Header.scss';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../../assets/icons/FSC.png';
import Search from '../../assets/icons/arrow-nav.svg';
import Menu from '../../assets/icons/menu.png';

export default function Header() {
    return (
        <div className="header">
            <div className="header__top-row">
                <nav>
                    <ul className="header__nav">
                        <li className="header__nav-li">
                            <Link to="/about" className="header__nav-styling">About</Link> {/* Updated to use Link */}
                        </li>
                        <li className="header__nav-li">
                            <Link to="/organizations" className="header__nav-styling">Contact</Link> {/* Updated to use Link */}
                        </li>
                        <li className="header__nav-li">
                            <a href="https://forsec.ca/" className="header__nav-styling">Member Login</a> {/* Kept the same for external link */}
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header__bottom-row">
                <div>
                    <Link to="/" className="header__logo-link"> {/* Link for logo, adjust the path as needed */}
                        <img src={Logo} alt="FSC Logo" />
                    </Link>
                </div>
                <div>
                    <a href="https://forsec.ca/" className="header__icon-link">
                        <img src={Search} className="header__icon" alt="Search Icon" />
                    </a>
                    <a href="https://forsec.ca/" className="header__icon-link">
                        <img src={Menu} className="header__icon" alt="Menu Icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}