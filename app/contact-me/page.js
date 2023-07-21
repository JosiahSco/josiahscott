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
            //console.log(JSON.stringify(formData))
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
                        <h1>Contact Me</h1>
                    </div>
                    <div className={styles.rightWrapper}>
                        <form className={styles.emailForm} onSubmit={handleSubmit}>
                            <label>
                                Name:
                                <input type='text' name='name' value={formData.name} onChange={handleChange} required></input>
                            </label>
                            <label>
                                Email:
                                <input type='text' name='email' value={formData.email} onChange={handleChange} required></input>
                            </label>
                            <label>
                                Message:
                                <textarea name='message' value={formData.message} onChange={handleChange} required></textarea>
                            </label>
                            <button type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}