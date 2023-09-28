"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link"
import styles from './header.css'
import Image from "next/image"

export default function Header() {

    const navRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 768) {
            setIsMenuOpen(false); // Close the menu when screen width is larger than 768px
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      };
    
      // Add an event listener to handle clicks outside of the menu
      useEffect(() => {
        if (isMenuOpen) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isMenuOpen]);

    return (
        <nav className='navigation' ref={navRef}>
            {/* <div id="navContainer"> */}
                <button className="menu-toggle" onClick={toggleMenu}>☰</button>
                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <li>
                        <Link href={'/'} id="homeLink">Home</Link>
                    </li>
                    <li>
                        <Link href={'/projects'} id="projectsLink">Projects</Link>
                    </li>
                    <li>
                        <Link href={'/blog'} id="blogLink">Blog</Link>
                    </li>
                    <li>
                        <Link href={'/contact-me'} id="contactMeLink">
                            Contact
                            <Image
                                src='/link.svg'
                                width={20}
                                height={20}
                                alt='Link Icon'
                            />
                        </Link>
                    </li>
                </ul>
                {/* <div className="verticalRule" />
                <div className="verticalRule" />
                <div className="verticalRule" /> */}
            {/* </div> */}
        </nav>
    )
}