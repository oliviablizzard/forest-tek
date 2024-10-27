import './Header.scss';
import Logo from '../../assets/icons/FSC.png';

export default function Header() {
    return (
        <header className="header__wrapper">
            <section className="header__top">
                <div>
                    About
                </div>
                <div>
                    Contact
                </div>
                <div>
                    Member Login
                </div>
            </section>
            <section className="header">
                <div>
                    <img src={Logo} className="logo" />
                </div>
                <div>
                    <div>
                        button
                    </div>
                    <div>
                        button
                    </div>
                </div>
            </section>
<section>

<section class="header-wrapper">
    <header class="header">
        {/* <!-- Secondary Header --> */}
        <div class="secondary-header">
            <nav class="secondary-menu" aria-label="Secondary Menu">
                <ul class="menu">
                    <li class="menu-item dropdown">
                        <a href="https://forsec.ca/about-us/" aria-haspopup="true">About</a>
                        <ul class="sub-menu">
                            <li><a href="/about/#mission">Mission, Vision & Values</a></li>
                            <li><a href="/about/#bod">Board of Directors</a></li>
                            <li><a href="/about/#team">Meet The Team</a></li>
                        </ul>
                    </li>
                    <li class="menu-item"><a href="https://forsec.ca/contact/">Contact</a></li>
                    <li class="menu-item button"><a href="https://secure.forestrysectorcouncil.ca/">Member Login</a></li>
                </ul>
            </nav>
        </div>

        {/* <!-- Logo and Main Navigation --> */}
        <div class="header-content">
            <a href="https://forsec.ca/" class="logo">
                <img src="https://forestrysectorcouncil.ca/wp-content/uploads/2022/12/FSC-logo-yellow-white-2.png" 
                    alt="Forestry Sector Council Logo" />
            </a>
            <nav class="main-menu" aria-label="Main Menu">
                <ul class="menu">
                    <li><a href="https://forsec.ca/">Home</a></li>
                    <li class="dropdown">
                        <a href="https://forsec.ca/membership/" aria-haspopup="true">Membership</a>
                        <ul class="sub-menu">
                            <li><a href="https://forsec.ca/membership/">Become A Member</a></li>
                            <li><a href="https://forsec.ca/?page_id=268">Member Directory</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="https://forsec.ca/forestry-careers/" aria-haspopup="true">Work in Forestry</a>
                        <ul class="sub-menu">
                            <li><a href="https://forsec.ca/resources/training-library/">Education & Training</a></li>
                            <li><a href="https://forsec.ca/job-postings/">Job Postings</a></li>
                            <li><a href="/forestry-careers/#careerfaq">FAQs</a></li>
                        </ul>
                    </li>
                    {/* <!-- Additional menu items follow similarly --> */}
                </ul>
            </nav>
        </div>
    </header>
</section>
    
</section>

        </header>
    );
}