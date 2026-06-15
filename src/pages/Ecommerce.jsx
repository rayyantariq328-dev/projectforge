import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Ecommerce() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Cyber Minimalist Keyboard', price: 129, img: '⌨️' },
    { id: 2, name: 'Ergonomic Precision Mouse', price: 79, img: '🖱️' },
    { id: 3, name: 'Ultra-Wide Curved Monitor', price: 349, img: '🖥️' }
  ];

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', color: '#fff' }}>
      <Link to="/" style={{ color: '#10b981', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Portfolio</Link>
      <h1 style={{ marginTop: '20px' }}>🛒 ProForge Premium Shop</h1>
      
      <div style={{ display: 'flex', gap: '30px', marginTop: '30px', flexWrap: 'wrap' }}>
        <div style={{ flex: 2, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
          {products.map(p => (
            <div key={p.id} style={{ background: '#064e3b', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem' }}>{p.img}</div>
              <h3>{p.name}</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#10b981' }}>${p.price}</p>
              <button onClick={() => addToCart(p)} style={{ background: '#10b981', color: '#022c22', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Add to Order</button>
            </div>
          ))}
        </div>
        
        <div style={{ flex: 1, background: '#172033', padding: '20px', borderRadius: '12px', minWidth: '280px' }}>
          <h3>Your Order Summary</h3>
          {cart.length === 0 ? <p>Cart is empty</p> : cart.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
              <span>{item.name} (x{item.qty})</span>
              <span>${item.price * item.qty}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}