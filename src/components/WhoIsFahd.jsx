import aboutimg2 from "../assets/aboutimg2.jpeg";
import three from "../assets/three.png";
import { translations } from '../data/translations';

const WhoIsFahd = ({ lang = 'EN' }) => {
  const activeLang = translations[lang]?.about ? lang : 'EN';
  const t = translations[activeLang]?.about || {
    metaTitle: "BENMBAREK Fahd",
    headline: "Driven by Results.",
    p1: "Since the age of 9, I began my journey in sports, starting with gymnastics and football, and later transitioning into mixed martial arts.",
    p2: "After that, I developed a strong passion for bodybuilding. However, I faced many challenges and hardships, but none of them ever stopped me from training, even during the most difficult times.",
    p3: "Eventually, I made the decision to become a professional bodybuilding athlete and fitness coach.",
    p4: "Today, with over 10 years of experience in the fitness industry, I can help transform you from an average person into someone with a strong, aesthetic physique and high physical performance, building not just your body, but a true athletic identity.",
    p5: "Whether your goal is fat loss, muscle gain, improving fitness, or bodybuilding, you are in the right place.",
    historyTitle: "Contest History",
    fallbackText: "Stage Showcase Photo (Large View)",
    history: [{ id: 1, title: "First Competition GRAND PRIZE GSN – 2nd" }]
  };

  const contests = [
    {
      id: 1,
      title: t.history?.[0]?.title || "First Competition GRAND PRIZE GSN – 2nd",
      imageSrc: three,
      imageAlt: "grand prize"
    }
  ];

  return (
    <section id="who-is-fahd" className="py-32 bg-[#0d0d10] relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative group">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-2xl relative">
              <img
                src={aboutimg2}
                alt="Coach Fahd Profile Portrait"
                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
              />
            </div>
            <div className={`absolute -bottom-6 ${lang === 'AR' ? '-left-6' : '-right-6'} w-48 h-48 bg-accent-gold/10 rounded-full blur-2xl pointer-events-none group-hover:bg-accent-gold/15 transition-colors duration-500`}></div>
          </div>

          <div className={`space-y-6 ${lang === 'AR' ? 'text-right' : 'text-left'}`}>
            <div className="text-xs uppercase tracking-widest text-accent-gold font-bold">{t.metaTitle}</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">{t.headline}</h2>
            <p className="text-jaguar-400 text-lg leading-relaxed">{t.p1}</p>
            <p className="text-jaguar-400 text-lg leading-relaxed">{t.p2}</p>
            <p className="text-jaguar-400 text-lg leading-relaxed">{t.p3}</p>
            <p className="text-jaguar-400 text-lg leading-relaxed">{t.p4}</p>
            <p className="text-jaguar-400 text-lg leading-relaxed">{t.p5}</p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5">
          <div className="text-center mb-20">
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-accent-gold">
              {t.historyTitle}
            </h3>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className={`absolute ${lang === 'AR' ? 'right-4 md:right-1/2 translate-x-1/2' : 'left-4 md:left-1/2 -translate-x-1/2'} top-0 bottom-0 w-[2px] bg-white/20 z-0`}></div>

            <div className="space-y-20 relative z-10">
              {contests.map((item) => (
                <div key={item.id} className="relative">
                  <div className={`absolute ${lang === 'AR' ? 'right-4 md:right-1/2 translate-x-1/2' : 'left-4 md:left-1/2 -translate-x-1/2'} top-10 flex flex-col items-center`}>
                    <div className="w-10 h-10 rounded-full bg-accent-gold shadow-[0_0_20px_rgba(212,175,55,0.4)] mb-2"></div>
                  </div>

                  <div className={`grid md:grid-cols-2 gap-8 md:gap-16 ${lang === 'AR' ? 'mr-12 md:mr-0' : 'ml-12 md:ml-0'} items-center`}>
                    <div className={`flex ${lang === 'AR' ? 'justify-start md:pl-4 order-1 md:order-2' : 'justify-end md:pr-4'}`}>
                      <div className={`w-full md:max-w-md bg-[#1c1c1e] text-white p-5 rounded-xl border border-white/5 relative shadow-xl flex items-center min-h-[72px] ${lang === 'AR' ? 'text-right' : 'text-left'}`}>
                        <span className="text-lg font-semibold tracking-wide w-full">{item.title}</span>
                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ${
                          lang === 'AR' 
                            ? 'left-0 -translate-x-[8px] border-r-[8px] border-r-[#1c1c1e]' 
                            : 'right-0 translate-x-[8px] border-l-[8px] border-l-[#1c1c1e]'
                        }`}></div>
                      </div>
                    </div>

                    <div className={lang === 'AR' ? 'md:pr-4 order-2 md:order-1 text-left' : 'md:pl-4'}>
                      <div className="w-full max-w-xl rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-2xl group hover:border-accent-gold/30 transition-all duration-300 inline-block">
                        <img
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = `<div class="p-20 text-center text-sm text-jaguar-600 tracking-wider uppercase">${t.fallbackText}</div>`;
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className={`relative flex ${lang === 'AR' ? 'justify-start md:justify-center mr-4 md:mr-0' : 'justify-start md:justify-center ml-4 md:ml-0'}`}>
                <div className="w-10 h-10 rounded-full bg-[#1c1c1e] border-4 border-accent-gold shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsFahd;