'use client';

import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss'
import Logo from '@/components/UI/Elements/Logo/Logo';
import Navigation from '@/components/Layout/Navigation/Navigation';
import commonConfig from '@/database/config/metadata.json';
export default function Header() {
    const [currentTime, setCurrentTime] = useState('');
    useEffect(() => {
    
    

        const clientTime = new Date()

        setCurrentTime(clientTime);
    }, []);

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <div className={styles.inner}>
                <Logo classVariable={styles.logo}></Logo>
                <div className={styles.location}>{`${commonConfig.personal.city}, ${commonConfig.personal.state}`}</div>
                <div className={styles.openToWork}><span></span> Open To Work</div>
                <Navigation isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}></Navigation>
                <button type={'button'} className={styles.menuToggle} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}