import './Header.scss';
import React from 'react';
import Logo from '../../assets/icons/FSC.png';
import Search from '../../assets/icons/arrow-nav.svg';
import Menu from '../../assets/icons/menu.png';

export default function Header() {
    return (
        <div className="header">
            <div className="header__top-row">
                <nav className="#">
                    <ul className="header__nav">
                        <li className="header__nav-li">
                            <a href="https://forsec.ca/" className="header__nav-styling">About</a>
                        </li>
                        <li className="header__nav-li">
                            <a href="https://forsec.ca/" className="header__nav-styling">Contact</a>
                        </li>
                        <li className="header__nav-li">
                            <a href="https://forsec.ca/" className="header__nav-styling">Member Login</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header__bottom-row">
                <div>
                    <a href="https://forsec.ca/" className="header__logo-link">
                        <img src={Logo}/>
                    </a>
                </div>
                <div className="#">
                    <a href="https://forsec.ca/" className="#">
                        <img src={Search} className="header__icon" />
                    </a>                    
                    <a href="https://forsec.ca/" className="#">
                        <img src={Menu} className="header__icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}