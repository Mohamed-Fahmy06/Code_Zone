import React from 'react';
import './LoadingIntro.css';

const LoadingIntro = () => {
  return (
    <div className="intro-container">
      <div className="intro-screen">
        <div className="intro-content">
          <h1 className="intro-text">Code Zone</h1>
          <div className="progress-bar-container">
            <div className="progress-bar-fill"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingIntro;
