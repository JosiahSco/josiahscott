import * as React from "react"
import Link from "next/link"
import styles from './header.css'
import Image from "next/image"

export default function Header() {
    return (
        <nav>
            <div id="navContainer">
                <Link href={'/'} id="homeLink">Home</Link>
                <div className="verticalRule" />
                <Link href={'/projects'} id="projectsLink">Projects</Link>
                <div className="verticalRule" />
                <Link href={'/blog'} id="blogLink">Blog</Link>
                <div className="verticalRule" />
                <Link href={'/contact-me'} id="contactMeLink">
                    Contact
                    <Image
                        src='/link.svg'
                        width={20}
                        height={20}
                        alt='Link Icon'
                    />
                </Link>
            </div>
        </nav>
    )
}