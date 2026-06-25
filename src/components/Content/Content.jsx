import React from 'react';
import './Content.css';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';
import { Link } from 'react-scroll';

const Content = () => (
  <div className="contenido">
    <ParticleHeaderBg />
    <section className="inicio" id="inicio">
      <div className="titulo">
        <p className="hero-eyebrow" data-aos="fade-up" data-aos-delay="400">
          Engineering Leader · AI &amp; Cloud
        </p>
        <h1 data-aos="fade-up" data-aos-delay="600">
          Ashish Kapoor
        </h1>
        <p className="hero-role" data-aos="fade-up" data-aos-delay="800">
          I lead engineering teams that ship AI-powered products at Kargo, Microsoft &amp; AWS —
          mentoring engineers, driving roadmaps, and building systems used by millions.
        </p>
        <div className="hero-actions" data-aos="fade-up" data-aos-delay="1000">
          <Link to="leadership" className="btn hero-btn" spy smooth offset={-80}>
            See My Impact
          </Link>
        </div>
        <div className="hero-social" data-aos="fade-up" data-aos-delay="1100">
          <a href="https://www.linkedin.com/in/ashkap/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin" />
          </a>
          <a href="https://github.com/kapoorashish474" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github" />
          </a>
          <a href="mailto:kapoorashish474@gmail.com" aria-label="Email">
            <i className="fas fa-envelope" />
          </a>
        </div>
        <Link to="leadership" spy smooth offset={-80}>
          <div className="scroll-down" />
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
