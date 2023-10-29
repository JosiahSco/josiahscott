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
          <button className="menu-toggle" onClick={toggleMenu}>☰</button>
          <Link href={'/'} className='name'>Josiah Scott</Link>
          <ul className={`nav-links ${isMenuOpen ? 'open' : 'closed'}`}>
              <li>
                  <Link href={'/'} id="homeLink" className='link'>Home</Link>
              </li>
              <hr></hr>
              <li>
                  <Link href={'/resume'} id='resumeLink' className='link'>Resume</Link>
              </li>
              <hr></hr>
              <li>
                  <Link href={'/projects'} id="projectsLink" className='link'>Projects</Link>
              </li>
              <hr></hr>
              <li>
                  <Link href={'/blog'} id="blogLink" className='link'>Blog</Link>
              </li>
              <hr></hr>
              <li>
                  <Link href={'/contact-me'} id="contactMeLink" className='link'>Contact</Link>
              </li>
          </ul>
          {/* <button className='dark-mode-toggle'><img src='/moon-solid.svg' className='moon'></img></button> */}
        </nav>
    )
}