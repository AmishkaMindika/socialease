import React from "react";
import "./App.css";
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div>
          <img
            className="logo"
            src="socialeaselogo3png.png"
            alt="Social Ease Logo"
          />
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#contact" className="nav-link">
            Contact Us
          </a>
          <a href="#join" className="nav-button">
            Join Us
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
      <div className="hero-content">
        {/* Typing Animation for Heading */}
        <h1>
          <TypeAnimation
            sequence={[
              "Welcome to Social Ease", // First text
              1000, // Wait 1 second
              "Empowering Your Communication Skills...", // Second text
              1000, // Wait 1 second
              "Refine Your Social Confidence...", // Third text
              1000, // Wait 1 second
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ display: "inline-block" }}
          />
        </h1>

        {/* Paragraph Content */}
        <p>
          Empowering you to improve your social and conversational skills with
          ease. Social Ease is designed to help individuals, especially
          introverts and those with social anxiety, build and refine
          communication skills.
       
          The app provides practical, engaging tools to simulate real-world
          interactions and enhance user confidence.
        </p>

        {/* Learn More Button */}
        <a href="#about" className="btn">
          Learn More
        </a>
      </div>

      {/* Hero Image */}
      <img
        className="hero-image"
        src="socialeaserer3.png"
        alt="Hero Animation"
      />
    </section>
      

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-content">
          
          
        
        </div>
        <img
            className="about-image"
            src="socialeaseabout6gif.gif"
            alt="About Animation"
          />
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2 className="section-title">Features</h2>
        
        <p className="section-subtitle">
          Explore the key features that make Social Ease unique!
        </p>
        <p>

        </p>
       
        <div className="features-grid">
          <div className="feature-card">
            <h3>Ice Breaker</h3>
            <p>
              Small, engaging voice practices for consistent practice. Boosts
              confidence through manageable challenges.
            </p>
          </div>
          
          <div className="feature-card">
            <h3>Scenario Conversations</h3>
            <p>
              AI-driven tips and tricks to develop realistic conversation
              scenarios with multiple options to choose from.
            </p>
          </div>
          <div className="feature-card">
            <h3>Voice Practice</h3>
            <p>
              Real-time feedback on word usage and summaries. AI analysis helps
              improve speech patterns.
            </p>
          </div>
          <div className="feature-card">
            <h3>Progress Tracking</h3>
            <p>
              Personalized suggestions and performance tracking to help you grow
              your social skills steadily.
            </p>
          </div>
          <div className="feature-card">
            <h3>Community Hub</h3>
            <p>
              Connect with others, share tips, and foster a supportive
              environment for mutual growth.
            </p>
            
          </div>
          
        </div>
        <p></p>
        <img
            className="about-image1"
            src="socialeasemenu3gif.gif"
            alt="About Animation"
          />
      </section>
      {/* Our Team Section */}
<section className="our-team" id="team">
  <h2 className="section-title">Meet Our Team</h2>
  <p className="section-subtitle">
    A passionate team dedicated to improving your social confidence.
  </p>

  <div className="team-grid">
    {/* Team Member Cards */}
    {[
      { name: "Amishka Disanayaka", role: "Member", img: "amishka.jpg" },
      { name: "Kenuri", role: "Leader", img: "kenuri.jpg" },
      { name: "Inuka", role: "Member", img: "inuka.jpg" },
      { name: "Himaz", role: "Member", img: "Himaz.jpg" },
      { name: "Kabishan", role: "Member", img: "Kabishan.jpg" },
      { name: "Saarujan", role: "Member", img: "Saarujan.jpg" },
    ].map((member, index) => (
      <div key={index} className="team-card">
        <img src={member.img} alt={member.name} className="team-img" />
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    ))}
  </div>
</section>


      {/* Contact Us Section */}
      <section className="contact-us" id="contact">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact-intro">
          We'd love to hear from you! Feel free to reach out with any questions
          or feedback.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </section>
      <section className="download-section" id="join">
      <div className="download-container">
        {/* Image on the left */}
        <img
          className="download-image"
          src="socialeasedownload1gif.gif"
          alt="Download Animation"
        />
        
        {/* Content on the right */}
        <div className="download-content">
          <h2>Join Social Ease Today</h2>
          <p>
            Unlock your potential and improve your social confidence. 
            Download our app now from the Play Store or App Store and start your journey towards better communication and connection.
          </p>
          <div className="download-buttons">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="store-button playstore"
            >
              <img src="socialeaseplayestore2.png" alt="Google Play" />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="store-button appstore"
            >
              <img src="socialeaseappstore1.png" alt="App Store" />
            </a>
          </div>
        </div>

        
      </div>
    </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Social Ease. All rights reserved.</p>
        <p>contact us </p>
        <p>Instagram- </p>
        <p>Youtube-  </p>


        <img
            className="robot1"
            src="socialeaserobot2.gif"
            alt="Social Ease robot"
          />
      </footer>
    </div>
  );
}

export default App;
