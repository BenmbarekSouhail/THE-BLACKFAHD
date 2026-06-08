import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoIsFahd from './components/WhoIsFahd';
import Transformations from './components/Transformations';
import Membership from './components/Membership';
import Contact from './components/Contact';
import LeftScrollIndicator from './components/LeftScrollIndicator';

const scrollReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

function App() {
  const [isBlinded, setIsBlinded] = useState(false);

  const triggerBlindTransition = (targetId) => {
    // 1. Force kill the browser's global smooth scroll behavior instantly
    document.documentElement.style.scrollBehavior = 'auto';
    
    // 2. Bring up the solid black curtain
    setIsBlinded(true); 

    // 3. Execute the jump instantly while the screen is completely black
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = 96; 
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'auto' // Instant teleportation
        });
      }
      
      // 4. Drop the curtain and safely restore smooth scrolling for manual mouse wheels
      setTimeout(() => {
        setIsBlinded(false);
        document.documentElement.style.scrollBehavior = 'smooth';
      }, 100); 
    }, 200); // Gives the black overlay enough time to fully cover the screen first
  };

  return (
    <motion.main
      key="main-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3.2, ease: "easeOut" }}
      className="min-h-screen bg-[#0d0d10] relative"
    >
      <LeftScrollIndicator />
      <div 
        className={`fixed inset-0 bg-[#0d0d10] z-[9999] pointer-events-none transition-opacity duration-200 ease-in-out ${
          isBlinded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <Navbar onNavClick={triggerBlindTransition} />

      <Hero />

      <motion.div {...scrollReveal}>
        <WhoIsFahd />
      </motion.div>

      <motion.div {...scrollReveal}>
        <Transformations />
      </motion.div>

      <motion.div {...scrollReveal}>
        <Membership />
      </motion.div>
      
      <motion.div {...scrollReveal}>
        <Contact />
      </motion.div> 

      <footer className="py-12 text-center text-jaguar-500 border-t border-white/5">
        <p>© 2026 THE BLACKFAHD. ALL RIGHTS RESERVED.</p>
      </footer>
    </motion.main>
  );
}

export default App;