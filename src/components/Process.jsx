import './Process.css';

const steps = [
  { number: '01', title: 'Discovery & Strategy', desc: 'We deep-dive into your brand, audience, and goals to define the project scope, tech stack, sitemap, and a detailed roadmap.' },
  { number: '02', title: 'Design & Prototype', desc: 'Our designers craft wireframes and high-fidelity mockups in Figma, iterating with you until every screen is approved and pixel-perfect.' },
  { number: '03', title: 'Development & QA', desc: 'Clean, performant code built with modern frameworks. Rigorous cross-browser testing, accessibility checks, and performance optimization at every sprint.' },
  { number: '04', title: 'Launch & Scale', desc: 'Deployment to production with CI/CD pipelines, analytics setup, SEO submission, and ongoing monitoring to ensure a flawless launch and sustainable growth.' }
];

function Process() {
  return (
    <section className="process" id="process">
      <div className="process__wrapper">
        <p className="section-label reveal">Our process</p>
        <h2 className="process__heading reveal reveal-delay-1">From Brief to Launch in Four Phases</h2>
        <div className="process__steps">
          {steps.map((step, index) => (
            <div key={step.number} className={`process-step reveal reveal-delay-${index + 1}`}>
              <div className="process-step__number">{step.number}</div>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
