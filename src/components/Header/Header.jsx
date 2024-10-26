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

        </header>
    );
}