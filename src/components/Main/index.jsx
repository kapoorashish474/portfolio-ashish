import React from 'react';

/* Componet */
import About from './About';
import Experience from './Experience';
import Project from './Project';
import Contact from './Contact';
import AboutNew from './AboutNew';
import Skills from "./Skills";

const Main = () => (
    <main>
        <AboutNew />        
        
        <Experience />

        <Skills/>
        
        <Project />

        <Contact />
    </main>
);

export default Main;