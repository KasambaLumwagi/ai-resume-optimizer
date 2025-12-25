import React from 'react';
import { Sparkles, FileText } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass-panel" style={{
      position: 'fixed',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 3rem)',
      maxWidth: '1200px',
      zIndex: 50,
      padding: '1rem 2rem',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
          padding: '0.5rem',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Sparkles size={20} color="white" />
        </div>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '1.25rem',
          letterSpacing: '-0.02em'
        }}>
          Resume<span className="text-gradient">AI</span>
        </span>
      </div>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem' }}>Features</a>
        <button
          onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
          style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}
        >
          How it works
        </button>
        <button
          onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
          style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}
        >
          Pricing
        </button>
      </div>

      <button className="glow-button" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
