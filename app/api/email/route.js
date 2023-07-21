import { NextResponse } from 'next/server'
import nodemailer from "nodemailer"

export async function POST(request) {
    // const {name, email, message} = request.body
    const {name, email, message} = await request.json()
    const subject = `DEV SITE CONTACT from ${name}`
    const recipient = process.env.SMTP_USER
    const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: subject,
        text: emailBody,
        html: ``
    });


    return NextResponse.json({ "example": "example" })
}