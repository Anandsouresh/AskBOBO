
import "./Benefits.css"
import phoneInHand from "../assets/image2.png"

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-content">
          <div className="benefits-text">
            <h2>Why You'll Love It?</h2>
            <p className="subtitle">Smart Learning, Your Way — Fast, Fun & Effective!</p>
            
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-number">1</div>
                <div className="benefit-info">
                  <h3>Scan & Solve Instantly</h3>
                  <p>Snap a picture of any question, and AI will break it down for you in seconds.</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-number">2</div>
                <div className="benefit-info">
                  <h3>Learn on Your Terms</h3>
                  <p>Read, listen, or explore real-world examples—pick the method that works best for you.</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-number">3</div>
                <div className="benefit-info">
                  <h3>No More Confusion</h3>
                  <p>Not clear? Tap "Explain More" to dive deeper until you fully understand.</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-number">4</div>
                <div className="benefit-info">
                  <h3>Learn Anytime, Anywhere</h3>
                  <p>Whether at home or on the go, AI-powered learning is always at your fingertips!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="benefits-image">
            <div className="phone-container">
              <img src={phoneInHand} alt="App Interface" className="phone-screen" />
              <div className="circle-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits

