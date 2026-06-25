import React from 'react';
import { SKILL_CATEGORIES } from '../../data/skills';
import './Skills.css';

const Skills = () => (
  <section className="skills-section" id="skills">
    <h2 className="heading">Skills</h2>
    <p className="section-subtitle">
      Technologies I use to build AI-powered, cloud-native products at scale.
    </p>
    <div className="skills-grid">
      {SKILL_CATEGORIES.map(({ id, title, skills, highlight }) => (
        <article
          className={`skills-card${highlight ? ' skills-card--ai' : ''}`}
          data-aos="fade-up"
          key={id}
        >
          <h3 className="skills-card__title">{title}</h3>
          <ul className="skills-list">
            {skills.map(({ name, icon }) => (
              <li className="skill-chip" key={name}>
                {icon && <img src={icon} alt="" className="skill-chip__icon" />}
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default React.memo(Skills);
