import React, { useState } from 'react';

export default function ApologyWebsite() {
  const [forgiven, setForgiven] = useState(false);
  const [noClicks, setNoClicks] = useState(0);

  const handleNoClick = () => setNoClicks(noClicks + 1);

  return (
    <div style={{ 
      backgroundColor: '#FFC0CB', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: 'sans-serif', 
      color: 'white', 
      position: 'relative',
      overflowX: 'hidden'
    }}>
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        .font-pacifico { font-family: 'Pacifico', cursive; }
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .heart { position: fixed; font-size: 2rem; animation: float 8s infinite linear; z-index: 0; }
        .glass-card { 
          background: rgba(0, 0, 0, 0.2); 
          backdrop-filter: blur(10px); 
          border: 1px solid rgba(255, 255, 255, 0.3); 
          border-radius: 24px; 
          padding: 40px; 
          text-align: center; 
          max-width: 600px; 
          z-index: 10;
        }
        .right-image {
          position: fixed;
          right: 50px;
          top: 50%;
          transform: translateY(-50%) rotate(5deg);
          width: 250px;
          border: 5px solid white;
          border-radius: 15px;
          z-index: 5;
        }
        @media (max-width: 1024px) {
          .right-image { position: relative; right: 0; top: 0; transform: none; margin-bottom: 20px; }
        }
      `}} />

      {/* Floating Hearts */}
      {[...Array(10)].map((_, i) => (
        <div key={i} className="heart" style={{ left: `${i * 10}%`, animationDelay: `${i * 0.5}s` }}>❤️</div>
      ))}

      {/* Main Content */}
      <div className="glass-card">
        <h1 className="font-pacifico" style={{ fontSize: '3rem', marginBottom: '20px' }}>BEBE ! I AM SORRY</h1>
        
        {!forgiven ? (
          <>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px', fontWeight: 'bold' }}>
              I really messed up. You mean everything to me. Forgive me?
            </p>
            <button 
              onClick={() => setForgiven(true)}
              style={{ padding: '15px 30px', background: 'white', color: '#ff6b6b', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', marginRight: '10px' }}
            >
              Yes, I forgive you ❤️
            </button>
            <button 
              onClick={handleNoClick}
              style={{ 
                padding: '15px 30px', 
                background: 'rgba(255,255,255,0.2)', 
                color: 'white', 
                border: '1px solid white', 
                borderRadius: '12px',
                transform: `scale(${Math.max(0.5, 1 - noClicks * 0.1)})`
              }}
            >
              {noClicks === 0 ? "No 🥺" : "Are you sure?"}
            </button>
          </>
        ) : (
          <h2 className="font-pacifico" style={{ fontSize: '2.5rem' }}>Yay! I love you! 🥰</h2>
        )}
      </div>

      {/* Extreme Right Image */}
      <img src="/image.png" alt="Us" className="right-image" />

      {/* List Section */}
      <div className="glass-card" style={{ marginTop: '40px' }}>
        <h2 className="font-pacifico">10 things I love about you</h2>
        <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
          <li style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', margin: '5px 0', borderRadius: '8px' }}>1. That you love me</li>
          <li style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', margin: '5px 0', borderRadius: '8px' }}>2. That you keep up with my shit</li>
          {/* ... Add the rest of your list items here ... */}
        </ul>
      </div>
    </div>
  );
}