import { NextResponse } from 'next/server'

export async function POST(request) {
    let numWords = await request.json();
    let response = await fetch(`https://random-word-api.vercel.app/api?words=${numWords}`);
    let data = await response.json();
    return NextResponse.json(data);
}