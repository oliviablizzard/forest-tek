import mockup from '../../assets/mockups/FSC_:home.png';

export default function HomePage() {
    return (
        <>
            <div>
                <a href="/dashboard">
                    <img src={mockup} alt="Dashboard Mockup" />
                </a>
            </div>
        </>
    );
}