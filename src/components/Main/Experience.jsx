import React from 'react';
import { COMPANY_LOGOS, EXPERIENCES } from '../../data/experience';
import './Experience.css';

const Experience = () => (
  <section className="experience-section" id="servicios">
    <h2 className="heading">Experience</h2>
    <p className="section-subtitle">
      A decade of engineering leadership at Kargo, Microsoft, AWS, and beyond.
    </p>
    <div className="experience-timeline" id="experience">
      {EXPERIENCES.map(
        (
          {
            id,
            company,
            role,
            period,
            location,
            isLead,
            teamSize,
            highlights,
            tech,
            logoKey,
          },
          index
        ) => (
          <article
            className={`experience-card${isLead ? ' experience-card--lead' : ''}`}
            data-aos="fade-up"
            data-aos-delay={150 + index * 60}
            key={id}
          >
            <div className="experience-card__header">
              <div className="experience-card__logo">
                <img alt={`${company} logo`} src={COMPANY_LOGOS[logoKey || id]} />
              </div>
              <div className="experience-card__meta">
                <div className="experience-card__badges">
                  {isLead && <span className="badge badge--lead">Team Lead</span>}
                  {teamSize && <span className="badge badge--team">{teamSize}</span>}
                </div>
                <h3>{role}</h3>
                <p className="experience-card__company">{company}</p>
                <p className="experience-card__period">
                  {period} · {location}
                </p>
              </div>
            </div>
            <ul className="experience-card__highlights">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {tech && (
              <div className="experience-card__tech">
                {tech.map((t) => (
                  <span className="tech-tag" key={t}>{t}</span>
                ))}
              </div>
            )}
          </article>
        )
      )}
    </div>
  </section>
);

export default React.memo(Experience);
