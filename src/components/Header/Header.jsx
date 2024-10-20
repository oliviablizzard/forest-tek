import './Header.scss';
import Logo from '../../assets/icons/logo.png';
import Menu from '../../assets/icons/menu.png'

export default function Header() {
    return (
        <header className="header">
            <div className="#">
                <img src={Logo} className="logo" />
            </div>
            <div className="header__title">
                <div className="header__title--date">
                    todays date
                </div>
                <div className="header__title--title">
                    title of the day
                </div>
            </div>
            <div>
                <img src={Menu} className="logo" />
            </div>
        </header>
    );
}