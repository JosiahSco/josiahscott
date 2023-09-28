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
            <div className='card card-top'>
                <h1>Education</h1>
                <div className='card-data'>
                    <div className='uco'>
                        <h2>University Of Central Oklahoma</h2>
                        <h3>Computer Science</h3>
                        <h3>GPA: 3.88</h3>
                        <h3>Presidents Honor Roll</h3>
                        <h3>Expected Graduation: Spring 2025</h3>
                    </div>
                    <div className='ft'>
                        <h2>Francis Tuttle Technology Center</h2>
                        <h3>Computer Science Academy</h3>
                        <h3>GPA: 4.2</h3>
                        <h3>Graduated: Spring 2021</h3>
                    </div>
                </div>
            </div>
            <div className='card'>
                <h1>Experience</h1>
                <div className='card-data'>
                    <div className='hobby-lobby'>
                        <h2>Hobby Lobby - Software Developer</h2>
                        <ul>
                            <li>Designed and implemented autoscaling load tests using python to assess performance of GraphQL and RESTful APIs for ecommerce website launch</li>
                            <li>Developed a comprehensive frontend functional testing suite for an internal company web app using TypeScript and the Playwright library</li>
                            <li>Utilized Docker and Jenkins to streamline deployment through containerization and automation pipelines</li>
                        </ul>
                    </div>
                    <div className='hobby-lobby'>
                        <h2>UCO - Python Supplemental Instructor</h2>
                        <ul>
                            <li>Guided students in grasping Python concepts, debugging, and coding best practices to enhance their skills.</li>
                            <li>Assisted students with specific coding challenges, errors, and project development, fostering a supportive learning environment.</li>
                            <li>Assessed student performance, offered constructive feedback, and adapted teaching methods to diverse learning styles for improved Python proficiency.</li>
                        </ul>
                    </div>
                    <div className='hobby-lobby'>
                        <h2>UCO - C++ Professors Assistant</h2>
                        <ul>
                            <li>Assessed code for readability, efficiency, organization, and formatting</li>
                            <li>Identified and worked to troubleshoot errors in student submitted programs</li>
                            <li>Analyzed student submitted code for grading in accordance with assignment guidelines</li>
                        </ul>
                    </div>
                </div>


            </div>
        </main>
    )
}