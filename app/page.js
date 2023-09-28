import Image from 'next/image'
// import styles from './page.module.css'
import Header from '@/components/header/Header'
import styles from './home.css'

export default function Home() {
  return (
    <main className="main">
      <div className='profile'>
        <div className='pic-holder'>
          <Image
          src="/temp-profile2.jpg"
          width={400}
          height={400}
          alt="Picture of the author"
        />
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
        <p>I am a sofware developer and computer science student. This website is my first jump into web development.</p>
        <p>I intend to use this website to show off my projects, and blog about my progress as well as development topics that interest me.</p>
        <p>Check out my projects, blog posts, or send me a message.</p>
        <p>josiahscott.dev is under active development</p>
      </div>
    </main>
  )
}
