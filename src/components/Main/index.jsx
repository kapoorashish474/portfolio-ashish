import React from 'react';

import AboutNew from './AboutNew';
import Experience from './Experience';
import Project from './Project';
import Contact from './Contact';
import Skills from './Skills';

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