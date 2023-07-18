import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Site Under Construction</div>
      <Image 
        src='/old-under-construction-gif.gif'
        width={250}
        height={250}
      />
    </main>
  )
}
