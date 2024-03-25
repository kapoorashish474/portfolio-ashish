import React, { useState } from 'react'
import './ProjectPage.css';

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import ProjectNav from './ProjectNav';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
const projectImg = require.context('../../img', true);

const Project = () => {
  const [modal1, changeModal1] = useState(false);
  const [modal2, changeModal2] = useState(false);
  const [modal3, changeModal3] = useState(false);
  const [modal4, changeModal4] = useState(false);
  const [modal5, changeModal5] = useState(false);


  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage
              id='projects'
              defaultMessage='Projects'
            />
          </h1>
          <ProjectNav/>
        </section>

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            
          </div>
          <div className="projects__item">
            
          </div>
          <div className="projects__item">
            
          </div>
          <div className="projects__item">
            
          </div>
          
          <div className="projects__item">
            
          </div>
          
        </section>
      </main>

      
      <ScrollToTop />

      <Footer />
    </div>
  )
}
export default Project;