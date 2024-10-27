import './LandingPage.scss';
import Header from '../../Header/Header';
import Footer from '../../components/Footer/Footer';

export default function LandingPage() {
    return (
        <>

    <Header />
    <div class="card-item">
        <div class="card-body">
            <img class="card-img" src="https://picsum.photos/250/200?image=480" alt="" />
            <h2 class="card-title center">Title</h2>
            <p class="card-text">subtitle</p>
            <div class="card-footer center">
                <a class="btn" href="">Details</a>
            </div>
        </div>
    </div>

      {/* <Hero /> */}
    <div className="link-cards">
        {/* <LinkCard />
        <LinkCard />
        <LinkCard /> */} cards
    </div>
    <div className="articles">
        {/* <Article />
        <Article /> */}articles
    </div>
    <Footer />
      {/* <FooterBottom /> */}

        {/* 
        
        <HeaderTop styling: #3b6e4d, 3 drop downs (About, Contact, Member login), centered in top bar. />
        
        <Header styling: #338a57, FSC logo full-height of header on left. Search and triple line menu icons in top right of header. />
        <Hero styling: white, H1, H2, p, div />
        
        <LinkCard />
        <LinkCard />
        <LinkCard />
        
        <Article />
        <Article />

        <Footer styling: #338a57, FSC logo in top left, div, div, div />
        <FooterBottom styling: #338a57, div, div />
        
        */}
        </>
    );
}