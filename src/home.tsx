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
      overflowX: 'hidden',
      padding: '20px'
    }}>
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        .font-pacifico { font-family: 'Pacifico', cursive; }
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .heart { 
          position: fixed; 
          font-size: 2rem; 
          animation: float 8s infinite linear; 
          z-index: 0; 
          pointer-events: none;
        }
        .glass-card { 
          background: rgba(0, 0, 0, 0.2); 
          backdrop-filter: blur(10px); 
          border: 1px solid rgba(255, 255, 255, 0.3); 
          border-radius: 24px; 
          padding: 40px; 
          text-align: center; 
          max-width: 600px; 
          z-index: 10;
          position: relative;
          margin-bottom: 40px;
        }
        .glass-card h1, .glass-card h2 {
          margin: 0 0 20px 0;
        }
        .glass-card button {
          padding: 15px 30px;
          border: none;
          border-radius: 12px;
          font-weight: bold;
          cursor: pointer;
          font-size: 16px;
          margin: 10px;
          transition: all 0.3s ease;
        }
        .yes-btn {
          background: white;
          color: #ff6b6b;
        }
        .yes-btn:hover {
          background: #ffe0e0;
          transform: translateY(-2px);
        }
        .no-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 1px solid white;
        }
        .no-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        .list-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 12px;
          margin: 8px 0;
          border-radius: 8px;
          text-align: left;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        @media (max-width: 768px) {
          .glass-card {
            padding: 20px;
            max-width: 100%;
          }
        }
      `}} />

      {/* Floating Hearts */}
      {[...Array(10)].map((_, i) => (
        <div key={i} className="heart" style={{ left: `${i * 10}%`, animationDelay: `${i * 0.5}s` }}>❤️</div>
      ))}

      {/* Main Content */}
      <div className="glass-card">
        <h1 className="font-pacifico" style={{ fontSize: '3rem', marginBottom: '20px' }}>BEBE ! I AM SORRY</h1>
        
        <div style={{
          width: '250px',
          height: '250px',
          margin: '0 auto 30px',
          border: '8px solid white',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}>
          <img src="/image.png" alt="Us together" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        
        {!forgiven ? (
          <>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px', fontWeight: 'bold', lineHeight: '1.6' }}>
              I really messed up, and I hate knowing that I upset you. You mean everything to me, and I want to make things right. Can you find it in your heart to forgive me?
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
              <button 
                className="yes-btn"
                onClick={() => setForgiven(true)}
              >
                Yes, I forgive you ❤️
              </button>
              <button 
                className="no-btn"
                onClick={handleNoClick}
                style={{ transform: `scale(${Math.max(0.5, 1 - noClicks * 0.1)})` }}
              >
                {noClicks === 0 ? "Please no 🥺" : noClicks === 1 ? "Are you sure?" : "Pretty please? 🥺"}
              </button>
            </div>
          </>
        ) : (
          <div>
            <h2 className="font-pacifico" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Yay! Thank You! 🎉</h2>
            <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>I love you so much. Let me make it up to you! 🥰</p>
          </div>
        )}
      </div>

      {/* List Section */}
      <div className="glass-card">
        <h2 className="font-pacifico" style={{ fontSize: '2rem' }}>10 things I love about you</h2>
        <ul style={{ listStyle: 'none', padding: '0', margin: '20px 0 0 0', textAlign: 'left' }}>
          <li className="list-item">1. That you love me</li>
          <li className="list-item">2. That you keep up with my shit</li>
          <li className="list-item">3. You are handsome</li>
          <li className="list-item">4. You are too handsome</li>
          <li className="list-item">5. The sex is good</li>
          <li className="list-item">6. You always feed me</li>
          <li className="list-item">7. You are kind</li>
          <li className="list-item">8. You are bholu bandar</li>
          <li className="list-item">9. You have me</li>
          <li className="list-item">10. You're smart & talented</li>
        </ul>
      </div>
    </div>
  );
}