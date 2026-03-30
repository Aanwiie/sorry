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
      padding: '40px 20px'
    }}>
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        .font-pacifico { font-family: 'Pacifico', cursive; }
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .heart { position: fixed; font-size: 2rem; animation: float 8s infinite linear; z-index: 0; pointer-events: none; }
        .glass-card { 
          background: rgba(0, 0, 0, 0.15); 
          backdrop-filter: blur(12px); 
          border: 1px solid rgba(255, 255, 255, 0.4); 
          border-radius: 30px; 
          padding: 40px; 
          text-align: center; 
          max-width: 650px; 
          width: 100%;
          z-index: 10;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          margin-bottom: 30px;
        }
        .right-image-container {
          position: fixed;
          right: 40px;
          top: 50%;
          transform: translateY(-50%) rotate(5deg);
          width: 280px;
          height: 280px;
          border: 8px solid white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
          z-index: 5;
          background: white;
        }
        .btn-yes { padding: 15px 30px; background: white; color: #ff6b6b; border: none; border-radius: 15px; font-weight: 900; cursor: pointer; font-size: 1.2rem; transition: 0.3s; }
        .btn-no { padding: 15px 30px; background: rgba(255,255,255,0.2); color: white; border: 2px solid white; border-radius: 15px; font-weight: bold; cursor: pointer; transition: 0.3s; }
        @media (max-width: 1200px) {
          .right-image-container { position: relative; right: 0; top: 0; transform: none; margin: 20px auto; width: 220px; height: 220px; }
        }
      `}} />

      {/* Floating Hearts */}
      {[...Array(12)].map((_, i) => (
        <div key={i} className="heart" style={{ left: `${i * 8}%`, animationDelay: `${i * 0.6}s` }}>❤️</div>
      ))}

      {/* Extreme Right Image */}
      <div className="right-image-container">
        <img src="/image.png" alt="Us" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Main Content */}
      <div className="glass-card">
        <h1 className="font-pacifico" style={{ fontSize: '3.5rem', marginBottom: '20px', textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
          BEBE ! I AM SORRY
        </h1>
        
        {!forgiven ? (
          <>
            <p style={{ fontSize: '1.4rem', marginBottom: '35px', fontWeight: '600', lineHeight: '1.6' }}>
              I really messed up, and I hate knowing that I upset you. You mean everything to me. Forgive me?
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => setForgiven(true)} className="btn-yes">Yes, I forgive you ❤️</button>
              <button 
                onClick={handleNoClick} 
                className="btn-no"
                style={{ transform: `scale(${Math.max(0.4, 1 - noClicks * 0.1)})` }}
              >
                {noClicks === 0 ? "Please no 🥺" : noClicks === 1 ? "Are you sure?" : "Pretty please? 🥺"}
              </button>
            </div>
          </>
        ) : (
          <div style={{ padding: '20px' }}>
            <h2 className="font-pacifico" style={{ fontSize: '3rem' }}>Yay! Thank You!</h2>
            <p style={{ fontSize: '1.5rem' }}>I love you so much. Let me make it up to you! 🥰</p>
          </div>
        )}
      </div>

      {/* 10 Things List */}
      <div className="glass-card">
        <h2 className="font-pacifico" style={{ fontSize: '2.5rem', marginBottom: '25px' }}>10 things I love about you</h2>
        <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, fontSize: '1.2rem' }}>
          {[
            "1. That you love me",
            "2. That you keep up with my shit",
            "3. You are handsome",
            "4. You are too handsome",
            "5. The sex is good",
            "6. You always feed me",
            "7. You are kind",
            "8. You are bholu bandar",
            "9. You have me",
            "10. You're smart & talented"
          ].map((item, idx) => (
            <li key={idx} style={{ background: 'rgba(255,255,255,0.15)', padding: '12px 20px', margin: '8px 0', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)' }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}