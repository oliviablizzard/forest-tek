import './LandingPage.scss';
import Logo from '../../assets/icons/logo.png';
import Arrow from '../../assets/icons/arrow-nav.svg';

export default function LandingPage() {
    return (
        <>
        <div className="wrapper">
            <header>
                <div>
                    <img src={Logo} className="logo" />
                </div>
            </header>
            <section>
                <div className="list">
                    <div>
                        <div className="list__title">
                            <h3>About</h3>
                            <img src={Arrow} className="arrow" />
                        </div> 
                        <div className="list__items">
                            <h4 className="list__item">What We Do</h4>
                            <h4 className="list__item">Where We Work</h4>
                            <h4 className="list__item">Our Team</h4>
                            <h4 className="list__item--last">Community Forests Pemba</h4>
                        </div>
                    </div>
                    <div>
                        <div className="list__title">
                            <h3>Regions</h3>
                            <img src={Arrow} className="arrow" />
                        </div> 
                        <div className="list__items">
                            <h4 className="list__item">Canada</h4>
                            <h4 className="list__item">Zanzibar</h4>
                            <h4 className="list__item--last">Mozambique</h4>
                        </div>
                    </div>
                    <div>
                        <div className="list__title">
                            <h3>Programs</h3>
                            <img src={Arrow} className="arrow" />
                        </div> 
                        <div className="list__items">
                            <h4 className="list__item">Conservation</h4>
                            <h4 className="list__item">Restoration</h4>
                            <h4 className="list__item--last">Adaptation</h4>
                        </div>
                    </div>
                    <div>
                        <div className="list__title">
                            <h3>Learn More</h3>
                            <img src={Arrow} className="arrow" />
                        </div> 
                        <div className="list__items">
                            <h4 className="list__item">Stories</h4>
                            <h4 className="list__item">Tools & Resources</h4>
                            <h4 className="list__item">Your Forest Care Guide</h4>
                            <h4 className="list__item">Newsletter</h4>
                            <h4 className="list__item--last">For Media</h4>
                        </div>
                    </div>
                    <div>
                        <div className="list__title">
                            <h3>Support</h3>
                            <img src={Arrow} className="arrow" />
                        </div> 
                        <div className="list__items">
                            <h4 className="list__item">Donate</h4>
                            <h4 className="list__item">Seeds of Change</h4>
                            <h4 className="list__item">Plant 4 Pemba</h4>
                            <h4 className="list__item--last">More Ways To Give</h4>
                        </div>
                    </div>
                </div>



                {/* <div className="menu__item">
                    <h3>Regions</h3>
                    <img src={Arrow} className="arrow" />
                </div>
                <div className="menu__item">
                    <h3>Programs</h3>
                    <img src={Arrow} className="arrow" />
                </div>
                <div className="menu__item">
                    <h3>Learn More</h3>
                    <img src={Arrow} className="arrow" />
                </div>
                <div className="menu__item">
                    <h3>Support</h3>
                    <img src={Arrow} className="arrow" />
                </div> */}


            </section>
            <div>
                <button className="button">
                    <h4 className="button__text">Take Action</h4>
                </button>
            </div>
        </div>
        </>
    );
}