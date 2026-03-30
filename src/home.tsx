import React, { useState } from 'react';

export default function ApologyWebsite() {
  const [forgiven, setForgiven] = useState(false);
  const [noClicks, setNoClicks] = useState(0);

  const handleNoClick = () => {
    setNoClicks(noClicks + 1);
  };

  // Pastel Red Color Variable
  const pastelRed = "#FFC0CB"; 

  return (
    <div 
      style={{ backgroundColor: pastelRed, color: 'white' }} 
      className="min-h-screen flex flex-col items-center justify-center py-12 px-4 font-sans overflow-x-hidden relative"
    >
      
      {/* Floating Hearts Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        .font-pacifico { font-family: 'Pacifico', cursive; }
        
        @keyframes float {
          0% { transform: translateY(100vh) translateX(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100vh) translateX(100px) rotate(360deg); opacity: 0; }
        }
        
        .heart-float {
          position: fixed;
          font-size: 2rem;
          animation: float 8s infinite linear;
          pointer-events: none;
          z-index: 0;
        }
      `}} />

      {/* Floating Hearts */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="heart-float" style={{left: `${i * 8 + 4}%`, animationDelay: `${i * 0.7}s`}}>❤️</div>
        ))}
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center space-y-12">
        
        {/* Main Card - Using bg-black/20 to make white text pop on the light red bg */}
        <div className="max-w-3xl w-full mx-auto bg-black/20 backdrop-blur-lg border border-white/40 rounded-3xl shadow-2xl p-8 sm:p-12 text-center">
          
          <h1 className="font-pacifico text-5xl sm:text-6xl mb-8 drop-shadow-md text-white">
            BEBE ! I AM SORRY
          </h1>

          <div className="w-56 h-56 sm:w-72 sm:h-72 mx-auto bg-white/20 border-4 border-white/60 rounded-2xl mb-8 flex items-center justify-center overflow-hidden shadow-lg transform rotate-2">
              <img src="/image.png" alt="Us" className="object-cover w-full h-full" />
          </div>
          
          {!forgiven ? (
            <div>
              <p className="text-xl sm:text-2xl mb-10 font-bold text-white leading-relaxed">
                I really messed up, and I hate knowing that I upset you. You mean everything to me. Can you find it in your heart to forgive me?
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <button 
                  onClick={() => setForgiven(true)}
                  className="px-8 py-4 bg-white text-pink-500 hover:bg-pink-100 text-xl font-black rounded-2xl transition-all shadow-xl hover:-translate-y-1"
                >
                  Yes, I forgive you ❤️
                </button>
                
                <button 
                  onClick={handleNoClick}
                  style={{ transform: `scale(${Math.max(0.4, 1 - noClicks * 0.1)})` }}
                  className="px-8 py-4 bg-white/10 border-2 border-white text-white text-xl font-bold rounded-2xl transition-all"
                >
                  {noClicks === 0 ? "Please no 🥺" : noClicks === 1 ? "Are you sure?" : "Pretty please? 🥺"}
                </button>
              </div>
            </div>
          ) : (
            <div className="py-8">
              <h2 className="font-pacifico text-5xl text-white mb-4">Yay! Thank You!</h2>
              <p className="text-2xl text-white font-bold">I love you so much. Let me make it up to you! 🥰</p>
            </div>
          )}
        </div>

        {/* 10 Things List */}
        <div className="max-w-3xl w-full mx-auto bg-black/20 backdrop-blur-lg border border-white/40 rounded-3xl shadow-2xl p-8 sm:p-12 text-center">
          <h2 className="font-pacifico text-4xl sm:text-5xl text-white mb-8">
            10 things I love about you
          </h2>
          
          <div className="max-w-md mx-auto">
            <ul className="text-left space-y-4 text-lg sm:text-xl font-bold text-white">
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
              ].map((item, index) => (
                <li key={index} className="bg-white/20 p-4 rounded-xl border border-white/30 text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}