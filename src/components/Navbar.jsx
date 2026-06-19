import { useState, useEffect } from 'react';
import logo from '../assets/logo.jpeg'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['who-is-fahd', 'transformations', 'membership', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', 
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 96; 
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'auto' 
      });
      
      setActiveSection(targetId);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-panel py-1.5' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 flex justify-between items-center">
        
        {/* Left Side: Big Logo + Safe Visible Text Branding */}
        <a 
          href="/" 
          className="flex items-center gap-1.5 sm:gap-4 font-black tracking-tighter text-accent-gold uppercase hover:opacity-95 transition-opacity cursor-pointer min-w-0"
        >
          <img 
            src={logo} 
            alt="Logo" 
            className={`w-auto object-contain transition-all duration-300 shrink-0 ${
              isScrolled ? 'h-14 opacity-90' : 'h-20 md:h-26'
            }`} 
          />
          <span className="inline-block self-center tracking-wider font-black text-[11px] xs:text-sm sm:text-lg md:text-xl truncate">
            BLACK FAHD
          </span>
        </a>
        
        {/* Center: Navigation Menu links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-jaguar-300">
          <a 
            href="#who-is-fahd" 
            onClick={(e) => handleNavClick(e, 'who-is-fahd')}
            className={`relative py-1 transition-colors hover:text-white ${
              activeSection === 'who-is-fahd' ? 'text-white font-semibold' : ''
            }`}
          >
            Who is Fahd
            <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-accent-gold transition-all duration-300 ${
              activeSection === 'who-is-fahd' ? 'w-full' : 'w-0'
            }`} />
          </a>

          <a 
            href="#transformations" 
            onClick={(e) => handleNavClick(e, 'transformations')}
            className={`relative py-1 transition-colors hover:text-white ${
              activeSection === 'transformations' ? 'text-white font-semibold' : ''
            }`}
          >
            Transformations
            <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-accent-gold transition-all duration-300 ${
              activeSection === 'transformations' ? 'w-full' : 'w-0'
            }`} />
          </a>

          <a 
            href="#membership" 
            onClick={(e) => handleNavClick(e, 'membership')}
            className={`relative py-1 transition-colors hover:text-white ${
              activeSection === 'membership' ? 'text-white font-semibold' : ''
            }`}
          >
            Membership
            <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-accent-gold transition-all duration-300 ${
              activeSection === 'membership' ? 'w-full' : 'w-0'
            }`} />
          </a>

          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className={`relative py-1 transition-colors hover:text-white ${
              activeSection === 'contact' ? 'text-white font-semibold' : ''
            }`}
          >
            Contact
            <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-accent-gold transition-all duration-300 ${
              activeSection === 'contact' ? 'w-full' : 'w-0'
            }`} />
          </a>
        </div>
        
        {/* Right Side: CTA Button Link Container - Optimized Padding for Mobile */}
        <div className="flex items-center shrink-0">
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="bg-accent-gold text-black px-3 py-2 sm:px-5 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold hover:bg-white transition-colors inline-block text-center whitespace-nowrap"
          >
            Join The Programme
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;