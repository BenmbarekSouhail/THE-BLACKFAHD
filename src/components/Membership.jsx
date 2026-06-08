import { Check, Dumbbell, ShieldCheck, Target, Crown } from 'lucide-react';

const Membership = () => {
  const membershipPacks = [

    {

      id: 1,

      name: "PACK 1 — STARTER",

      duration: "30 DAYS",

      price: "149 DT",

      ctaText: "Starter Plan",

      idealFor: "Beginners / Fat loss / Muscle gain basics / Restart fitness journey",

      included: [

        "Customized Training Program",

        "Personalized Nutrition Plan",

        "Cardio Protocol (if needed)",

        "Weekly Check-ins",

        "Direct Coaching Support (WhatsApp / DM)",

        "Basic Form & Technique Guidance"

      ],

      expectations: [

        "Structured training & nutrition",

        "Improved body composition (fat loss or lean muscle gain)",

        "Better discipline & consistency"

      ],

      bestFor: [

        "Fat loss start",

        "Lean muscle gain foundation",

        "Beginners",

        "Getting back in shape"

      ],

      isVip: false

    },







    
    {
      id: 2,
      name: "PACK 2 — TRANSFORMATION",
      duration: "90 DAYS",
      price: "399 DT",
      ctaText: "TRANSFORMATION PLAN",
      idealFor: "Fat loss / Muscle gain / Body recomposition",
      isPopular: true,
      badgeText: "Most Wanted Pack",
      included: [
        "Customized Training Program (progressively updated)",
        "Personalized Nutrition Plan (adjusted weekly)",
        "Cardio Protocol (based on goal)",
        "Weekly Check-ins & Adjustments",
        "Direct Coaching Support (WhatsApp / DM)",
        "Progress Tracking (photos + measurements)",
        "Form & Technique Guidance"
      ],
      expectations: [
        "Visible body transformation in 6–10 weeks (with consistency)",
        "Improved muscle definition & fat loss",
        "Strong lifestyle structure (training + nutrition control)"
      ],
      bestFor: [
        "Serious fat loss",
        "Lean muscle gain",
        "Body recomposition",
        "People wanting real transformation in 3 months"
      ],
      isVip: false
    },
    {
      id: 3,
      name: "PACK 3 — ELITE TRANSFORMATION",
      duration: "6 MONTHS",
      price: "799 DT",
      ctaText: "Elite 6-Month Plan",
      idealFor: "Advanced transformation / Lean muscle gain / Serious body recomposition",
      included: [
        "Fully periodized Training Program (monthly progression)",
        "Personalized Nutrition Plan (advanced adjustments)",
        "Cardio & conditioning protocol (adapted continuously)",
        "Weekly Check-ins & ongoing adjustments",
        "Direct Priority Coaching Support (WhatsApp / DM)",
        "Full Progress Tracking (photos, measurements, performance)",
        "Advanced Form & Technique Optimization"
      ],
      expectations: [
        "Major physique transformation over 6 months",
        "Significant muscle gain with controlled fat levels",
        "Strong improvement in strength, shape, and conditioning",
        "Fully structured lifestyle & discipline system"
      ],
      bestFor: [
        "Serious physique transformation",
        "Long-term fat loss + muscle gain",
        "Intermediate to advanced trainees",
        "People committed to real change"
      ],
      isVip: false
    },
    {
      id: 4,
      name: "PACK 4 — ELITE YEAR COACHING",
      duration: "12 MONTHS",
      price: "1799 DT",
      ctaText: "Elite Year Plan",
      idealFor: "Full transformation / Competition prep / Maximum physique development",
      included: [
        "Year-long structured coaching (periodized phases: bulk / cut / recomposition)",
        "Customized Training Programs (continuously updated)",
        "Advanced Nutrition Planning (fully adapted through the year)",
        "Cardio & Conditioning System (goal-based phases)",
        "Weekly Check-ins & ongoing adjustments",
        "Priority Direct Support (WhatsApp / DM)",
        "Full Progress Tracking (photos, measurements, performance)",
        "Peak physique development strategy"
      ],
      expectations: [
        "Complete body transformation within 12 months",
        "Maximum muscle development with controlled fat levels",
        "Elite-level physique conditioning & symmetry",
        "Long-term discipline, structure, and lifestyle mastery"
      ],
      bestFor: [
        "Serious athletes",
        "Long-term physique transformation",
        "Competition preparation (optional pathway)",
        "Maximum results seekers"
      ],
      isVip: false
    },
    {
      id: 5,
      name: "PACK 5 — VIP 1:1 COACHING",
      duration: "90 DAYS MINIMUM",
      price: "Starting from 1500 DT",
      ctaText: "Apply For VIP",
      idealFor: "Early contest prep phase / Serious transformation start / Evaluation phase before long-term coaching extension",
      included: [
        "Premium Flexible Elite Show & Target Adaptability",
        "Minimum 3-Month Structural Baseline Evaluation Blueprint",
        "Physique Control Oversight Without Rushed Methodologies",
        "Natural Long-Term Extension Paths (6 Months VIP — 2500-2800 DT)",
        "Full Custom Contest Prep Option (Custom pricing depending on show & duration)"
      ],
      expectations: [
        "Exclusive elite tracking architecture",
        "Clear, measurable aesthetic and performance milestones",
        "Highly adaptable blueprint tailored entirely to your show timeline"
      ],
      bestFor: [
        "Serious athletes",
        "Contest prep candidates",
        "Maximum accountability seekers",
        "People wanting an exclusive, flexible premium coaching experience"
      ],
      isVip: true
    }
  ];

  return (
    <section id="membership" className="py-32 bg-[#0d0d10] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="mb-20 text-center lg:text-left">
          <div className="text-xs uppercase tracking-widest text-accent-gold font-bold mb-3">Pricing Plans</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Choose Your Goal</h2>
        </div>

        {/* Horizontal Stack Layout */}
        <div className="flex flex-col gap-8">
          {membershipPacks.map((pack) => (
            <div 
              key={pack.id} 
              className={`glass-panel rounded-3xl overflow-hidden transition-all duration-500 flex flex-col xl:flex-row relative ${
                pack.isVip 
                  ? 'border-2 border-accent-gold/60 bg-[#141419] shadow-[0_0_40px_rgba(212,175,55,0.15)] scale-[1.01]' 
                  : pack.isPopular
                    ? 'border border-accent-gold/40 bg-[#111115] shadow-[0_0_30px_rgba(212,175,55,0.05)]'
                    : 'border border-white/5 bg-[#111115] hover:border-accent-gold/30'
              }`}
            >
              {/* Premium VIP Visual Overlay Indicators */}
              {pack.isVip && (
                <div className="absolute top-0 right-0 bg-accent-gold text-black font-black text-[10px] tracking-widest uppercase px-6 py-1.5 rounded-bl-xl flex items-center gap-1.5 z-20 shadow-md">
                  <Crown className="w-3 h-3 fill-black" /> Premium Exclusive
                </div>
              )}
              
              {/* Left Side: Name, Price, and CTA */}
              <div className={`p-8 xl:p-12 xl:w-1/3 border-b xl:border-b-0 xl:border-r flex flex-col justify-between gap-8 ${
                pack.isVip ? 'bg-accent-gold/[0.02] border-accent-gold/20' : 'bg-black/20 border-white/5'
              }`}>
                <div>
                  {/* Dynamic Popular Badge Placement right above title block */}
                  {pack.isPopular && (
                    <div className="mb-3 inline-flex items-center gap-1.5 bg-accent-gold text-black font-black text-[10px] tracking-widest uppercase px-3 py-1 rounded-md shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                      🔥 {pack.badgeText}
                    </div>
                  )}

                  <div className="flex justify-between items-start xl:flex-col xl:gap-2">
                    <h3 className="text-white font-black text-2xl tracking-tight uppercase flex items-center gap-2">
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
                  
                  <div className="mt-6 xl:mt-8">
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

                  <p className="text-jaguar-400 text-xs leading-relaxed mt-6 italic">
                    <span className="text-white/40 not-italic font-bold block mb-1 uppercase tracking-wider text-[10px]">Ideal For:</span>
                    {pack.idealFor}
                  </p>
                </div>

                <a 
                  href="#contact" 
                  className={`w-full text-center font-black uppercase text-xs tracking-widest py-4 rounded-xl transition-all duration-300 shadow-xl ${
                    pack.isVip 
                      ? 'bg-accent-gold hover:bg-white text-black shadow-accent-gold/10 hover:shadow-white/5' 
                      : 'bg-white hover:bg-accent-gold text-black'
                  }`}
                >
                  {pack.ctaText}
                </a>
              </div>

              {/* Right Side: Content Columns */}
              <div className="p-8 xl:p-12 xl:w-2/3 grid md:grid-cols-2 gap-8 items-start">
                
                {/* Column 1: Included Features */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                      <Dumbbell className="w-3.5 h-3.5 text-accent-gold" /> What's Included
                    </h4>
                    <ul className="space-y-3.5">
                      {pack.included.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Column 2: Expected Results & Core Targets */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-accent-gold" /> Expected Results
                    </h4>
                    <ul className="space-y-3">
                      {pack.expectations.map((item, index) => (
                        <li key={index} className="text-sm text-gray-400 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-white/20 before:rounded-full">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/5 pt-6">
                    <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                      <Target className="w-3.5 h-3.5 text-accent-gold" /> Core Targets
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
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