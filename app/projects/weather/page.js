import styles from './page.module.css'
import { FormEvent } from 'react';

export default function weather() {

    const create = async (e) => {
        'use server'
        e.preventDefault();
    }
    
    return (
        <main className={styles.main}>
            {/* <div className={styles.cloudContainer}>
               <div className={styles.cloudIntro}></div>
            </div> */}
            <div className={styles.searchContainer}>
                <form action={create}>
                    <input id="searchInput" type="text" placeholder="Enter Location (City Name or Zip Code) or Use Current Location &#8594"></input>
                    <button id="getLocation" type="button"><img className={styles.locationImg} src="/publicWIMBY/graphics/map-marker-alt.png"></img></button>
                </form>
            </div>
        </main>
    )
}