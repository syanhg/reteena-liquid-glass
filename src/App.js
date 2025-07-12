import React from 'react';
import './App.css';

function Team() {
  const team = [
    { name: 'Alex Yang', school: 'North London Collegiate School Jeju' },
    { name: 'Jainish Patel', school: 'Lake Minneola High School' },
    { name: 'Aarav Minocha', school: 'University of California, Berkeley' },
    { name: 'Jessica Wu', school: 'University of Rochester' },
    { name: 'Bhavya Mannani', school: 'University of California, Berkeley' },
    { name: 'Sunkalp Chandra', school: 'High Technology High School' },
    { name: 'Sanghoo Ahn', school: 'North London Collegiate School Jeju' },
    { name: 'Nathan He', school: 'Ocean Lakes High School' },
    { name: 'Ivan Ma', school: 'University of California, Berkeley' },
    { name: 'Olivia Jeon', school: 'White Oaks Secondary School' },
    { name: 'Devesh Khilnani', school: 'Thomas Edison EnergySmartCharter School' },
    { name: 'Noah Small', school: 'University of California San Diego' },
    { name: 'Ethan Yung', school: 'Rutgers University' },
    { name: 'Gautham Korrapati', school: 'College of the Canyons' },
  ];
  return (
    <div className="team-section glass-panel">
      <h2>Our Team</h2>
      <ul>
        {team.map(({ name, school }, i) => (
          <li key={i}><span className="team-name">{name}</span><span className="team-school">{school}</span></li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="liquid-bg">
      <div className="fluid-glass-card">
        <h1>Reteena</h1>
        <p>
          We are building <b>Low-Field MRI Resolution Image Enhancement Framework for Better Alzheimer's Diagnosis</b><br />
          and the <b>LLM-based Memory Repository for Reminiscence Therapy</b>.
        </p>
        <p>
          Reteena shares the same pronunciation as retina, a vital part of the eye used for vision. Like the retina, Reteena aims to provide a new perspective on Alzheimer's, illuminating pathways toward effective treatment.
        </p>
        <div className="milestones">
          <p>
            We have achieved multiple milestones:<br />
            <b>submission to MIT SOLVE</b>, <b>presentation at IEEE BigData 2024</b>,
            <b>sponsorship from Microsoft Founders Hub</b>, and accomplishments behind our innovative work.
          </p>
        </div>
        <p>
          Our team will soon launch our memory repository platform in partnership with OpenNLP labs. We continuously experiment with innovative concepts and new ideas! Leave your email below for more information.
        </p>
        <form className="liquid-form" onSubmit={e=>e.preventDefault()}>
          <input className="glass-input" placeholder="Enter your email" type="email" required />
          <button className="send-btn">Send</button>
        </form>
        <Team />
        <div className="footer">
          <div>business & general: <a href="mailto:hello@reteena.org">hello@reteena.org</a></div>
          <div>Copyright © 2025 Reteena. All rights reserved.</div>
        </div>
      </div>
      {/* You can add more liquid glass effects here or in App.css */}
    </div>
  );
}

export default App;
