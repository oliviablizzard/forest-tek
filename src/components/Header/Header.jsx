import './Header.scss';
import Logo from '../../assets/icons/logo.png';
import Menu from '../../assets/icons/menu.png'

export default function Header() {
    return (
        <header className="wrapper header">
            <div className="wrapper">
                <img src={Logo} className="logo" />
                <h1 className="logo__name">Forest-TEK</h1>
            </div>
            <div>
                <img src={Menu} className="menu" />
            </div>
        </header>
    );
}