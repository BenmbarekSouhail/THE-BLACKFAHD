import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const MetricItem = ({ target, label }) => {
  const counterRef = useRef(null);

  useGSAP(() => {
    gsap.to(counterRef.current, {
      innerHTML: target,
      duration: 2,
      snap: { innerHTML: 1 },
      scrollTrigger: {
        trigger: counterRef.current,
        start: 'top 85%',
        once: true,
      },
      ease: 'power2.out',
    });
  }, [target]);

  return (
    <div className="text-center">
      <div ref={counterRef} className="text-4xl font-bold text-white mb-2">0</div>
      <div className="text-xs text-jaguar-500 uppercase tracking-[0.2em]">{label}</div>
    </div>
  );
};

const Metrics = () => {
  const stats = [
    { target: 10 , label: "Years Experience" },
    { target: 50, label: "Transformations Completed" },
  ];

  return (
    <div className="py-16 border-y border-white/5 bg-white/[0.01] rounded-3xl">
      <div className="grid grid-cols-2 gap-12">
        {stats.map((stat, index) => (
          <MetricItem key={index} target={stat.target} label={stat.label} />
        ))}
      </div>
    </div>
  );
};

export default Metrics;