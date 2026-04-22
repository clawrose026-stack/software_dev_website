import { useState } from 'react';
import './QuoteForm.css';

function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1200);
  };

  return (
    <section className="cta" id="quote">
      <div className="cta__blob"></div>
      <div className="cta__wrapper">
        <div className="cta__header">
          <p className="section-label reveal" style={{ display: 'inline-block' }}>Get started</p>
          <h2 className="cta__heading reveal reveal-delay-1">Request a Free Quote</h2>
          <p className="cta__sub reveal reveal-delay-2">Tell us about your project and we'll get back to you within 24 hours with a tailored proposal and timeline.</p>
        </div>
        <div className="quote-form reveal reveal-delay-3" id="quote-form-container">
          {submitted ? (
            <div className="quote-form__success show">
              <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <h3>Quote Request Sent!</h3>
              <p>Thank you for reaching out. Our team will review your project details and get back to you within 24 hours with a tailored proposal.</p>
            </div>
          ) : (
            <form id="quote-form" onSubmit={handleSubmit}>
              <div className="quote-form__grid">
                <div className="quote-form__group">
                  <label className="quote-form__label" htmlFor="form-name">Full Name</label>
                  <input className="quote-form__input" type="text" id="form-name" name="name" placeholder="John Smith" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="quote-form__group">
                  <label className="quote-form__label" htmlFor="form-email">Email Address</label>
                  <input className="quote-form__input" type="email" id="form-email" name="email" placeholder="john@company.com" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="quote-form__group">
                  <label className="quote-form__label" htmlFor="form-project">Project Type</label>
                  <select className="quote-form__select" id="form-project" name="project" value={formData.project} onChange={handleChange} required>
                    <option value="" disabled>Select a project type</option>
                    <option value="corporate">Corporate Website</option>
                    <option value="ecommerce">E-Commerce Store</option>
                    <option value="webapp">Web Application</option>
                    <option value="landing">Landing Page</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="quote-form__group">
                  <label className="quote-form__label" htmlFor="form-budget">Estimated Budget</label>
                  <select className="quote-form__select" id="form-budget" name="budget" value={formData.budget} onChange={handleChange} required>
                    <option value="" disabled>Select your budget range</option>
                    <option value="5k-10k">$5,000 — $10,000</option>
                    <option value="10k-25k">$10,000 — $25,000</option>
                    <option value="25k-50k">$25,000 — $50,000</option>
                    <option value="50k-100k">$50,000 — $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>
                <div className="quote-form__group full-width">
                  <label className="quote-form__label" htmlFor="form-description">Project Description</label>
                  <textarea className="quote-form__textarea" id="form-description" name="description" placeholder="Tell us about your project — goals, features, timeline, and any inspiration sites..." value={formData.description} onChange={handleChange} required />
                </div>
              </div>
              <button type="submit" className="quote-form__submit" id="form-submit-btn" disabled={loading} style={{ opacity: loading ? '0.6' : '1' }}>
                {loading ? 'Sending...' : 'Send Quote Request'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default QuoteForm;
