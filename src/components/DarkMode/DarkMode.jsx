import React from 'react';
import './DarkMode.css'

const DarkMode = () => {
    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(darkTheme);
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
        body.classList.replace(darkTheme, lightTheme);
        e.target.classList.remove(clickedClass);
        localStorage.setItem("theme", "light");
        theme = lightTheme;
        } else {
        body.classList.replace(lightTheme, darkTheme);
        e.target.classList.add(clickedClass);
        // let cloudsDiv=document.createElement("div");
        // cloudsDiv.classList.add("clouds");
        // let starsDiv= document.createElement("div");
        // starsDiv.classList.add("stars");
        // let twinkleDiv=document.createElement("div");
        // twinkleDiv.classList.add("twinkle");
        // e.target.addElement(cloudsDiv);
        // e.target.addElement(starsDiv);
        // e.target.addElement(twinkleDiv)
        localStorage.setItem("theme", "dark");
        theme = darkTheme;
        }
    };
    return (
        <div>
            <div    
                    className={theme === "dark" ? clickedClass : ""}
                    id="darkMode"
                    onClick={(e) => switchTheme(e)}
                >
                <span><i className="fas fa-sun"></i></span>
                <span><i className="fas fa-moon"></i></span>
            </div>
        </div>
    );
};

export default DarkMode;