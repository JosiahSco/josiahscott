import { NextResponse } from 'next/server'

export async function GET(request) {
    const environmentVariable = process.env.WEATHER_KEY; 
    return NextResponse.json({ environmentVariable })
}