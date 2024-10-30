import styles from './resume.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Resume() {
    return (
        <main>
            <Link className='download-link' href='Scott-Josiah-Resume.pdf' target='_blank' rel='noopener noreferrer' download={true}>
                <Image
                    src='/download.svg'
                    height={75}
                    width={75}
                />
            </Link>
            <div className="page">
                <div className="head">
                    <h1>Josiah Scott</h1>
                    <h3>josiah.scott.d@gmail.com - Edmond, Oklahoma</h3>
                    <h3><a href="https://josiahscott.dev">josiahscott.dev</a></h3>
                </div>
                <hr />
                <div className="education">
                    <h2>Education</h2>
                    <div className="space-between-container">
                        <h4>University of Central Oklahoma</h4>
                        <p>August 2021 - December 2024</p>
                    </div>
                    <div className="education-info">
                        <p>Computer Science</p>
                        <p>GPA: 3.87</p>
                        <p>Presidents Honor Roll</p>
                    </div>
                    <br />
                </div>
                <hr />
                <div className="experience">
                    <h2>Experience</h2>
                    <div className="space-between-container">
                        <h4>Software Developer Intern: Hobby Lobby</h4>
                        <p>May 2023 - Present</p>
                    </div>
                    <ul>
                        <li>
                            Developed software solutions to automate key business functions, and managed individual
                            assignments to meet project milestones and deliverables
                        </li>
                        <li>
                            Designed and implemented autoscaling load tests using python to assess performance of GraphQL
                            and RESTful APIs for ecommerce website launch
                        </li>
                        <li>
                            Engaged in code reviews, testing, and debugging to maintain high software quality, with a focus
                            on C# and .NET testing frameworks (e.g., NUnit, Playwright)
                        </li>
                        <li>
                            Developed comprehensive frontend functional testing suites for an internal company web apps
                            using TypeScript and the Playwright library
                        </li>
                        <li>
                            Utilized Docker and Jenkins to streamline deployment through containerization and
                            automation pipelines
                        </li>
                    </ul>
                    <br></br>
                    <div className="space-between-container">
                        <h4>Python Supplemental Instructor: UCO</h4>
                        <p>January 2023 - May 2023</p>
                    </div>
                    <ul>
                        <li>
                            Organized 3 hours of sessions each week to assist students in Beginning Programming
                        </li>
                        <li>
                            Assisted students with specific coding challenges, errors, and project development,
                            fostering a supportive learning environment.
                        </li>
                        <li>
                            Assessed student performance, offered constructive feedback,
                            and adapted teaching methods to diverse learning styles for improved Python proficiency.
                        </li>
                    </ul>
                    <br></br>
                    <div className="space-between-container">
                        <h4>C++ Teachers Assistant: UCO</h4>
                        <p>January 2023 - May 2023</p>
                    </div>
                    <ul>
                        <li>
                            Assessed code for readability, efficiency, organization, and formatting
                        </li>
                        <li>
                            Identified and worked to troubleshoot errors in student submitted programs
                        </li>
                        <li>
                            Analyzed student submitted code for grading in accordance with assignment guidelines
                        </li>
                    </ul>
                    <br />
                </div>
                <hr />
                <div className="resume-skills">
                    <h2>Technical Proficiencies</h2>
                    <p><i>.NET Development:</i> C# programming, .NET Core, NUnit for unit testing, ASP.NET MVC basics</p>
                    <p><i>Automation and Testing:</i> NUnit, Playwright for end-to-end testing, load testing with Python</p>
                    <p><i>DevOps and CI/CD:</i> Docker for containerization, Jenkins for CI/CD pipelines, Git/GitHub for version control</p>
                    <p><i>Frontend:</i> JavaScript, TypeScript, React, Next.js, Bootstrap, HTML, CSS</p>
                </div>
                <hr />
                <br />
            </div>
        </main>
    )
}