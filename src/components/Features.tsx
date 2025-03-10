import "./Features.css"
import phoneScreen from "../assets/phone-screen-1.png"

const Features = () => {
  const features = [
    {
      icon: "🖥️",
      title: "Simplify The Topic",
      description: "Get A Clear, Step-By-Step Breakdown In Simple Language, Perfect For Quick Understanding."
    },
    {
      icon: "🎧",
      title: "Listen & Learn",
      description: "Let AI Read The Concept Aloud, So You Can Learn Hands-Free Anytime, Anywhere."
    },
    {
      icon: "📝",
      title: "Make It Interesting",
      description: "Understand Concepts With Real-World Examples, Making Learning Practical And Memorable."
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features-content">
          <div className="features-image">
            <div className="phone-wrapper">
              <img src={phoneScreen} alt="AskBoBo App Interface" className="phone-screen" />
            </div>
          </div>
          
          <div className="features-text">
            <span className="features-label">FEATURES</span>
            <h2>Learn The Way You Prefer</h2>
            
            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <span className="feature-icon">{feature.icon}</span>
                  <div className="feature-info">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features

