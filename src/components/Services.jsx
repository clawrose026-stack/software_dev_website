import './Services.css';

const services = [
  {
    number: '01',
    title: 'Custom Websites',
    desc: 'Pixel-perfect, responsive websites built from scratch. From corporate sites to creative portfolios, we design experiences that captivate visitors and convert them into customers.',
    icon: (
      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Web Applications',
    desc: 'Full-stack web applications with modern frameworks like React, Next.js, and Node.js. Scalable architectures, real-time features, and seamless user experiences.',
    icon: (
      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'E-Commerce',
    desc: 'High-converting online stores with integrated payment gateways, inventory management, and analytics. Built to scale from startup to enterprise-level traffic.',
    icon: (
      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'UI/UX Design',
    desc: 'Research-driven interface design with interactive prototyping, user testing, and design systems. We create intuitive experiences that users love and remember.',
    icon: (
      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    )
  }
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services__wrapper">
        <p className="section-label reveal">What we build</p>
        <h2 className="services__heading reveal reveal-delay-1">End-to-End Web Solutions</h2>
        <div className="services__grid">
          {services.map((service, index) => (
            <div key={service.number} className={`service-card reveal reveal-delay-${index + 1}`}>
              <div className="service-card__icon">{service.icon}</div>
              <span className="service-card__number">{service.number}</span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
