import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">Social Ease</div>
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <p> </p>
        <h1> Welcome to Social Ease Web Site </h1>
        <p></p>
        <a href="#about" className="btn">Learn More</a>
        
        
      </section>
      
      <section className="about" id="about">
        <h2>About Us</h2>
        <p>we bring your ideas to life with modern web technologies and creative design.</p>
      </section>

      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Web Design</h3>
            <p>Creating visually appealing and responsive designs for any device.</p>
          </div>
          <div className="card">
            <h3>Development</h3>
            <p>Building fast, reliable, and scalable applications tailored to your needs.</p>
          </div>
          <div className="card">
            <h3>Support</h3>
            <p>Ensuring continuous support and maintenance for your projects.</p>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <p>&copy; 2025 Social Ease. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
