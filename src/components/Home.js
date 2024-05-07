import React from 'react';
import './Home.css';
import headshot from '../assets/profile.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  // Define the openModal function
  const openModal = () => {
    // This function does nothing for now
  };

  return (
    <div className="home-container">
      <div className="content">
        <div className="text-section">
          <h1>Hello, I'm Kyle Walker</h1>
          <div className='centered'>
            <h2 style={{ marginTop: '0rem' }}>Software Engineer</h2>
          </div>
          <div className="links-container">
            <div className="flex mt-4 space-x-4">
              <a href="https://www.linkedin.com/in/walkerbkyle/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaLinkedin size="1.5em" style={{ color: 'white' }} /> {/* Set color to white */}
              </a>
              <a href="https://github.com/walkerkyle0214" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300" style={{ color: 'white', marginLeft: '1rem' }}> {/* Set color to white and added margin */}
                <FaGithub size="1.5em" />
              </a>
              <button onClick={openModal} className="hover:text-gray-300" style={{ color: 'white', marginLeft: '1rem', background: 'none', border: 'none' }}> {/* Set color to white, removed background and border */}
                <FaEnvelope size="1.5em" />
              </button>
            </div>
          </div>
        </div>
        <div className="profile">
          <img src={headshot} alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
