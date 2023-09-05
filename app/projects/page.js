import styles from './page.module.css'
import Link from 'next/link'

export default function Projects() {
    return (
        <main className={styles.main}>
            <Link href={'/projects/wimby'} className={styles.card}>
                <div className={styles.wimby}>
                    <h1>
                        ☁WIMBY
                    </h1>
                </div>
            </Link>
            <Link href={'/projects'} className={styles.card}>
                <div className={styles.comingSoon}>
                    <h1>
                        More Coming Soon...
                    </h1>
                </div>
            </Link>
        </main>
    )
}