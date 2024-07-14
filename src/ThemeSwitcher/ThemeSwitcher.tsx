import React, { useState } from 'react';
import {Button} from "primereact/button";

const ThemeSwitcher = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const toggleTheme = () => {
        const linkElement = document.getElementById('theme-link') as HTMLLinkElement;
        if (linkElement) {
            if (isDarkTheme) {
                linkElement.href = '/themes/lara-light-blue/theme.css';
            } else {
                linkElement.href = '/themes/lara-dark-blue/theme.css';
            }

            setIsDarkTheme(!isDarkTheme);
        }
    };

    return (
        <div>
            <Button onClick={toggleTheme} icon="pi pi-moon" severity="secondary" outlined/>
        </div>
    );
};

export default ThemeSwitcher;
