import React, { useEffect, useState } from 'react'
import './DarkModeToggle.scss'
import { BiMoon } from 'react-icons/bi'
import {BsSun} from 'react-icons/bs'; 
import { themeManager } from '../../../utils/ThemeManager';

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState<boolean>(themeManager.isDarkMode());
    
    useEffect(() => {
        themeManager.changeToCurrent();
    }, []);
    
    const toggleDarkMode = () => {
        themeManager.toggle();
        setDarkMode(themeManager.isDarkMode());
    }
    return ( 
        darkMode ?             
                <BiMoon className='navbar__icon navbar__action' onClick={toggleDarkMode}/>
                : 
                <BsSun className='navbar__icon navbar__action' onClick={toggleDarkMode}/>
        )
}
