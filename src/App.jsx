import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div  ><img className="logo" src="socialeaselogo3png.png" alt="Example from Public Folder" /> </div>
        <nav className="nav">
          
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Fetures</a>
          <a href="#contact" className="nav-link">Contact Us</a>
          <a href="#joinus " className="nav-linkv">JOIN </a>
        </nav>
        
      </header>

      
      

      
      
      <section className="hero" id="home">
      <img className="underjpg" src="socialeasefront1gif.gif" alt="Example from Public Folder" />
      <p></p>
        <a href="#about" className="btn">Learn More</a>
      </section>
      <p></p>
      <section className="about" id="about">
        
        
        <img className="underjpgr"  src="socialeasefronty5.gif" alt="Example from Public Folder" />
      </section>
      <section className="services" id="services">
        <h2>Fetures</h2>
        <p> </p>
        <div className="service-cards">
          <div className="card">
            <h3>Ice Breaker</h3>
            <p>Offers small, engaging voice practices for consistent practice.
            </p>
            <p>Boosts confidence through manageable challenges.</p>
          </div>
          <p></p>
          <div className="card">
            <h3>Scenario Conversations</h3>
            <p>Gives tips and tricks using AI to develop a coversation scenario.
            Available different options.</p>
          </div>
          <div className="card">
            <h3>Voice Practice</h3>
            <p>Provides real-time feedback on word count and summery of the scenario.
           </p>
           <p> Uses AI to analyze and improve speech patterns.</p>
          </div>
          <div className="card">
            <h3>Progress Tracking</h3>
            <p>Gives real-time feedback to user.
           </p>
           <p> Provides personalized suggesions to user to enhace social skills.</p>
          </div>
          <div className="card">
            <h3>Community Hub</h3>
            <p>Connects users to share expirience and tips.
           </p>
           <p>  Fosters a supportive envirnment for social growth.</p>
          </div>
          
        </div>
        <p></p>
        <img className="underjpgx"  src="socialeasemenu3gif.gif" alt="Example from Public Folder" />
        
      </section>
      <section className="services2" id="Contact">
        <h3 className="whyy">Why Choosing Us ?</h3>
        <p> </p>
        <div className="service-cards2">
          <div className="card2">
            
            <p>Our app, Social Ease, is designed to address the specific challenges faced by introverts and individuals seeking to enhance their social skills. Unlike competitors, we offer a holistic and tailored solution that bridges the gap between learning and real-world application. Here's why we stand out:
            </p>
            <p>
            Comprehensive Features: From conversation scenarios and real-world challenges to voice practice with real-time feedback, our app equips users with practical tools to boost their confidence in various social settings.

            </p>
            <p>Personalized Approach: Our personality quiz customizes the experience to suit each user's comfort level, ensuring gradual and steady progress.</p>
            <p>Inclusivity and Practicality: Whether you're overcoming shyness, preparing for professional growth, or navigating new social environments, Social Ease provides a safe and interactive platform.

            </p>
            <p>Focus on Real-Life Impact: Our app emphasizes actionable, real-world tasks, empowering users to seamlessly translate their skills into everyday interactions.</p>
            
          </div>
          
          
        </div>
        
        
        
      </section>
      <section>
        <h3 className="whyy"lass>Contact Us</h3>
      </section>
     


    
      <section className="sectionv">
        <img className="underjpgi" src="socialeasecomingsoon.png" alt="Example from Public Folder" />
        <div className="comingsoon">
          <h6>Mobile App</h6>
          <p></p>
          <h6>
          <p>
              Coming Soon! <p></p>
              Social Ease will soon be available on your smartphones, Let's Improve your English Communication Skills </p>
          </h6>
          
        </div>
      </section>

     

      
        
      

        
      
      

      

     

      <footer className="footer">
        
        
        <p>&copy; 2025 Social Ease. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
