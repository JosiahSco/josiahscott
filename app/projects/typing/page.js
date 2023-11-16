'use client'
import styles from './typing.css'
import { useEffect, useState } from 'react'

export default function Typing() {
    let [wordbank, setWordBank] = useState([]);
    let [numWords, setNumWords] = useState(25);
    let [started, setStarted] = useState(false);
    let [timeStarted, setTimeStarted] = useState(0);

    const characterSpans = wordbank
    .map(word => [...word, ' '])
    .flat()
    .map((char, key) => (
        <span key={key}>{char}</span>
    ));

    const handlePaste = (e) => {
        e.preventDefault();
        console.log("nice try bro");
    }

    const handleRadioChange = (e) => {
        const labels = document.querySelectorAll('label');
        labels.forEach(label => {
            label.classList.remove('checked');
        })
        e.target.parentElement.classList.add('checked');
        setNumWords(e.target.parentElement.innerText)
    }

    const handleTyping = (e) => {
        if (!started) {
            setStarted(true);
            setTimeStarted(Date.now());
        }
        let typed = e.target.value.trim().split('');
        const characters = document.querySelectorAll('span');
        let finished = true;
        characters.forEach((charSpan, charIndex) => {
            const typedChar = typed[charIndex];
            if (typedChar == null && charIndex != characters.length - 1) {
                characters[charIndex].classList.remove('incorrect');
                characters[charIndex].classList.remove('correct');
                finished = false;
            } else if (typedChar == charSpan.innerText) {
                characters[charIndex].classList.remove('incorrect');
                characters[charIndex].classList.add('correct');
            } else {
                characters[charIndex].classList.remove('correct');
                characters[charIndex].classList.add('incorrect');
            }
        });

        if (finished) testComplete();
    }

    const testComplete = () => {
        console.log("finished");
        setStarted(false);
        const timeElapsed = Date.now() - timeStarted;
        const wpm = document.querySelector('.infoRow p');
        wpm.innerText = `WPM: ${Math.round(numWords / (timeElapsed / 1000) * 60)}`
        console.log(timeElapsed/1000);
    }

    useEffect(() => {
        document.querySelector('label#defaultNumWords').classList.add('checked');
    }, []);

    useEffect(() => {
        async function fetchWords() {
            const response = await fetch('/api/get-words', {
                method: 'POST',
                body: JSON.stringify(numWords)
            });
            setWordBank(await response.json());
        }
        fetchWords();
        
    }, [numWords])

 

    return (
        <div className='typingMain'>
            <div className='wrapper'>
                <div className='infoRow'>
                    <div className='wordNumRadioButtons'>
                        <label>
                            <input type='radio' name='numWords' onChange={handleRadioChange}></input>
                            10    
                        </label>
                        <label id='defaultNumWords'>
                            <input type='radio' name='numWords' onChange={handleRadioChange}></input>
                            25    
                        </label>
                        <label>
                            <input type='radio' name='numWords' onChange={handleRadioChange}></input>
                            50    
                        </label>
                        <label>
                            <input type='radio' name='numWords' onChange={handleRadioChange}></input>
                            100    
                        </label>
                    </div>
                    <p>WPM: XX</p>
                </div>
                <div className='wordBank'>
                    {characterSpans}
                </div>
                <textarea className='inputBox' onPaste={handlePaste} onChange={handleTyping} placeholder='Start Typing...'></textarea>
            </div>
        </div>
    )
}