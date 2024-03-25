import React, { useState } from 'react'
import './ProjectPage.css';

/* React router */
import { NavLink } from 'react-router-dom';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

function ProjectNav() {
    return(

        <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              <FormattedMessage
                id='site-web'
                defaultMessage='websites'
              />
            </NavLink>
            <NavLink to="/project/app" offset={-150} duration={500}>
              Apps
            </NavLink>
            {/* <NavLink to="/project/certificates" offset={-150} duration={500}>
              Certificates
            </NavLink> */}
            
            {/* 
            <NavLink to="/project/game" offset={-150} duration={500}>
              <FormattedMessage
                id='games'
                defaultMessage='games'
              />
            </NavLink> */}
        </nav>
    )
}
export default ProjectNav;