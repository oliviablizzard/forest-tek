import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import './HomePage.scss';
import Map from '../../assets/images/map-canada.svg';


export default function HomePage() {
    return (
        <>
            <Header />
            <div className="button__list">
                <Button text="Conservation" />
                <Button text="Restoration" />
                <Button text="Adaptation" />
                <Button text="Appreciation" />
            </div>
            <div>
                <img src={Map} className="map" />
            </div>
            <Footer />
        </>
    );
}
