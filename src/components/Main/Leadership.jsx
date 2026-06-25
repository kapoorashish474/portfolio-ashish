import React from 'react';
import { LEADERSHIP_STATS, LEADERSHIP_POINTS, CERTIFICATIONS } from '../../data/leadership';
import './Leadership.css';

const Leadership = () => (
  <section className="leadership-section" id="leadership">
    <div className="leadership-banner">
      <p className="leadership-eyebrow">Engineering Leadership</p>
      <h2 className="leadership-title">
        Building teams that ship AI &amp; cloud products at scale
      </h2>
      <div className="leadership-stats">
        {LEADERSHIP_STATS.map(({ value, label }) => (
          <div className="leadership-stat" key={label}>
            <span className="leadership-stat__value">{value}</span>
            <span className="leadership-stat__label">{label}</span>
          </div>
        ))}
      </div>
    </div>
    <ul className="leadership-points">
      {LEADERSHIP_POINTS.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
    <div className="certifications">
      <h3 className="certifications__heading">Certifications</h3>
      <div className="certifications__list">
        {CERTIFICATIONS.map(({ id, name, issuer, year }) => (
          <div className="cert-badge" key={id}>
            <span className="cert-badge__icon">✓</span>
            <div>
              <p className="cert-badge__name">{name}</p>
              <p className="cert-badge__meta">{issuer} · {year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default React.memo(Leadership);
