import styles from './projects.css'
import Link from 'next/link'

export default function Projects() {
    return (
        <main className="projectMain">
            <Link href={'https://ontime.josiahscott.dev/'} target='_blank' className="card">
                <div className="ontime">
                    <img src='/ontimeLogo.png'></img>
                    <h1>
                        
                    </h1>
                </div>
            </Link>
            <Link href={'https://asteroidInc.josiahscott.dev/'} target='_blank' className="card">
                <div className="clicker">
                    <img src='/asteroid.png'></img>
                    <h1>
                        Asteroid Inc. Clicker
                    </h1>
                </div>
            </Link>
            <Link href={'https://weather.josiahscott.dev/'} target='_blank' className="card">
                <div className="wimby">
                    <h1>
                        ☁Weather
                    </h1>
                </div>
            </Link>
            <Link href={'https://typing.josiahscott.dev/'} target='_blank' className="card">
                <div className="typing">
                    <h1>
                        Typing
                    </h1>
                </div>
            </Link>
            <Link href={'https://recipes.josiahscott.dev/'} target='_blank' className="card">
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