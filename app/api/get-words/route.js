import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

// export const config = { matcher: '/get-words'}

export async function POST(request) {
    let numWords = await request.json();

    const allWords = await get('words');
    let selectedWordSet = new Set();
    while (selectedWordSet.size < numWords) {
        selectedWordSet.add(allWords[Math.floor(Math.random() * allWords.length)]);
    }

    return NextResponse.json(Array.from(selectedWordSet));
}