'use client'
import styles from './typing.css'
import { useEffect, useState } from 'react'

export default function Typing() {
    let [wordbank, setWordBank] = useState([]);
    let [characterSpans, setCharacterSpans] = useState();
    let [numWords, setNumWords] = useState(25);
    let [started, setStarted] = useState(false);
    let [finished, setFinished] = useState(false);
    let [timeStarted, setTimeStarted] = useState(0);

    useEffect(() => {
        const spans = wordbank
        .map(word => [...word, ' '])
        .flat()
        .map((char, key) => (
            <span key={key}>{char}</span>
        ));
        setCharacterSpans(spans);

        if (numWords == 100) {
            document.querySelector('.wordBank').classList.add('smallerText');
        } else {
            document.querySelector('.wordBank').classList.remove('smallerText');
        }
    }, [wordbank]);

    const handlePaste = (e) => {
        e.preventDefault();
        console.log("nice try bro");
    }

    const handleRadioChange = (e) => {
        const labels = document.querySelectorAll('label');
        labels.forEach(label => {
            label.classList.remove('checked');
            label.querySelector('input').disabled = false;
        })
        e.target.parentElement.classList.add('checked');
        e.target.parentElement.disabled = true;
        setNumWords(e.target.parentElement.innerText);

        if (finished) {
            const textarea = document.querySelector('textarea');
            textarea.disabled = false;
            textarea.value = '';
            document.querySelectorAll('.correct').forEach(char => {
                char.classList.remove('correct');
            });

            document.querySelectorAll('.incorrect').forEach(char => {
                char.classList.remove('incorrect');
            });
            setFinished(false);
        }
    }

    const handleTyping = (e) => {
        if (!started) {
            setStarted(true);
            setTimeStarted(Date.now());
            document.querySelector('.retry').classList.remove('buttonDisabled');
            document.querySelector('.retry').disabled = false;
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
        const timeElapsed = Date.now() - timeStarted;
        setFinished(true);

        const wpm = document.querySelector('.wpm');
        wpm.innerText = `WPM: ${Math.round(numWords / (timeElapsed / 1000) * 60)}`;

        const accuracy = document.querySelector('.accuracy');
        const numCorrect = document.querySelectorAll('.correct').length;
        accuracy.innerText = `🎯 ${Math.round(numCorrect / (characterSpans.length - 1) * 100)}%`

        document.querySelector('textarea').disabled = true;
    }

    const handleRetry = () => {
        const textarea = document.querySelector('textarea');
        textarea.disabled = false;
        textarea.value = '';
        document.querySelectorAll('.correct').forEach(char => {
            char.classList.remove('correct');
        });

        document.querySelectorAll('.incorrect').forEach(char => {
            char.classList.remove('incorrect');
        });

        document.querySelector('.retry').disabled = true;
        document.querySelector('.retry').classList.add('buttonDisabled');
        setStarted(false);
        setFinished(false);
    }

    const handleReset = async () => {
        const textarea = document.querySelector('textarea');
        textarea.disabled = false;
        textarea.value = '';
        document.querySelectorAll('.correct').forEach(char => {
            char.classList.remove('correct');
        });

        document.querySelectorAll('.incorrect').forEach(char => {
            char.classList.remove('incorrect');
        });
        setStarted(false);
        setFinished(false);

        const response = await fetch('/api/get-words', {
            method: 'POST',
            body: JSON.stringify(numWords)
        });
        setWordBank(await response.json());

        document.querySelector('.retry').disabled = true;
        document.querySelector('.retry').classList.add('buttonDisabled');
    }

    useEffect(() => {
        document.querySelector('label#defaultNumWords').classList.add('checked');
        document.querySelector('label#defaultNumWords input').disabled = true;
        document.querySelector('.retry').disabled = true;
        document.querySelector('.retry').classList.add('buttonDisabled');
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
                    <div className='statistics'>
                        <p className='accuracy'>🎯 XX%</p>
                        <p className='wpm'>WPM: XX</p>
                    </div>
                </div>
                <hr></hr>
                <div className='wordBank'>
                    {characterSpans}
                </div>
                <textarea 
                 className='inputBox' onPaste={handlePaste} onChange={handleTyping} placeholder='Start Typing...' 
                 autoFocus autoCapitalize='off' autoCorrect='off' spellCheck='false'
                >
                </textarea>
                <button className='reset' onClick={handleReset}>Reset</button>
                <button className='retry' onClick={handleRetry}>Retry</button>
            </div>
        </div>
    )
}