import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import cv from '../../cv/Ash-Resume.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';



/* Img */
import imgabout from '../../img/Ashish.jpg';
const img = require.context('../../img', true);
console.log(process.env);

const About = () => {
    function readMore() {
        let btnHide = document.querySelector("#btn-hide");
        let parrafoActive = document.querySelector(".parrafo-active");
    
        parrafoActive.classList.toggle("show");
    
        if (parrafoActive.classList.contains("show")) {
          btnHide.innerHTML = "↑";
        } else {
          btnHide.innerHTML = "Read more";
        }
      }
    return(
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />
              
              <a href={cv} target="_blank" rel="noopener noreferrer" download="Ash-Resume.pdf" className="btn-codigo cv buttonDownload">
                  <FormattedMessage
                      id='btn-cv'
                      defaultMessage='Download CV'
                  />
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
                <FormattedMessage
                  id='about-info-1'
                  defaultMessage="A seasoned senior software engineer with 9+ years of software engineering expertise, spanning diverse domains such as Enginering Ads, Engineering Cloud Services. My journey has been a blend of leadership and a passion for problem solving."
                />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id='about-info-2'
                    defaultMessage="Strategic Thinker | Leader | Problem Solver | Technical Expert | Data-Driven | Customer-Obsessed"
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about-info-3'
                    defaultMessage="As a seasoned Senior Software Development Engineer, I blend strategic thinking with technical expertise to drive impactful solutions. My journey spans diverse domains, from aligning software development efforts with long-term business goals to mentoring high-performing engineering teams."
                  />
                </p>
                <p>
                  <FormattedMessage
                    id='about-info-4'
                    defaultMessage="🚀 Leading Teams, Delivering Excellence
                    As a team leader, I’ve orchestrated successful projects, ensuring seamless collaboration among cross-functional teams. My knack for motivating colleagues and fostering a positive work environment has been instrumental in achieving project milestones."
                  />
                </p>
                <p>
                  <FormattedMessage
                    id='about-info-4'
                    defaultMessage="⏩ Fast-Paced Environments
                    I thrive in dynamic settings. My experience at both Microsoft and Amazon has honed my ability to stay agile, adapt to evolving technologies, and deliver results under tight deadlines. The adrenaline rush of a fast-paced team fuels my creativity."
                  />
                </p>
              </div>
              <div className="btn-info"
                  onClick={readMore}>
                <div className="custom-btn btn-codigo" id="btn-hide"  ><span>Read more</span></div>
              </div>
            </div>

          </div>
        </section>
        <div className="row container">
            {}
            
        </div>
    </section>
    )
};

export default React.memo(About);