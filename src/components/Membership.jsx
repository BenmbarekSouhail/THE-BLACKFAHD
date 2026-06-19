import { Check, Dumbbell, ShieldCheck, Target, Crown } from 'lucide-react';
import { translations } from '../data/translations';

const Membership = ({ lang = 'EN' }) => {
  const t = translations[lang];

  const membershipPacks = [
    {
      id: 2,
      name: t.packs.pack2.name,
      duration: t.packs.pack2.duration,
      price: "399 DT",
      ctaText: t.packs.pack2.ctaText,
      idealFor: t.packs.pack2.idealFor,
      isPopular: true,
      badgeText: t.packs.pack2.badgeText,
      included: t.packs.pack2.included,
      expectations: t.packs.pack2.expectations,
      bestFor: t.packs.pack2.bestFor,
      isVip: false
    },
    {
      id: 1,
      name: t.packs.pack1.name,
      duration: t.packs.pack1.duration,
      price: "149 DT",
      ctaText: t.packs.pack1.ctaText,
      idealFor: t.packs.pack1.idealFor,
      included: t.packs.pack1.included,
      expectations: t.packs.pack1.expectations,
      bestFor: t.packs.pack1.bestFor,
      isVip: false
    },
    {
      id: 3,
      name: t.packs.pack3.name,
      duration: t.packs.pack3.duration,
      price: "799 DT",
      ctaText: t.packs.pack3.ctaText,
      idealFor: t.packs.pack3.idealFor,
      included: t.packs.pack3.included,
      expectations: t.packs.pack3.expectations,
      bestFor: t.packs.pack3.bestFor,
      isVip: false
    },
    {
      id: 4,
      name: t.packs.pack4.name,
      duration: t.packs.pack4.duration,
      price: "1799 DT",
      ctaText: t.packs.pack4.ctaText,
      idealFor: t.packs.pack4.idealFor,
      included: t.packs.pack4.included,
      expectations: t.packs.pack4.expectations,
      bestFor: t.packs.pack4.bestFor,
      isVip: false
    },
    {
      id: 5,
      name: t.packs.pack5.name,
      duration: t.packs.pack5.duration,
      price: "Starting from 1500 DT",
      ctaText: t.packs.pack5.ctaText,
      idealFor: t.packs.pack5.idealFor,
      included: t.packs.pack5.included,
      expectations: t.packs.pack5.expectations,
      bestFor: t.packs.pack5.bestFor,
      isVip: true
    }
  ];

  return (
    <section id="membership" className="py-32 bg-[#0d0d10] scroll-mt-24 w-full">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block - Centered perfectly */}
        <div className="mb-20 text-center w-full flex flex-col items-center justify-center">
          <div className="text-xs uppercase tracking-widest text-accent-gold font-bold mb-3">{t.pricingTitle}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{t.pricingSubtitle}</h2>
        </div>

        {/* Horizontal Stack Layout */}
        <div className="flex flex-col gap-8 w-full items-center justify-center">
          {membershipPacks.map((pack) => (
            <div 
              key={pack.id} 
              className={`glass-panel rounded-3xl overflow-hidden transition-all duration-500 flex flex-col xl:flex-row relative w-full ${
                pack.isVip 
                  ? 'border-2 border-accent-gold/60 bg-[#141419] shadow-[0_0_40px_rgba(212,175,55,0.15)] scale-[1.01]' 
                  : pack.isPopular
                    ? 'border border-accent-gold/50 bg-[#111115] shadow-[0_0_30px_rgba(212,175,55,0.05)]'
                    : 'border border-white/5 bg-[#111115] hover:border-accent-gold/30'
              }`}
            >
              {/* Premium VIP Visual Overlay Indicators */}
              {pack.isVip && (
                <div className={`absolute top-0 ${lang === 'AR' ? 'left-0 rounded-br-xl' : 'right-0 rounded-bl-xl'} bg-accent-gold text-black font-black text-[10px] tracking-widest uppercase px-6 py-1.5 flex items-center gap-1.5 z-20 shadow-md`}>
                  <Crown className="w-3 h-3 fill-black" /> Premium Exclusive
                </div>
              )}
              
              {/* Left Side: Name, Price, and CTA */}
              <div className={`p-8 xl:p-12 xl:w-1/3 border-b xl:border-b-0 ${lang === 'AR' ? 'xl:border-l' : 'xl:border-r'} flex flex-col justify-between gap-8 items-center text-center xl:items-stretch xl:text-left ${
                pack.isVip ? 'bg-accent-gold/[0.02] border-accent-gold/20' : 'bg-black/20 border-white/5'
              }`}>
                <div className="w-full flex flex-col items-center xl:items-stretch">
                  {/* Big, High-Impact Popular Badge - Standardized Alignment */}
                  {pack.isPopular && (
                    <div className="mb-6 w-full flex items-center justify-center bg-accent-gold text-black font-black text-sm md:text-base tracking-widest uppercase px-6 py-3.5 rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.4)] border border-white/20">
                      🔥 {pack.badgeText}
                    </div>
                  )}

                  <div className="flex flex-col items-center xl:items-start gap-2 w-full">
                    <h3 className={`text-white font-black tracking-tight uppercase ${pack.isPopular ? 'text-lg text-white/60' : 'text-2xl'}`}>
                      {pack.name}
                    </h3>
                    <span className={`inline-block text-xs uppercase tracking-widest font-bold px-2.5 py-1 rounded-md ${
                      pack.isVip 
                        ? 'bg-accent-gold/10 text-accent-gold border border-accent-gold/20' 
                        : 'bg-white/5 text-jaguar-400 border border-white/5'
                    }`}>
                      {pack.duration}
                    </span>
                  </div>
                  
                  <div className="mt-6 xl:mt-8 text-center xl:text-left">
                    <div className={`font-black tracking-tight ${
                      pack.isVip ? 'text-white text-4xl' : 'text-accent-gold text-5xl'
                    }`}>
                      {pack.price}
                    </div>
                    {pack.isVip && (
                      <span className="text-[10px] text-accent-gold font-bold uppercase tracking-wider block mt-1">
                        *Premium Adaptive Pricing System
                      </span>
                    )}
                  </div>

                  <p className="text-jaguar-400 text-xs leading-relaxed mt-6 italic text-center xl:text-left max-w-sm xl:max-w-none">
                    <span className="text-white/40 not-italic font-bold block mb-1 uppercase tracking-wider text-[10px]">{t.idealFor}</span>
                    {pack.idealFor}
                  </p>
                </div>

                <a 
                  href="#contact" 
                  className={`w-full text-center font-black uppercase text-xs tracking-widest py-4 rounded-xl transition-all duration-300 shadow-xl mt-4 xl:mt-0 ${
                    pack.isVip 
                      ? 'bg-accent-gold hover:bg-white text-black shadow-accent-gold/10 hover:shadow-white/5' 
                      : 'bg-white hover:bg-accent-gold text-black'
                  }`}
                >
                  {pack.ctaText}
                </a>
              </div>

              {/* Right Side: Content Columns */}
              <div className="p-8 xl:p-12 xl:w-2/3 grid md:grid-cols-2 gap-8 items-start w-full">
                
                {/* Column 1: Included Features */}
                <div className="space-y-6 w-full">
                  <div>
                    <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-4 flex items-center gap-2 justify-center md:justify-start">
                      <Dumbbell className="w-3.5 h-3.5 text-accent-gold" /> {t.whatsIncluded}
                    </h4>
                    <ul className="space-y-3.5">
                      {pack.included.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-gray-300 justify-start">
                          <Check className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Column 2: Expected Results & Core Targets */}
                <div className="space-y-8 w-full">
                  <div>
                    <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-4 flex items-center gap-2 justify-center md:justify-start">
                      <ShieldCheck className="w-3.5 h-3.5 text-accent-gold" /> {t.expectedResults}
                    </h4>
                    <ul className="space-y-3">
                      {pack.expectations.map((item, index) => (
                        <li key={index} className={`text-sm text-gray-400 relative ${lang === 'AR' ? 'pr-4 before:right-0 text-right' : 'pl-4 before:left-0 text-left'} before:absolute before:top-2 before:w-1.5 before:h-1.5 before:bg-white/20 before:rounded-full`}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/5 pt-6 w-full">
                    <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-3 flex items-center gap-2 justify-center md:justify-start">
                      <Target className="w-3.5 h-3.5 text-accent-gold" /> {t.coreTargets}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                      {pack.bestFor.map((tag, index) => (
                        <span 
                          key={index} 
                          className={`text-[11px] font-semibold border px-2.5 py-1 rounded-md tracking-wide ${
                            pack.isVip 
                              ? 'text-accent-gold bg-accent-gold/[0.02] border-accent-gold/20' 
                              : 'text-white bg-white/[0.03] border-white/5'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Membership;