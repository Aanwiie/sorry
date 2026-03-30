import React, { useState } from 'react';

export default function ApologyWebsite() {
  const [forgiven, setForgiven] = useState(false);
  const [noClicks, setNoClicks] = useState(0);

  const handleNoClick = () => {
    setNoClicks(noClicks + 1);
  };

  return (
    <div className="min-h-screen bg-[#6b1518] flex flex-col items-center justify-center py-12 px-4 font-sans text-white overflow-x-hidden relative">
      
      {/* Floating Hearts Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        .font-pacifico { font-family: 'Pacifico', cursive; }
        
        @keyframes float {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .heart-float {
          position: fixed;
          font-size: 2rem;
          animation: float 8s infinite linear;
          pointer-events: none;
          z-index: 0;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-in;
        }
      `}} />

      {/* Floating Hearts Container */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="heart-float" style={{left: '5%', animationDelay: '0s'}}>❤️</div>
        <div className="heart-float" style={{left: '15%', animationDelay: '1s'}}>❤️</div>
        <div className="heart-float" style={{left: '25%', animationDelay: '2s'}}>❤️</div>
        <div className="heart-float" style={{left: '35%', animationDelay: '3s'}}>❤️</div>
        <div className="heart-float" style={{left: '45%', animationDelay: '4s'}}>❤️</div>
        <div className="heart-float" style={{left: '55%', animationDelay: '5s'}}>❤️</div>
        <div className="heart-float" style={{left: '65%', animationDelay: '6s'}}>❤️</div>
        <div className="heart-float" style={{left: '75%', animationDelay: '7s'}}>❤️</div>
        <div className="heart-float" style={{left: '85%', animationDelay: '1.5s'}}>❤️</div>
        <div className="heart-float" style={{left: '95%', animationDelay: '2.5s'}}>❤️</div>
      </div>

      {/* Content Container - Centered */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center space-y-12">
        {/* Main Apology Section - Glassmorphism Card */}
        <div className="max-w-3xl w-full mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12 mb-12 text-center">
          
          <h1 className="font-pacifico text-5xl sm:text-6xl text-white mb-8 drop-shadow-lg">
            BEBE ! I AM SORRY
          </h1>

          {/* Picture Placeholder */}
          <div className="w-56 h-56 sm:w-72 sm:h-72 mx-auto bg-white/20 border-4 border-white/40 rounded-2xl mb-8 flex items-center justify-center overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <span className="text-white font-medium px-4 text-center">Your cute picture together goes here</span>
              {/* <img src="/your-image-path.jpg" alt="Us" className="object-cover w-full h-full" /> */}
          </div>
          
          {!forgiven ? (
            <div className="animate-fade-in">
              <p className="text-xl sm:text-2xl mb-10 text-white font-medium leading-relaxed px-4">
                I really messed up, and I hate knowing that I upset you. You mean everything to me, and I want to make things right. Can you find it in your heart to forgive me?
              </p>

              {/* Switches / Buttons Container */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                
                {/* 'I Forgive You' Transparent Card Switch */}
                <button 
                  onClick={() => setForgiven(true)}
                  className="px-8 py-4 bg-white/20 hover:bg-white/30 border border-white/40 backdrop-blur-md text-white text-xl font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Yes, I forgive you ❤️
                </button>
                
                {/* 'Please No' Transparent Card Switch */}
                <button 
                  onClick={handleNoClick}
                  style={{ transform: `scale(${Math.max(0.5, 1 - noClicks * 0.1)})` }}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white text-xl font-bold rounded-2xl transition-all shadow-md"
                >
                  {noClicks === 0 ? "Please no 🥺" : noClicks === 1 ? "Are you sure?" : "Pretty please? 🥺"}
                </button>

              </div>
            </div>
          ) : (
            <div className="animate-fade-in py-8">
              <h2 className="font-pacifico text-5xl text-white mb-4 drop-shadow-lg">Yay! Thank You!</h2>
              <p className="text-2xl text-white font-medium">I love you so much. Let me make it up to you! 🥰</p>
            </div>
          )}
        </div>

        {/* 10 Things I Love About You Section - Glassmorphism Card */}
        <div className="max-w-3xl w-full mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12 text-center">
          <h2 className="font-pacifico text-4xl sm:text-5xl text-white mb-8 drop-shadow-lg">
            10 things I love about you
          </h2>
          
          <div className="max-w-md mx-auto">
            <ul className="text-left space-y-4 text-lg sm:text-xl font-semibold text-white">
              <li className="bg-white/10 p-4 rounded-xl shadow-sm border border-white/20 backdrop-blur-sm">1. That you love me</li>
              <li className="bg-white/10 p-4 rounded-xl shadow-sm border border-white/20 backdrop-blur-sm">2. That you keep up with my shit</li>
              <li className="bg-white/10 p-4 rounded-xl shadow-sm border border-white/20 backdrop-blur-sm">3. You are handsome</li>
              <li className="bg-white/10 p-4 rounded-xl shadow-sm border border-white/20 backdrop-blur-sm">4. You are too handsome</li>
              <li className="bg-white/10 p-4 rounded-xl shadow-sm border border-white/20 backdrop-blur-sm">5. The sex is godd</li>
              <li className="bg-white/10 p-4 rounded-xl shadow-sm border border-white/20 backdrop-blur-sm">6. You always feed me</li>
              <li className="bg-white/10 p-4 rounded-xl shadow-sm border border-white/20 backdrop-blur-sm">7. You are kind</li>
              <li className="bg-white/10 p-4 rounded-xl shadow-sm border border-white/20 backdrop-blur-sm">8. You are bholu bandar</li>
              <li className="bg-white/10 p-4 rounded-xl shadow-sm border border-white/20 backdrop-blur-sm">9. You have me</li>
              <li className="bg-white/10 p-4 rounded-xl shadow-sm border border-white/20 backdrop-blur-sm">10. You're smart & talented</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}