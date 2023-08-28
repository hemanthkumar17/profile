import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Profile</h1>
        <img
          src="static\images\profile_image.jpeg" // Replace with your profile image URL
          alt="Profile"
          style={{ width: '200px', borderRadius: '50%' }}
        />
        <p>
          Hi! I'm Hemanth Kumar, a Student at Rice University. I love Deep Learning and Tinkering with technologies.
        </p>
        <div>
          <a
            href="https://github.com/hemanthkumar17"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub Profile
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
