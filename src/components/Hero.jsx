import img400 from '../assets/img400.jpeg';
import { translations } from '../data/translations';

const Hero = ({ lang = 'EN' }) => {
  // Safe fallback to EN if dictionary path is completely missing
  const activeLang = translations[lang]?.hero ? lang : 'EN';
  const t = translations[activeLang]?.hero || {
    accessBadge: "Public Member Access",
    titlePre: "private",
    titlePost: "Coaching.",
    description: "From competitive athletes to everyday fitness goals, professional coaching tailored exactly to your ambitions.",
    ctaButton: "Apply for Membership",
    floatingIndex: "01.",
    floatingTitle: "Precision Gear"
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0d0d10]">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-gold/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <div className={`space-y-8 ${lang === 'AR' ? 'text-right' : 'text-left'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-jaguar-300">
            <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"></span>
            {t.accessBadge}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white uppercase">
            {t.titlePre} <br />
            <span className="text-gradient-gold">{t.titlePost}</span>
          </h1>

          <p className="text-lg text-jaguar-400 max-w-md leading-relaxed">
            {t.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById('membership');
                if (targetElement) {
                  const offset = 96; 
                  const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                  const offsetPosition = elementPosition - offset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'auto'
                  });
                }
              }}
              className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-accent-gold transition-all transform hover:-translate-y-1"
            >
              {t.ctaButton}
            </button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-4 bg-accent-gold/5 rounded-3xl blur-3xl group-hover:bg-accent-gold/10 transition-all duration-700 pointer-events-none"></div>
          
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] relative bg-[#111115]">
            <img
              src={img400}
              className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
              alt="Gym Showcase"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-transparent to-black/30 pointer-events-none mix-blend-multiply"></div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none"></div>
          </div>

          <div className={`absolute -bottom-6 ${lang === 'AR' ? '-right-6' : '-left-6'} glass-panel p-6 rounded-2xl border border-white/10 min-w-[160px] max-w-[200px] shadow-[0_20px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl bg-[#111115]/80 ${lang === 'AR' ? 'text-right' : 'text-left'}`}>
            <div className="text-accent-gold font-bold text-xl mb-1">{t.floatingIndex}</div>
            <div className="text-white text-sm font-semibold mb-1">{t.floatingTitle}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;