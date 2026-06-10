import React from 'react';
import './LoadingIntro.css';

const LoadingIntro = () => {
  return (
    <div className="intro-container">
      {/* Background Atmosphere */}
      <div className="cyber-grid"></div>
      <div className="aura-glow"></div>
      
      {/* Portal Container */}
      <div className="intro-screen portal-frame">
        <div className="light-streak"></div>
        <div className="intro-content">
          <h1 className="intro-text">Code Zone</h1>
          <div className="progress-bar-container">
            <div className="progress-bar-fill">
              <div className="comet-head"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingIntro;
