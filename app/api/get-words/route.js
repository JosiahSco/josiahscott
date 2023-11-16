import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

// export const config = { matcher: '/get-words'}

export async function POST(request) {
    let numWords = await request.json();

    const allWords = await get('words');
    let selectedWords = [];
    for (let i = 0; i < numWords; i++) {
        selectedWords.push(allWords[Math.floor(Math.random() * allWords.length)])
    }
    return NextResponse.json(selectedWords);
}