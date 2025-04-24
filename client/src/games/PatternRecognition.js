import React, { useState, useEffect } from 'react';
import './PatternRecognition.css';

const levels = {
  easy: ["apple", "cat", "dog", "ball", "fish"],
  medium: ["banana", "grape", "orange", "lion", "tiger"],
  hard: ["elephant", "giraffe", "hippopotamus", "rhinoceros", "crocodile"]
};

const PatternRecognition = () => {
  const [currentLevel, setCurrentLevel] = useState('easy');
  const [currentWord, setCurrentWord] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (attempts < 5) {
      const word = getRandomWord();
      setCurrentWord(word);
      speakWord(word);
    } else {
      setIsGameOver(true);
    }
  }, [attempts]);

  const getRandomWord = () => {
    const words = levels[currentLevel];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const speakWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);
  };

  const startRecognition = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
      const spokenWord = event.results[0][0].transcript.toLowerCase();
      console.log(`Spoken word: ${spokenWord}`); // Debug log
      if (spokenWord === currentWord.toLowerCase()) {
        setScore(prevScore => prevScore + 1);
        console.log('Score updated:', score + 1); // Debug log
      }
      setAttempts(prevAttempts => prevAttempts + 1);
    };

    recognition.onspeechend = () => {
      recognition.stop();
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };
  };

  const handleWordClick = () => {
    speakWord(currentWord);
    setTimeout(() => {
      startRecognition();
    }, 100);
  };

  const restartGame = () => {
    setAttempts(0);
    setScore(0);
    setIsGameOver(false);
  };

  return (
    <div className="game-container">
      {/* <h1>Pronunciation Game</h1> */}
      <div className="level-buttons">
        <button onClick={() => setCurrentLevel('easy')}>Easy</button>
        <button onClick={() => setCurrentLevel('medium')}>Medium</button>
        <button onClick={() => setCurrentLevel('hard')}>Hard</button>
      </div>
      {!isGameOver ? (
        <div className="game-content">
          <h2>Level: {currentLevel}</h2>
          <div className="word" onClick={handleWordClick}>
            {currentWord}
          </div>
          <p>Attempts: {attempts} / 5</p>
          <p>Score: {score}</p>
        </div>
      ) : (
        <div className="game-over">
          <h2>Game Over!</h2>
          <p>Your score is: {score} / 5</p>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default PatternRecognition;
