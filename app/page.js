import Image from 'next/image'
// import styles from './page.module.css'
import Header from '@/components/header/Header'
import styles from './home.css'
import LastUpdated from '@/components/lastUpdated/LastUpdated'

export default function Home() {


  return (
    <main className="main">
      <div className='profile'>
        <div className='pic-holder' id='pic-holder'>
          {/* <Image
          src="/temp-profile3.jpg"
          width={400}
          height={400}
          alt="Picture of the author"
        /> */}
        <img src='temp-profile.png' className='pfp' id='pfp'></img>
        </div>
        <div className='links'>
          <a href='https://github.com/JosiahSco' target='_blank'>
            <Image 
                src='/github-pages.png'
                width={100}
                height={100}
                alt='Github Logo'
                priority
            />
        </a>
        <a href='https://www.linkedin.com/in/josiah-scott-379b08238/' target='_blank'>
            <Image 
                src='/linkedin-tile.svg'
                width={100}
                height={100}
                alt='LinkedIn Logo'
                priority
            />
        </a>
        <a href='https://www.discordapp.com/users/245749938686787584' target='_blank'>
            <Image 
                src='/discord2.png'
                width={100}
                height={100}
                alt='Discord Logo'
                priority
            />
          </a>
        </div>
      </div>
      <div className="bio">
        <h1>Biography</h1>
        <p>
          I am a sofware developer and computer science student. This website is my first jump into web development. 
          I am currently working part time as a developer for Hobby Lobby developing frontend functional tests with
          Playwright, and load tests with Locust.
        </p>
        <p>I intend to use this website to show off my projects, and write about my progress as well as development topics that interest me.</p>
        <p>Check out my projects, blog posts, or send me a message.</p>
      <div className='bottom-row'>
        <div className='interests'>
          <h2>Interests</h2>
          <ul>
            <li>Webapp Development</li>
            <li>Programming Language Design</li>
            <li>Automated Testing</li>
            <li>Containerization</li>
          </ul>
        </div>
        <div className='skills'>
          <h2>Skills</h2>
          <ul>
            <li>Frontend Testing</li>
            <li>API Load Testing</li>
            <li>Object Oriented Programming</li>
            <li>TypeScript, Python, C++</li>
          </ul>
        </div>
      </div>
      </div>
    </main>
  )
}
