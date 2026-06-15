import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ecommerce from './pages/Ecommerce';

// Simple initial placeholders for pages 2 and 3 so the app doesn't crash on build
const AiGenerator = () => (
  <div style={{ padding: '40px', color: '#fff', textAlign: 'center' }}>
    <h1>🤖 AI Idea Generator</h1>
    <p>Application logic wireframing coming in the next setup step.</p>
    <a href="/" style={{ color: '#10b981', fontWeight: 'bold', textDecoration: 'none' }}>← Back to Portfolio</a>
  </div>
);

const TaskManager = () => (
  <div style={{ padding: '40px', color: '#fff', textAlign: 'center' }}>
    <h1>📋 Task Management Kanban Board</h1>
    <p>Application logic wireframing coming soon.</p>
    <a href="/" style={{ color: '#10b981', fontWeight: 'bold', textDecoration: 'none' }}>← Back to Portfolio</a>
  </div>
);

function App() {
  const themes = ['dark-blue', 'light-mode', 'slate-grey', 'emerald-cyber'];
  const [themeIndex, setThemeIndex] = useState(0);

  const cycleTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  const currentThemeClass = themes[themeIndex];

  return (
    <Router>
      <div className={`app-container ${currentThemeClass}`}>
        <Routes>
          {/* Main Portfolio Landing Page Route */}
          <Route 
            path="/" 
            element={<Home cycleTheme={cycleTheme} currentThemeClass={currentThemeClass} />} 
          />
          
          {/* Standalone Project Pages Routes */}
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/ai-generator" element={<AiGenerator />} />
          <Route path="/task-manager" element={<TaskManager />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;