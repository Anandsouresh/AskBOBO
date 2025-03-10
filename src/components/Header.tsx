import "./header.css"
import appStoreImg from "../assets/app-store.png"
import googlePlayImg from "../assets/google-play.png"
import logoImg from "../assets/logo.png"
import mascotImg from "../assets/mascot.png"

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="logo">
            <div className="logo-circle">
              <img 
                src={logoImg}
                alt="AskBoBo Logo" 
                className="logo-img"
              />
            </div>
            <span className="logo-text">AskBoBo</span>
          </div>
        </div>

        <div className="header-content">
          <div className="header-text">
            <h1>
              AI-Powered Learning,{' '}
              <br />
              Just a Snap Away!
            </h1>
            <p>
              Scan any textbook page or question, and let AI break it down for you with simple explanations, audio
              guides, and real-world applications.
            </p>

            <div className="launch-info">
              <p>Launching Soon on</p>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <div className="store-buttons">
                <a href="#" className="store-button">
                  <img src={googlePlayImg} alt="Google Play" />
                </a>
                <a href="#" className="store-button">
                  <img src={appStoreImg} alt="App Store" />
                </a>
              </div>
            </div>
          </div>

          <div className="header-image">
            <div className="blur-circle"></div>
            <img
              src={mascotImg}
              alt="AskBoBo Mascot"
              className="mascot-image"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

