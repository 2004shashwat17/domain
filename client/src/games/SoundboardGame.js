import React, { useState } from 'react';
import './SoundboardGame.css';

const sounds = [
  { name: 'Rain', emoji: '🌧️', frequency: 300 },
  { name: 'Ocean Waves', emoji: '🌊', frequency: 150 },
  { name: 'Birds Chirping', emoji: '🐦', frequency: 500 },
  { name: 'Thunderstorm', emoji: '⛈️', frequency: 100 },
  { name: 'Fire Crackling', emoji: '🔥', frequency: 600 },
  { name: 'Wind Blowing', emoji: '🌬️', frequency: 200 }
];

const SoundboardGame = () => {
  const [currentSound, setCurrentSound] = useState(null);
  const [score, setScore] = useState(0);

  // Function to generate sound using Web Audio API
  const playSound = (frequency) => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine'; // You can change this to 'square', 'triangle', or 'sawtooth'
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime); // Frequency in Hz
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 1); // Sound duration: 1 second

    setCurrentSound(frequency);
  };

  const checkMatch = (sound) => {
    if (sound.frequency === currentSound) {
      alert('Correct match!');
      setScore(score + 1);
    } else {
      alert('Wrong match! Try again.');
    }
  };

  const speakInstructions = () => {
    const instructions = "Welcome to the Interactive Soundboard Game! First, play a sound by clicking a button. Then, match the sound to the correct emoji by clicking on it. Get it right to earn a point!";
    const utterance = new SpeechSynthesisUtterance(instructions);
    utterance.lang = 'en-US';
    utterance.pitch = 1.0;
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="soundboard-container">
      <div className="instructions-container">
        <p>Welcome to the Interactive Soundboard Game! 🕹️ 
          <br /><br />
          First, play a sound by clicking a button. Then, match the sound to the correct emoji by clicking on it.
          <br /> Get it right to earn a point! 💫</p>
        <button className="speak-button" onClick={speakInstructions}>
          Instructions🔊
        </button>
      </div>

      <div className="sound-buttons">
        {sounds.map((sound, index) => (
          <button key={index} onClick={() => playSound(sound.frequency)}>
            Play {sound.name}
          </button>
        ))}
      </div>

      <div className="emoji-grid">
        {sounds.map((sound, index) => (
          <div key={index} className="emoji-card" onClick={() => checkMatch(sound)}>
            <p className="emoji">{sound.emoji}</p>
            <p>{sound.name}</p>
          </div>
        ))}
      </div>

      <div className="score-board">
        <h3>Score: {score}</h3>
      </div>
    </div>
  );
};

export default SoundboardGame;
