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
                        <p>Fall 2021 - Spring 2025</p>
                    </div>
                    <div className="education-info">
                        <p>Computer Science</p>
                        <p>GPA: 3.88</p>
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
                            Designed and implemented autoscaling load tests using python to assess performance of GraphQL  
                            and RESTful APIs for ecommerce website launch
                        </li>
                        <li>
                            Developed a comprehensive frontend functional testing suite for an internal company web app 
                            using TypeScript and the Playwright library
                        </li>
                        <li>
                            Utilized Docker and Jenkins to streamline deployment through containerization and 
                            automation pipelines
                        </li>
                        <li>
                            Developed software solutions to automate key business functions, and managed individual 
                            assignments to meet project milestones and deliverables
                        </li>
                        <li>
                            Participated in code reviews, testing, and debugging to ensure software quality and functionality, 
                            staying up-to-date with the latest technologies and trends in the industry
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
                <div className="skills">
                    <h2>Skills</h2>
                    <p><b>Frontend:</b> JavaScript, TypeScript, React, Next.js, Bootstrap, HTML, CSS</p>
                    <p><b>Backend:</b> Node.js, RESTful APIs, GraphQL, Firebase</p>
                    <p><b>DevOps:</b> Github, Docker, Jenkins, Automated Testing</p>
                    <p><b>OOP:</b> C++, Java</p>
                    <p><b>Scripting:</b> Python</p>
                </div>
                <br />
                <hr />
                <div className="classNamees">
                    <h2>Relevent Courses</h2>
                    <div className="space-between-container">
                        <h4>Cloud Web Apps Development</h4>
                        <p>Fall 2023</p>
                    </div>
                    <ul>
                        <li>
                            Built front-end single-page applications using JavaScript, HTML/CSS, and Bootstrap
                        </li>
                        <li>
                            Develop back-end serverless applications with Google Cloud Functions, 
                            implement Firebase security rules, and deploy to Firebase Hosting services
                        </li>
                        <li>
                            Utilize a database for web application data management with Firestore
                        </li>
                    </ul>
                    <br />
                    <div className="space-between-container">
                        <h4>Data Structures & Algorithms</h4>
                        <p>Fall 2023</p>
                    </div>
                    <ul>
                        <li>
                            Acquired in-depth knowledge of fundamental data structures, including arrays, 
                            linked lists, stacks, queues, trees, and graphs, enabling efficient data organization and retrieval
                        </li>
                        <li>
                            Developed proficiency in algorithm design and analysis, 
                            gaining the ability to create and optimize algorithms for solving complex computational problems.
                        </li>
                        <li>
                            Applying data structures and algorithms to real-world scenarios,
                            enhancing computational efficiency and algorithmic thinking
                        </li>
                    </ul>
                    <br />
                    <div className="space-between-container">
                        <h4>Object Oriented Software Design</h4>
                        <p>Fall 2022</p>
                    </div>
                    <ul>
                        <li>
                            Learned and implemented projects using creational, structural and behavioral design patterns
                        </li>
                        <li>
                            Applied object oriented principles of abstraction, inheritance, and polymorphism
                        </li>
                        <li>
                            Developed Java GUI-based projects
                        </li>
                    </ul>
                    <br></br>
                </div>
                <hr />
                <br />
            </div>
    </main>
)
}