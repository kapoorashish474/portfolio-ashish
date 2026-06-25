import React from 'react';
import { COMPANY_LOGOS, EXPERIENCES } from '../../data/experience';
import './Experience.css';

const Experience = () => (
  <section className="experience-section" id="servicios">
    <h2 className="heading">Experience</h2>
    <div className="experience-grid" id="experience">
      {EXPERIENCES.map(({ id, company, role, period, description, logoKey }, index) => (
        <article
          className="experience-card"
          data-aos="fade-up"
          data-aos-delay={200 + index * 80}
          key={id}
        >
          <div className="experience-card__header">
            <div className="experience-card__logo">
              <img
                alt={`${company} logo`}
                src={COMPANY_LOGOS[logoKey || id]}
              />
            </div>
            <div className="experience-card__meta">
              <h3>{role}</h3>
              <p className="experience-card__company">{company}</p>
            </div>
          </div>
          <p className="experience-card__period">{period}</p>
          <p className="experience-card__desc">{description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default React.memo(Experience);
