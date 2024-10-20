import './Footer.scss';
import Logo from '../../assets/icons/logo.png';


export default function Footer() {
    return (
        <footer className="footer">
            <div>
                contact us
            </div>
            <div>
                <img src={Logo} className="logo" />
            </div>
        </footer>
    );
}