import { ChevronDown } from 'lucide-react';

const LeftScrollIndicator = () => {
  return (
    /* Increased container width from w-16 to w-24 to handle the larger 30% scale profile safely */
    <div className="fixed left-0 top-0 h-screen w-24 hidden xl:flex flex-col items-center justify-between py-12 z-50 pointer-events-none select-none border-r border-white/[0.02]">
      
      {/* Top Section — Scaled Branding Anchor */}
      <div className="text-[12px] text-white/20 tracking-[0.3em] uppercase font-black rotate-180 [writing-mode:vertical-lr]">
        aesthetic // 2026
      </div>

      {/* Middle Section — Enhanced Looping Tactical Scroll Track */}
      <div className="flex flex-col items-center gap-8 my-auto">
        
        {/* Inverted Text String Orientation via standard 'rotate-180' utility manipulation */}
        <span className="text-[12px] tracking-[0.5em] uppercase font-bold text-white/40 [writing-mode:vertical-lr] rotate-180 translate-y-2">
          SCROLL TO EXPLORE
        </span>

        {/* Dynamic Masked Line Track — Length increased by 30% (from h-24 to h-32) */}
        <div className="w-[1.5px] h-32 bg-white/5 relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-accent-gold to-transparent animate-scroll-line-custom"></div>
        </div>
      </div>

      {/* Bottom Section — Scaled Looping Infinite Chevron Action */}
      <div className="text-accent-gold/60 animate-bounce-subtle-custom flex flex-col items-center justify-center">
        <ChevronDown className="w-6 h-6 stroke-[2.5]" />
      </div>

    </div>
  );
};

export default LeftScrollIndicator;