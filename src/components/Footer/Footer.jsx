import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                        <FormattedMessage
                            id='footer-info'
                            defaultMessage=' '
                        />
                    </p>
                    <p> </p>
                </div>
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/ashkap/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/kapoorashish474" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="mailto:kapoorashish474@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fab fas fa-envelope"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);