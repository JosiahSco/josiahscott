"use client"
import styles from './page.module.css'
import { useEffect } from 'react'

export default function WIMBY() {

    useEffect(() => {
        const handleIframeLoad = () => {
            fetch('/api/weather-key')
            .then(response => response.json())
            .then(variableValue => {
                // Send the variable value to the iframe's JavaScript using postMessage.
                const iframe = document.getElementById('iframe');
                iframe.contentWindow.postMessage(variableValue);
            });
        }

        const iframe = document.getElementById('iframe');
        iframe.addEventListener('load', handleIframeLoad);
    })

    return (
        <main className={styles.main}>
            <iframe src="/publicWIMBY/index.html" id='iframe' style={{ width: '85vw', height: '85vh', border: 'solid 4px white'}}/>
        </main>
    )
}