import React, { useState } from 'react';
import './App.css';

function App() {
  const themes = ['dark-blue', 'light-mode', 'slate-grey', 'emerald-cyber'];
  const [themeIndex, setThemeIndex] = useState(0);
  
  // Track which project modal is currently open ('ecom', 'ai', 'task', or null)
  const [activeProject, setActiveProject] = useState(null);

  // E-Commerce Mini State Management
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    { id: 1, name: 'Cyber Minimalist Keyboard', price: 129, img: '⌨️' },
    { id: 2, name: 'Ergonomic Precision Mouse', price: 79, img: '🖱️' },
    { id: 3, name: 'Ultra-Wide Curved Monitor', price: 349, img: '🖥️' }
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  const cycleTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  const currentThemeClass = themes[themeIndex];

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
          {/* E-Commerce Card */}
          <div className="project-card">
            <div className="project-img-placeholder ecom-bg"></div>
            <h3>E-Commerce Platform</h3>
            <p>Modern online store with cart, payments, and smooth animations. Built with React & Node.</p>
            <button onClick={() => setActiveProject('ecom')} className="modal-trigger-btn">View Live →</button>
          </div>
          
          {/* AI Idea Generator Card */}
          <div className="project-card">
            <div className="project-img-placeholder ai-bg"></div>
            <h3>AI Idea Generator</h3>
            <p>Interactive tool that generates startup ideas using smart suggestions.</p>
            <button onClick={() => alert('AI Project working code coming next!')} className="modal-trigger-btn">View Live →</button>
          </div>
          
          {/* Task Management Card */}
          <div className="project-card">
            <div className="project-img-placeholder task-bg"></div>
            <h3>Task Management App</h3>
            <p>Beautiful Kanban board with drag & drop, dark mode, and real-time updates.</p>
            <button onClick={() => alert('Task Project working code coming soon!')} className="modal-trigger-btn">View Live →</button>
          </div>
        </div>
      </section>

      {/* ==========================================
         PROJECT MODAL SUB-APPS (E-COMMERCE PREVIEW)
         ========================================== */}
      {activeProject === 'ecom' && (
        <div className="modal-overlay">
          <div className="modal-window">
            <div className="modal-header">
              <h2>🛒 ProForge Shop (Live App Preview)</h2>
              <button className="close-modal-btn" onClick={() => setActiveProject(null)}>✕ Close App</button>
            </div>

            <div className="ecom-workspace">
              {/* Top Navigation Panel inside the shop */}
              <div className="ecom-nav">
                <span>Displaying: 3 High-End Perks</span>
                <button className="cart-toggle-btn" onClick={() => setIsCartOpen(!isCartOpen)}>
                  💼 View Cart ({cartCount})
                </button>
              </div>

              <div className="ecom-layout-split">
                {/* Product Catalog Grid */}
                <div className="products-showcase">
                  {products.map((product) => (
                    <div key={product.id} className="item-shelf-card">
                      <div className="item-graphic">{product.img}</div>
                      <h4>{product.name}</h4>
                      <p className="item-price">${product.price}</p>
                      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                        Add To Order
                      </button>
                    </div>
                  ))}
                </div>

                {/* Shopping Cart Drawer Side-panel */}
                {isCartOpen && (
                  <div className="cart-checkout-panel">
                    <h3>Your Cart Order</h3>
                    {cart.length === 0 ? (
                      <p className="empty-cart-text">Your order drawer is empty.</p>
                    ) : (
                      <div className="cart-items-wrapper">
                        {cart.map((item) => (
                          <div key={item.id} className="cart-list-row">
                            <span className="row-title">{item.img} {item.name} (x{item.qty})</span>
                            <div className="row-actions">
                              <span className="row-cost">${item.price * item.qty}</span>
                              <button className="remove-row-btn" onClick={() => removeFromCart(item.id)}>✕</button>
                            </div>
                          </div>
                        ))}
                        <div className="cart-summary-total">
                          <span>Total Amount:</span>
                          <strong>${cartTotal}</strong>
                        </div>
                        <button className="checkout-final-btn" onClick={() => alert('Order complete! This simulates a functional Stripe gateway.')}>
                          Proceed to Payment Gate →
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section - Fully Functional Form */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">Have a project in mind or want to collaborate? Drop me a message!</p>
          
          <form action="https://formspree.io/f/YOUR_UNIQUE_FORM_ID" method="POST" className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="john@example.com" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Hey Rayyan, love your portfolio..."></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message 🚀</button>
          </form>

          <div className="contact-divider">or connect via</div>

          <div className="contact-buttons">
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