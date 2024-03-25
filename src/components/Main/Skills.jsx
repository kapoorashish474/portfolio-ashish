import React, { useState } from 'react'
import '../../pages/About/AboutPage.css';

const Skills = () => {
    return(
        <section className="sobre-mi" id="sobre-mi">
        <div className="row container">
        <section className="skills" id="skills">
            <h2 className="heading">
                    Skills
            </h2>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">

                
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
                </div>
                <h4>Cloud</h4>
                <div className="skill">
                    <div>
                        <img alt="aws" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
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
               
            </div>
            </section>
        </div>
    </section>

    )
}
export default Skills;
