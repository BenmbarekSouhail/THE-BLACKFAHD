import { useState } from 'react';
import Metrics from './Metrics';
import { X, Maximize2 } from 'lucide-react';

// Assets Imports
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import img7 from '../assets/img7.jpeg';
import img8 from '../assets/img8.jpeg';
import img9 from '../assets/img9.jpeg';

import img10 from "../assets/img10.jpeg";
import img11 from "../assets/img11.jpeg";
import img12 from "../assets/img12.jpeg";
import img13 from "../assets/img13.jpeg";
import img14 from "../assets/img14.jpeg";

const Transformations = () => {
  const [activeLightbox, setActiveLightbox] = useState(null);

  const showcaseCards = [
    { 
     
      duration: "3 Months", 
      meta: "DAY 0 / MUSCLE GAIN & FAT LOSS / Day 104",
      combinedImg: img1 
    },
    { 
      
      duration: "3 Months", 
      meta: "DAY 0 / BODY RECOMP / DAY 90",
      combinedImg: img2 
    },
    { 
       
      duration: "1 Month", 
      meta: "DAY 0 / FAT LOSS / Day 30",
      combinedImg: img3 
    },
    { 
      
      duration: "1 Months", 
      meta: "DAY 0 / FAT LOSS / Day 30",
      combinedImg: img4 
    },
    { 
       
      duration: "3 Months", 
      meta: "DAY 0 / FAT LOSS / Day 90",
      combinedImg: img5 
    },
    { 
      
      duration: "WEEK 14", 
      meta: "DAY 0 / MUSCLE GAIN / 98 Days",
      combinedImg: img6 
    },
    {  duration: "5 Months", meta: "DAY 0 / MUSCLE GAIN / 180 Days", combinedImg: img7 },
    {  duration: "14 Weeks", meta: "DAY 0 / MUSCLE GAIN / 98 Days", combinedImg: img8 },
    {  duration: "14 Weeks", meta: "DAY 0 / MUSCLE GAIN / 98 Days", combinedImg: img10 },
    {  duration: "14 Weeks", meta: "DAY 0 / MUSCLE GAIN / 98 Days", combinedImg: img11 },
    {  duration: "2 Months", meta: "DAY 0 / MUSCLE GAIN / 60 Days", combinedImg: img12 },
    {  duration: "2 Months", meta: "DAY 0 / FAT LOSS / 60 DDays", combinedImg: img13 },
    { 
      
      duration: "90 Day", 
      meta: "DAY 0 / MASS & CONDITIONING / DAY 90",
      combinedImg: img14 
    },
  ];

  return (
    <section id="transformations" className="py-32 bg-[#0d0d10] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="mb-20 text-center lg:text-left">
          <div className="text-xs uppercase tracking-widest text-accent-gold font-bold mb-3">Proven Results</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Top Physical Transformations</h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {showcaseCards.map((card, i) => (
            <div 
              key={i} 
              onClick={() => setActiveLightbox(card)}
              className="glass-panel rounded-3xl border border-white/5 overflow-hidden group hover:border-accent-gold/40 transition-all duration-500 flex flex-col cursor-pointer bg-[#111115] relative"
            >
              
              {/* Image Container Layout */}
              <div className="aspect-[4/3] bg-black border-b border-white/5 relative overflow-hidden">
                
                <div className="w-full h-full flex divide-x divide-white/5">
                  {/* Left Side (Before Image Segment) */}
                  <div className="w-1/2 h-full relative overflow-hidden">
                    {card.combinedImg && (
                      <div 
                        className="absolute inset-0 w-[200%] h-full bg-cover bg-left grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                        style={{ backgroundImage: `url(${card.combinedImg})` }}
                      />
                    )}
                  </div>

                  {/* Right Side (After Image Segment) */}
                  <div className="w-1/2 h-full relative overflow-hidden">
                    {card.combinedImg && (
                      <div 
                        className="absolute inset-0 w-[200%] h-full bg-cover bg-right grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                        style={{ 
                          backgroundImage: `url(${card.combinedImg})`,
                          left: '-100%'
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* --- PREMIUM STRATEGIC BLACK FADE OVERLAYS --- */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-[2]"></div>
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-[2] pointer-events-none"></div>

                {/* --- HOVER TACTICAL EXPANSION INDICATOR --- */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500 z-[3]">
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Before / After unified bottom alignment badges */}
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-white/80 px-3 py-1.5 rounded-lg border border-white/10 select-none z-10 transition-all">
                  Before
                </div>

                <div className="absolute bottom-4 right-4 bg-white text-black text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-xl select-none z-10 group-hover:bg-accent-gold group-hover:text-black transition-colors duration-300">
                  After
                </div>

              </div>

              {/* Info Frame */}
              <div className="p-6 bg-[#111115] mt-auto flex flex-col gap-2 relative z-10 border-t border-white/[0.02]">
                <div className="flex items-start justify-between gap-4">
                  <div className="truncate">
                    <div className="text-white font-bold text-lg tracking-tight truncate group-hover:text-accent-gold transition-colors duration-300">
                      {card.title}
                    </div>
                    {card.meta && (
                      <div className="text-[10px] uppercase font-bold tracking-wider text-white/30 mt-0.5">
                        {card.meta}
                      </div>
                    )}
                  </div>
                  <div className="text-accent-gold text-sm font-medium tracking-wide bg-accent-gold/5 border border-accent-gold/10 px-2.5 py-1 rounded-md shrink-0">
                    {card.duration}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        <Metrics />

      </div>

      {/* --- LIGHTBOX MODAL CONTAINER --- */}
      {activeLightbox && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveLightbox(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/60 hover:text-white bg-white/5 hover:bg-white/15 p-3 rounded-full transition-all border border-white/10"
            onClick={() => setActiveLightbox(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="w-full max-w-4xl bg-[#111115] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full relative bg-black/40 flex items-center justify-center max-h-[70vh] overflow-hidden">
              <img 
                src={activeLightbox.combinedImg} 
                alt={activeLightbox.title} 
                className="w-full h-auto max-h-[70vh] object-contain"
              />

              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-xs font-black uppercase tracking-widest text-white px-4 py-2 rounded-xl border border-white/10 select-none">
                Before
              </div>
              
              <div className="absolute bottom-4 right-4 bg-accent-gold text-black text-xs font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-xl select-none">
                After
              </div>
            </div>

            <div className="p-6 border-t border-white/5 bg-[#0d0d10] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-0.5">{activeLightbox.title}</h3>
                
                {activeLightbox.meta && (
                  <div className="text-xs uppercase font-bold tracking-wider text-white/40 mb-2">
                    {activeLightbox.meta}
                  </div>
                )}
                
                <p className="text-accent-gold text-sm font-medium">{activeLightbox.duration} Complete Training Protocol</p>
              </div>
              <button 
                onClick={() => setActiveLightbox(null)}
                className="bg-white hover:bg-accent-gold text-black font-bold px-6 py-2.5 rounded-xl text-sm transition-all shadow-lg"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Transformations;