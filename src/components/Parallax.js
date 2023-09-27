// src/components/Parallax.js
import React from 'react';
import './Parallax.css';
import Box from '@mui/material/Box';

const Parallax = () => {
  return (
    <div className="parallax">
      <div className="parallax-layer background"></div>
      <div className="parallax-layer foreground">
        <h1>Welcome to Parallax Effect</h1>
        <p>Scroll down to see the effect in action.</p>
      </div>
      <div className='parallax-layer foreground'>
        <Box>
            
        </Box>
      </div>
      {/* Add more content layers as needed */}
    </div>
  );
};

export default Parallax;
