import { useState, useEffect, useRef } from 'react';
import './Stats.css';

const stats = [
  { target: 200, suffix: '+', label: 'Websites Launched' },
  { target: 98, suffix: '%', label: 'Client Satisfaction' },
  { target: 12, suffix: '+', label: 'Years Experience' },
  { target: 35, suffix: '+', label: 'Team Members' }
];

function StatItem({ target, suffix, label, delay }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 25);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div className={`stat-item reveal reveal-delay-${delay}`} ref={ref}>
      <div className="stat-item__number">
        {count}<span>{suffix}</span>
      </div>
      <div className="stat-item__label">{label}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div className="stats__wrapper">
        {stats.map((stat, index) => (
          <StatItem key={stat.label} {...stat} delay={index + 1} />
        ))}
      </div>
    </section>
  );
}

export default Stats;
