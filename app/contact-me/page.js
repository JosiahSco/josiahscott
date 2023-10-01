"use client"
import { useState } from 'react'
import styles from './contact.css'
// import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

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
            document.getElementById('messageSentModal').showModal();
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    function closeModal() {
        document.getElementById('messageSentModal').close();
    }

    return (
        <main className="main">
            <div className="leftWrapper">
                <div className='contactInfo'>
                    <h1>Contact Info</h1>
                    <div className='icon-and-address'>
                        <div className='emailIcon'>
                            <Link href="mailto: josiahscottdev@gmail.com">
                                <Image 
                                    src='/emailIcon.svg'
                                    fill={true}
                                    alt='Email Icon'
                                    sizes='(max-width: 768px) 75px, (max-width: 1200px) 125px'
                                    priority
                                />
                            </Link>
                        </div>
                        <p>josiahscottdev@gmail.com</p>
                    </div>
                </div>
                <h1>Useful Links</h1>
                <div className="links">
                    <a href='https://github.com/JosiahSco' target='_blank'>
                        <Image
                            src='/github-pages.png'
                            fill={true}
                            alt='Github Logo'
                            sizes='(max-width: 768px) 75px, (max-width: 1200px) 125px'
                            priority
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/josiah-scott-379b08238/' target='_blank'>
                        <Image
                            src='/linkedin-tile.svg'
                            fill={true}
                            alt='LinkedIn Logo'
                            sizes='(max-width: 768px) 75px, (max-width: 1200px) 125px'
                            priority
                        />
                    </a>
                    <a href='https://www.discordapp.com/users/245749938686787584' target='_blank'>
                        <Image
                            src='/discord2.png'
                            fill={true}
                            alt='Discord Logo'
                            sizes='(max-width: 768px) 75px, (max-width: 1200px) 125px'
                            priority
                        />
                    </a>
                </div>
            </div>
            <div className="rightWrapper">
                <h2>Send Me a Message</h2>
                <div className="formWrapper">
                    <form className="emailForm" onSubmit={handleSubmit}>
                        <label>
                            <input className="name" type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Name' required></input>
                        </label>
                        <label>
                            <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email' required></input>
                        </label>
                        <label>
                            <textarea className="message" name='message' value={formData.message} onChange={handleChange} placeholder='Your Message' required></textarea>
                        </label>
                        <button type='submit'>Send Message</button>
                    </form>
                    <dialog id='messageSentModal' className="messageSentModal">
                        <div>
                            <h3>Message Sent!</h3>
                            <p> Thanks for the message!</p>
                            <p>I will respond as soon as I can.</p>
                        </div>
                        <button id='closeModal' onClick={closeModal}>Close</button>
                    </dialog>
                </div>
            </div>
        </main>
    )
}
