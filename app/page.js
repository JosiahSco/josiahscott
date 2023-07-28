import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/header/Header'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.bio}>
        <h1>Josiah Scott</h1>
        <p>I am a sofware developer and computer science student. This website is my first jump into web development.</p>
        <p>I intend to use this website to show off my projects, and blog about my progress as well as development topics that interest me.</p>
        <p>Check out my projects, blog posts, or send me a message.</p>
        <p>josiahscott.dev is under active development</p>
      </div>
      <div className={styles.workingOn}>
        <h2>Currently working on</h2>
        <ul>
          <li>Dynamic routing for blog</li>
          <li>Styling blog previews and posts</li>
        </ul>
      </div>
    </main>
  )
}
