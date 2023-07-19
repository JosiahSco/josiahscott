import * as React from "react"
import Link from "next/link"
import './header.css'

export default function Header() {
    return (
        <nav>
            <div id="navContainer">
                <Link href={'/'} id="homeLink">Home</Link>
                <hr></hr>
                <Link href={'/'} id="projectsLink">Projects</Link>
                <hr></hr>
                <Link href={'/'} id="blogLink">Blog</Link>
                <hr></hr>
                <Link href={'/'} id="contactMeLink">Contact Me</Link>
            </div>
        </nav>
    )
}