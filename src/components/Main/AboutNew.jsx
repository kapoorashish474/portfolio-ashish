import React from 'react';
import '../../pages/About/AboutPage.css';
import imgabout from '../../img/Ashish.jpg';

const About = () => (
  <section className="sobre-mi" id="sobre-mi">
    <h2 className="heading">About</h2>
    <p className="section-subtitle">
      Senior engineering leader with 10+ years shipping AI-powered and cloud-native systems.
    </p>
    <div className="sobre-mi-container">
      <div className="sobre-mi-img-container">
        <img src={imgabout} alt="Ashish Kapoor" className="sobre-mi-img" />
      </div>
      <div className="sobre-mi-info">
        <p>
          I'm a Senior Software Engineer and engineering leader with 10+ years of experience
          architecting AI-powered solutions and cloud platforms at Kargo, Microsoft, and AWS.
          I combine hands-on technical depth with people leadership — mentoring teams,
          driving roadmaps with senior leadership, and delivering measurable business impact.
        </p>
        <p>
          My recent work spans LLM-powered ad generation, RAG voice agents, Azure data
          pipelines serving real-time insights, and high-traffic AWS customer tools. I hold
          the AWS Certified Machine Learning – Specialty certification.
        </p>
        <p>
          Based in NYC. Open to senior IC and engineering leadership roles where I can
          build exceptional teams and ship products that matter.
        </p>
      </div>
    </div>
  </section>
);

export default React.memo(About);
