import styles from './page.module.css'
import Link from 'next/link'

export default function Projects() {
    return (
        <main className={styles.main}>
            <Link href={'/projects/wimby'}>
                <div className={styles.wimby}>
                    <h1>
                        ☁WIMBY
                    </h1>
                </div>
            </Link>
        </main>
    )
}