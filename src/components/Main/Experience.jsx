import React from 'react';
import '../../pages/Service/ServicesPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

// Img
const img = require.context('../../img', true);
const Experience = () => (
    <section className="servicios" id="servicios">
        <h2 className="heading">
            <FormattedMessage
                id='services'
                defaultMessage='Experience'
            />
        </h2>
        <div className="row" id="experience">
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i><img alt="Microsoft" className="icons-skils"  /></i>
                <h3>
                    <FormattedMessage
                        id='development'
                        defaultMessage='Senior Software Engineer'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Headed the team to deliver multiple projects from start to completion'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <i><img alt="Amazon" className="icons-skils" /* src={img(`./wipro.svg`)} */ /></i>
                
                <h3>
                    <FormattedMessage
                        id='marketing'
                        defaultMessage='Software Development Engineer'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='marketing-info'
                        defaultMessage='Contributed on a team called AWS Calculator which provides a tool for estimating the cost of AWS services and has traffic of 1M
                        requests per day.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
                <i><img alt="GCOM Software" className="icons-skils" /* src={img(`./wipro.svg`)} */ /></i>
                
                <h3>
                    <FormattedMessage
                        id='maintenance'
                        defaultMessage='Software Developer'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='maintenance-info'
                        defaultMessage='Built trust in the team by delivering features, showed project management skills, team camaraderie, mentoring new employees, reviewing architecture designs, performing code reviews.'
                    />
                </p>
            </div>
             <div className="columns" data-aos="fade-up" data-aos-delay="600">
                <i><img alt="GCOM Software" className="icons-skils" /* src={img(`./persistent.png`)} */ /></i>
                <h3>
                    <FormattedMessage
                        id='seo'
                        defaultMessage='Software Developer Intern'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='seo-info'
                        defaultMessage='Developed award-winning Native Android application for NY State (NYC Parking Ticket Pay or Dispute) which supports multiple
                        languages using MVC Architecture and has a rating of 4.7 stars on the play store.'
                    />
                </p>
            </div>
        </div>
    </section>
);

export default React.memo(Experience);