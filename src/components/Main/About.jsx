import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import cv from '../../cv/Ash-Resume.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
const img = require.context('../../img', true);
const About = () => (
    
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='im'
                        defaultMessage='who I am'
                    />
                </h3>
                <h4>
                    <FormattedMessage
                        id='description'
                        defaultMessage='My name is Ashish and I am a full stack developer.'
                    />
                </h4>
                <p> 
                    <FormattedMessage
                        id='my-description'
                        defaultMessage='I have been working on web designing and web development for 8 years. Constantly updating the technologies I already master, but also looking to learn new technologies to enrich my skills and improve my good practices as a developer.'
                    />
                </p> 
                <ul>
                    {/* <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='years'
                                    defaultMessage='Age:'
                                />
                            </span>
                            27
                        </p>
                    </li> */}
                    <li>
                        <p><span>Email:</span>   kapoorashish474@gmail.com  </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='from'
                                    defaultMessage='From:'
                                />
                            </span>
                              Non Resident Indian, Born and Raised in India 
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='location'
                                    defaultMessage='Location: '
                                />
                            </span>
                             United States 
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                Hobbies:{" "}
                            </span>
                                 Reading
                        </p>
                    </li>
                </ul>
                <h4>
                    <FormattedMessage
                        id='experience'
                        defaultMessage='Experience'
                    />
                </h4>
                <p> 
                    <FormattedMessage
                        id='my-experience'
                        defaultMessage='I have 4 years of experience working in a full stack developer capacity at Wipro, Persistent, Bindable and Biodiversity for a livable climate.'
                    />
                </p> 
                <div className="skill">
                   
                    
                </div>
                <ul>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='team-size'
                                    defaultMessage='Team Size : '
                                />
                            </span>
                             17 (max) 
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='client-experience'
                                    defaultMessage='Client experience : '
                                />
                            </span>
                             Barminco, Phillip Morris International, Kelloggs International, Harrison, Texas medical, Augeo, Sofi, Coverzoo, Yaa, Napa, AOL, Iptiq, ABZ, Gallagher.  
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='volunteer-experience'
                                    defaultMessage= " Volunteer experience : "              
                                />
                            </span>
                              Mentor, Proofreader, Content writer, Recruitment coodinator, Employee experience curator.  
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="Ash-Resume.pdf" className="btn-codigo buttonDownload">
                        <FormattedMessage
                            id='btn-cv'
                            defaultMessage='Download Resume'
                        />
                    </a>
                    <div className='mas-info-btn'>
                    <Link to="/about">
                        <ButtomGet/>
                    </Link>
                    </div>
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3> skills</h3>
                <h4>Front-End</h4>
                <div className="skill">
                    <div>
                        <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <img alt="Js" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                        <h5>JavaScript</h5>
                    </div>
                    <div>
                        <img alt="jQuery" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" />
                        <h5>jQuery</h5>
                    </div>
                    <div>
                        <img alt="Sass" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                        <h5>Sass</h5>
                    </div>
                    <div>
                        <img alt="Bootstrap" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                        <h5>Bootstrap</h5>
                    </div>
                    <div>
                        <img alt="Tailwindcss" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />
                        <h5>Tailwindcss</h5>
                    </div>
                    <div>
                        <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <h5>React</h5>
                    </div>
                    <div>
                        <img alt="Redux" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                        <h5>Redux</h5>
                    </div>
                    <div>
                        <img alt="VueJS" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
                        <h5>VueJS</h5>
                    </div>
                </div>
                <h4>Back-End</h4>
                <div className="skill">
                    <div>
                        <img alt="java" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                        <h5>Java</h5>
                    </div>
                    <div>
                        <img alt="Spring Boot" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
                        <h5>Spring Boot</h5>
                    </div>
                    <div>
                        <img alt="Hibernate" className="icons-skils" src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hibernate.svg" />
                        <h5>Hibernate</h5>
                    </div>
                    <div>
                        <img alt="Python" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                        <h5>Python</h5>
                    </div>
                    <div>
                        <img alt="C" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                        <h5>C</h5>
                    </div>
                    <div>
                        <img alt="C sharp" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
                        <h5>C sharp</h5>
                    </div>
                    <div>
                        <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                        <h5>NodeJs</h5>
                    </div>
                    <div>
                        <img alt="express" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                        <h5>Express</h5>
                    </div>
                    <div>
                        <img alt="php" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                        <h5>PHP</h5>
                    </div>
                </div>
                <h4>Cloud</h4>
                <div className="skill">
                    <div>
                        <img alt="aws" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-woodmark.svg" />
                        <h5>AWS</h5>
                    </div>
                    <div>
                        <img alt="azure" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" />
                        <h5>Azure</h5>
                    </div>
                    <div>
                        <img alt="docker" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                        <h5>Docker</h5>
                    </div>
                    <div>
                        <img alt="kubernetes" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" />
                        <h5>Kubernetes</h5>
                    </div>
                    <div>
                        <img alt="terraform" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" />
                        <h5>Terraform</h5>
                    </div>
                    <div>
                        <img alt="jenkins" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" />
                        <h5>Jenkins</h5>
                    </div>
                    <div>
                        <img alt="confluence" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" />
                        <h5>Confluence</h5>
                    </div>
                </div>
                <h4>Database</h4>
                <div className="skill">
                    <div>
                        <img alt="sql" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                        <h5>SQL</h5>
                    </div>
                    <div>
                        <img alt="postgress" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" />
                        <h5>Postgress</h5>
                    </div>
                    <div>
                        <img alt="mongodb" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                        <h5>MongodDB</h5>
                    </div>
                    <div>
                        <img alt="redis" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain-wordmark.svg" />
                        <h5>Redis</h5>
                    </div>
                    <div>
                        <img alt="kafka" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" />
                        <h5>Kafka</h5>
                    </div>
                </div>
                <h4>
                    <FormattedMessage
                        id='tools'
                        defaultMessage='Tools'
                    />
                </h4>
                <div className="skill">
                    <div>
                        <img alt="figma" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" title="figma" />
                        <h5>Figma</h5>
                    </div>
                    <div>
                        <img alt="photoshop" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" title="Photoshop" />
                        <h5>Photoshop</h5>
                    </div>
                    <div>
                        <img alt="Visual Studio Code" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" title="Visual Studio Code" />
                        <h5>VS Code</h5></div>
                    <div>
                        <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="git" />
                        <h5>Git</h5>
                    </div>
                </div> 
            </div>
        </div>
    </section>
);

export default React.memo(About);