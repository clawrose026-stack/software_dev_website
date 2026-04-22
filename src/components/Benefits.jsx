import './Benefits.css';

const benefits = [
  {
    title: 'Pixel-Perfect Quality',
    desc: 'Every detail matters. We obsess over typography, spacing, and interactions to deliver websites that feel polished and premium at every screen size.',
    icon: (
      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )
  },
  {
    title: 'Senior Developers Only',
    desc: 'Your project is handled by experienced engineers and designers with 8+ years average experience, not juniors or outsourced freelancers.',
    icon: (
      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    )
  },
  {
    title: 'On-Time Delivery',
    desc: '98% on-time delivery rate. We set realistic timelines, provide weekly progress updates, and never compromise on deadlines or quality.',
    icon: (
      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  },
  {
    title: 'SEO & Performance',
    desc: 'Every site ships with 90+ Lighthouse scores, structured data, and SEO best practices baked in from day one — not bolted on after.',
    icon: (
      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    )
  },
  {
    title: 'Rock-Solid Security',
    desc: 'SSL certificates, OWASP-compliant code, automated vulnerability scanning, and regular security audits to keep your site and users safe.',
    icon: (
      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    title: 'Ongoing Support',
    desc: 'Launch is just the beginning. We offer maintenance plans, performance monitoring, and feature updates to keep your site ahead of the curve.',
    icon: (
      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    )
  }
];

function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <div className="benefits__wrapper">
        <p className="section-label reveal">Why choose us</p>
        <h2 className="benefits__heading reveal reveal-delay-1">Built for Digital Excellence</h2>
        <p className="benefits__sub reveal reveal-delay-2">We combine cutting-edge technology with creative design to deliver websites that outperform the competition and exceed expectations.</p>
        <div className="benefits__grid">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className={`benefit-item reveal reveal-delay-${(index % 4) + 1}`}>
              <div className="benefit-item__icon">{benefit.icon}</div>
              <div className="benefit-item__content">
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
