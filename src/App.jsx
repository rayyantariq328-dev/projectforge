import React, { useState } from 'react';
import './App.css';

function App() {
  const themes = ['dark-blue', 'light-mode', 'slate-grey', 'emerald-cyber'];
  const [themeIndex, setThemeIndex] = useState(0);

  const cycleTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  const currentThemeClass = themes[themeIndex];

  // Custom inline SVG icons for a premium, break-free UI look
  const getThemeIcon = () => {
    switch (currentThemeClass) {
      case 'dark-blue':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        );
      case 'light-mode':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        );
      case 'slate-grey':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l10 5.8v11.5L12 22 2 16.3V7.8z"></path>
          </svg>
        );
      case 'emerald-cyber':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`app-container ${currentThemeClass}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">Rayyan.dev</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="theme-btn" onClick={cycleTheme} title="Change Theme">
          {getThemeIcon()}
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Rayyan</h1>
          <p>Full Stack Developer crafting cool animated experiences & high-quality video content</p>
          <a href="#projects" className="cta-btn">Explore My Work</a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-header">
              <span className="skill-title">HTML / CSS / JS</span>
              <span className="skill-percentage">90%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-header">
              <span className="skill-title">React</span>
              <span className="skill-percentage">80%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-header">
              <span className="skill-title">Video Editing</span>
              <span className="skill-percentage">85%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-img-placeholder ecom-bg"></div>
            <h3>E-Commerce Platform</h3>
            <p>Modern online store with cart, payments, and smooth animations. Built with React & Node.</p>
            <a href="#projects" className="view-link">View Live →</a>
          </div>
          <div className="project-card">
            <div className="project-img-placeholder ai-bg"></div>
            <h3>AI Idea Generator</h3>
            <p>Interactive tool that generates startup ideas using smart suggestions.</p>
            <a href="#projects" className="view-link">View Live →</a>
          </div>
          <div className="project-card">
            <div className="project-img-placeholder task-bg"></div>
            <h3>Task Management App</h3>
            <p>Beautiful Kanban board with drag & drop, dark mode, and real-time updates.</p>
            <a href="#projects" className="view-link">View Live →</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2>Get In Touch</h2>
          <div className="contact-buttons">
            <a href="mailto:rayyantariq328@gmail.com" className="contact-btn gmail-btn">
              📩 Gmail
            </a>
            <a href="https://discord.com/users/rayyan_5820" target="_blank" rel="noreferrer" className="contact-btn discord-btn">
              💬 Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;