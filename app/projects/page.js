import styles from './projects.css'
import Link from 'next/link'

export default function Projects() {
    return (
        <main className="projectMain">
            <Link href={'/projects/weather'} className="card">
                <div className="wimby">
                    <h1>
                        ☁Weather
                    </h1>
                </div>
            </Link>
            <Link href={'/projects/typing'} className="card">
                <div className="typing">
                    <h1>
                        Typing
                    </h1>
                </div>
            </Link>
            <Link href={'/projects/recipes'} className="card">
                <div className="recipes">
                    <h1>
                        Recipes
                    </h1>
                </div>
            </Link>
            <Link href={'/projects'} className="card">
                <div className="comingSoon">
                    <h1>
                        More Coming Soon...
                    </h1>
                </div>
            </Link>
        </main>
    )
}