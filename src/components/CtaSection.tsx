
import "./CtaSection.css"
import phoneMockup from "../assets/phone-mockup2.png"
import appStoreImg from "../assets/app-store.png"
import googlePlayImg from "../assets/google-play.png"

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-wrapper">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Launching Soon</h2>
              <p className="cta-description">Get Ready To Experience AI-Powered Learning Anytime, Anywhere!</p>
              <p className="cta-subtitle">Launching Soon On The App Store & Google Play</p>

              <div className="cta-store-buttons">
                <a href="#" className="store-button">
                  <img src={googlePlayImg} alt="Get it on Google Play" />
                </a>
                <a href="#" className="store-button">
                  <img src={appStoreImg} alt="Download on the App Store" />
                </a>
              </div>
            </div>

            <div className="cta-phones">
              <img src={phoneMockup} alt="App Interface" className="phones-image" />
            </div>
          </div>
        </div>

        <div className="cta-decorations">
          <div className="star star-1">✦</div>
          <div className="star star-2">✦</div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection

