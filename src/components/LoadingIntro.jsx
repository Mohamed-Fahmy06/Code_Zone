import { useState } from 'react';
import './LoadingIntro.css';

const LoadingIntro = () => {
  // Generate 20 random particles once on initialization
  const [particles] = useState(() => 
    Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${10 + Math.random() * 20}s`,
      size: `${1 + Math.random() * 3}px`,
    }))
  );

  return (
    <div className="intro-container">
      {/* Background Atmosphere */}
      <div className="cyber-grid-wrap">
        <div className="cyber-grid"></div>
      </div>
      <div className="aura-glow"></div>
      
      {/* Particle System */}
      <div className="particle-system">
        {particles.map((p) => (
          <div
            key={p.id}
            className="data-mote"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>
      
      {/* Portal Container */}
      <div className="intro-screen portal-frame">
        <div className="light-streak"></div>
        <div className="intro-content">
          <div className="text-wrap">
            <h1 className="intro-text">Code Zone</h1>
            <div className="text-glow-breath"></div>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar-fill">
              <div className="comet-head"></div>
              <div className="liquid-trail"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingIntro;
