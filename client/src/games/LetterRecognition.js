import React, { useState } from 'react';
import './LetterRecognition.css';
import Camera from './Camera';

// Import images directly
import SignAImage from '../assets/sign1.jpg';
import SignBImage from '../assets/sign2.jpg';

const LetterRecognition = () => {
    const [currentSign, setCurrentSign] = useState('');
    const [message, setMessage] = useState('');
    const [dataset, setDataset] = useState({ A: [], B: [], C: [] });

    const handleCapture = (dataUrl) => {
        if (currentSign) {
            setDataset(prev => ({
                ...prev,
                [currentSign]: [...prev[currentSign], dataUrl]
            }));
        }
    };

    const handleSignRecognition = (sign) => {
        setCurrentSign(sign);
        const capturedImage = dataset[sign][0];
        if (capturedImage) {
            setMessage(`This is the letter ${sign}.`);
        } else {
            setMessage('Sign not recognized.');
        }
    };

    return (
        <div className="sign-language-game">
            <h1>Sign Language Recognition Game</h1>
            <div className="game-container">
                <div className="sign-gallery">
                    <img src={SignAImage} alt="Sign A" className="sign-image" />
                    <h2>Sign A</h2>
                    <img src={SignBImage} alt="Sign B" className="sign-image" />
                    <h2>Sign B</h2>
                </div>
                <div className="camera-view">
                    <Camera onCapture={handleCapture} />
                </div>
            </div>
            <div className="sign-recognition">
                <button onClick={() => handleSignRecognition('A')}>Sign A</button>
                <button onClick={() => handleSignRecognition('B')}>Sign B</button>
                <button onClick={() => handleSignRecognition('C')}>Sign C</button>
            </div>
            <div className="sign-result">
                <h2>Recognized Sign: {currentSign}</h2>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default LetterRecognition;
