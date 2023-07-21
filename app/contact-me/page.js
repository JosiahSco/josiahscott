"use client"
import { useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'

export default function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            console.log(await response.json());
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    return (
        <main className={styles.main}>
            <div className={styles.outerCard}>
                <div className={styles.cardContent}>
                    <div className={styles.leftWrapper}>
                        <h1>Useful Links</h1>
                        <div className={styles.links}>
                            <a href='https://github.com/JosiahSco' target='_blank'>
                                <Image 
                                    src='/github-pages.png'
                                    width={100}
                                    height={100}
                                    alt='Github Logo'
                                />
                            </a>
                            <a href='https://www.linkedin.com/in/josiah-scott-379b08238/' target='_blank'>
                                <Image 
                                    src='/linkedin.png'
                                    width={100}
                                    height={100}
                                    alt='LinkedIn Logo'
                                />
                            </a>
                            <a href='https://www.discordapp.com/users/245749938686787584' target='_blank'>
                                <Image 
                                    src='/discord2.png'
                                    width={100}
                                    height={100}
                                    alt='Discord Logo'
                                />
                            </a>
                        </div>
                    </div>
                    <div className={styles.rightWrapper}>
                        <h2>Send Me a Message</h2>
                        <form className={styles.emailForm} onSubmit={handleSubmit}>
                            <label>
                                <input className={styles.name} type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Name' required></input>
                            </label>
                            <label>
                                <input type='text' name='email' value={formData.email} onChange={handleChange} placeholder='Email' required></input>
                            </label>
                            <label>
                                <textarea className={styles.message} name='message' value={formData.message} onChange={handleChange} placeholder='Your Message' required></textarea>
                            </label>
                            <button type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}