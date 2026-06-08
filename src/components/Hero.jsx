import img400 from '../assets/img400.jpeg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-gold/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-jaguar-300">
            <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"></span>
            Public Member Access
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            private <br />
            <span className="text-gradient-gold">Coaching.</span>
          </h1>

          <p className="text-lg text-jaguar-400 max-w-md leading-relaxed">
            Designed for both athletes and everyday fitness goals, we deliver professional coaching tailored exactly to your ambitions.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={(e) => {
                e.preventDefault();
                // Targeted structural ID updated to find membership container
                const targetElement = document.getElementById('membership');
                if (targetElement) {
                  const offset = 96; // Matches your scroll-mt-24 layout spacing
                  const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                  const offsetPosition = elementPosition - offset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'auto' // Instant jump execution
                  });
                }
              }}
              className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-accent-gold transition-all transform hover:-translate-y-1"
            >
              Apply for Membership
            </button>
          </div>
        </div>

        {/* Image Column with Professional Shadows & Transparencies */}
        <div className="relative group">
          
          {/* Subtle Golden Ambient Glow behind the card */}
          <div className="absolute inset-4 bg-accent-gold/5 rounded-3xl blur-3xl group-hover:bg-accent-gold/10 transition-all duration-700 pointer-events-none"></div>
          
          {/* Main Image Container */}
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] relative bg-[#111115]">
            
            <img
              src={img400}
              className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
              alt="Gym Showcase"
            />

            {/* Premium Vignette & Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-transparent to-black/30 pointer-events-none mix-blend-multiply"></div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none"></div>
            
          </div>

          {/* Floating Info Frame Overlay */}
          <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-2xl border border-white/10 max-w-[200px] shadow-[0_20px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl bg-[#111115]/80">
            <div className="text-accent-gold font-bold text-xl mb-1">01.</div>
            <div className="text-white text-sm font-semibold mb-1">Precision Gear</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;