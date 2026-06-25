import React from 'react';
import { AI_PROJECTS } from '../../data/aiProjects';
import './AIProjects.css';

const AIProjects = () => (
  <section className="ai-section" id="ai-projects">
    <h2 className="heading">AI Projects</h2>
    <p className="section-subtitle">
      Hands-on work bridging LLMs, voice AI, and production engineering.
    </p>
    <div className="ai-grid">
      {AI_PROJECTS.map(({ id, title, context, description, tags, link }) => (
        <article className="ai-card" data-aos="fade-up" key={id}>
          <p className="ai-card__context">{context}</p>
          <h3 className="ai-card__title">{title}</h3>
          <p className="ai-card__desc">{description}</p>
          <div className="ai-card__tags">
            {tags.map((tag) => (
              <span className="ai-tag" key={tag}>{tag}</span>
            ))}
          </div>
          {link && (
            <a
              className="ai-card__link"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          )}
        </article>
      ))}
    </div>
  </section>
);

export default React.memo(AIProjects);
