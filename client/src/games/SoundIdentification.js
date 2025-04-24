import React, { useState, useEffect } from 'react';
import './SoundIdentification.css';

const SoundIdentification = () => {
  const [word, setWord] = useState('');
  const [spokenWord, setSpokenWord] = useState('');
  const [message, setMessage] = useState('');
  const [responseTime, setResponseTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [difficulty, setDifficulty] = useState('easy');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10); // 10 seconds countdown timer

  const words = ['apple', 'banana', 'grape', 'orange', 'mango'];
  const sentences = ['I love to eat fruit.', 'Bananas are yellow.', 'Oranges are juicy and sweet.'];
  const paragraphs = ['Mango is considered the king of fruits. It is known for its sweet and juicy flavor. People around the world enjoy mangoes during summer.'];

  useEffect(() => {
    if (!isPlaying) return;

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    const startTime = new Date().getTime();

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript.toLowerCase().trim();
      setSpokenWord(spokenText);

      const timeTaken = (new Date().getTime() - startTime) / 1000;
      setResponseTime(timeTaken.toFixed(2));

      if (normalizeText(spokenText) === normalizeText(word)) {
        const successMessage = `Correct! You spoke '${spokenText}' in ${timeTaken.toFixed(2)} seconds.`;
        setMessage(successMessage);
        setScore(score + 1); // Increase score
        giveSpeechFeedback(successMessage);
      } else {
        const failureMessage = `Incorrect! You spoke '${spokenText}' instead of '${word}'.`;
        setMessage(failureMessage);
        giveSpeechFeedback(failureMessage);
      }

      setIsPlaying(false);
    };

    recognition.onerror = (event) => {
      setMessage(`Error occurred: ${event.error}`);
      setIsPlaying(false);
    };

    recognition.start();

    return () => recognition.stop();
  }, [word, isPlaying]);

  useEffect(() => {
    if (isPlaying && timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setMessage(`Time's up! You said: '${spokenWord}'`);
      setIsPlaying(false);
    }
  }, [isPlaying, timer]);

  const normalizeText = (text) => {
    return text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  };

  const speakWord = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.pitch = 1.0;
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  const giveSpeechFeedback = (text) => {
    const feedbackUtterance = new SpeechSynthesisUtterance(text);
    feedbackUtterance.lang = 'en-US';
    feedbackUtterance.pitch = 1.0;
    feedbackUtterance.rate = 1.0;
    window.speechSynthesis.speak(feedbackUtterance);
  };

  const startGame = () => {
    let randomWord;
    switch (difficulty) {
      case 'easy':
        randomWord = words[Math.floor(Math.random() * words.length)];
        break;
      case 'medium':
        randomWord = sentences[Math.floor(Math.random() * sentences.length)];
        break;
      case 'hard':
        randomWord = paragraphs[Math.floor(Math.random() * paragraphs.length)];
        break;
      default:
        randomWord = words[Math.floor(Math.random() * words.length)];
    }

    setWord(randomWord);
    setMessage('');
    setSpokenWord('');
    setIsPlaying(true);
    setTimer(10); // Reset timer
    setScore(0); // Reset score

    // Speak the word or sentence
    speakWord(randomWord);
  };

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const speakInstructions = () => {
    const instructions = "Listen carefully to the word or sentence, then speak it back to the game. Identify your Response Time & Score! So Let's Begin.";
    speakWord(instructions);
  };

  return (
    <div className="game-container">
      <p>
        Listen carefully to the word or sentence, then speak it back to the game 🕹️
        <br />
        <p>Identify your Response Time & Score! So Let's Begin 💫</p>
      </p>
      <button onClick={speakInstructions} className="speak-button">
        Instructions🔊
      </button>
      <div className="difficulty-container">
        <label>
          Difficulty:
          <select value={difficulty} onChange={handleDifficultyChange}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
      </div>
      
      <div className="score-container">
        <p>Score: {score}</p>
        <p>Time Remaining: {timer} seconds</p>
      </div>

      <div className="word-container">
        {word && <h2>Say the word: <span>{word}</span></h2>}
      </div>
      <button onClick={startGame} className="start-button">
        {isPlaying ? 'Listening...' : 'Start Game'}
      </button>
      {message && (
        <div className="message-container">
          <p>{message}</p>
          {spokenWord && <p>Spoken Word: {spokenWord}</p>}
          {responseTime > 0 && <p>Response Time: {responseTime} seconds</p>}
        </div>
      )}
    </div>
  );
};

export default SoundIdentification;
