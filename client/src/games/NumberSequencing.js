import React, { useState, useEffect } from 'react';
import './NumberSequencing.css';

const NumberSequencing = () => {
  const [difficulty, setDifficulty] = useState('low');
  const [numberSequence, setNumberSequence] = useState([]);
  const [alphabetSequence, setAlphabetSequence] = useState([]);
  const [score, setScore] = useState(0);

  const numbers = {
    low: [1, 2, 3, 4, 5],
    medium: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    hard: Array.from({ length: 20 }, (_, i) => i + 1),
  };

  const alphabets = {
    low: ['A', 'B', 'C', 'D', 'E'],
    medium: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    hard: Array.from({ length: 20 }, (_, i) => String.fromCharCode(65 + i)), // A-Z
  };

  useEffect(() => {
    setNumberSequence(numbers[difficulty].sort(() => Math.random() - 0.5));
    setAlphabetSequence(alphabets[difficulty].sort(() => Math.random() - 0.5));
  }, [difficulty]);

  const handleDrop = (event, index, type) => {
    event.preventDefault();
    const newSequence = type === 'number' ? [...numberSequence] : [...alphabetSequence];
    const draggedIndex = Number(event.dataTransfer.getData('text/plain'));
    const draggedItem = newSequence[draggedIndex];
    newSequence.splice(draggedIndex, 1);
    newSequence.splice(index, 0, draggedItem);

    // Set the new sequence
    if (type === 'number') {
      setNumberSequence(newSequence);
    } else {
      setAlphabetSequence(newSequence);
    }

    // Check if the sequence is correct
    const correctSequence = type === 'number' ? numbers[difficulty].sort((a, b) => a - b) : alphabets[difficulty].sort();
    if (JSON.stringify(newSequence) === JSON.stringify(correctSequence)) {
      setScore(score + 1); // Award 1 point for correct sequence
      alert(`${type.charAt(0).toUpperCase() + type.slice(1)} Sequence Correct! You earned 1 point.`);
    }
  };

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Speech function to read instructions
  const readInstructions = () => {
    const instructions = 
      "Your goal is to arrange the numbers and letters in the correct order. " +
      "You can drag and drop the boxes to reorder them. " +
      "Earn points by completing the sequences correctly. " +
      "Select the difficulty level to begin. Have fun!";
    
    // Stop any currently speaking utterance
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel(); // Stop current speech
    }

    const speech = new SpeechSynthesisUtterance(instructions);
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="number-sequencing">
      <h2>Number Sequencing</h2>

      {/* Instructions Section */}
      <div className="instructions">
        <h3>Instructions</h3>
        <p>
          Welcome to the Number and Alphabet Sequencing game! Your goal is to arrange the numbers and letters in the correct order. 
          You can drag and drop the boxes to reorder them. Earn points by completing the sequences correctly. 
          Select the difficulty level to begin. Have fun!
        </p>
        <button className="speech-button" onClick={readInstructions}>🔊 Read Instructions</button>
      </div>

      <div className="difficulty-selector">
        <label>
          <input
            type="radio"
            name="difficulty"
            value="low"
            checked={difficulty === 'low'}
            onChange={() => setDifficulty('low')}
          />
          Low
        </label>
        <label>
          <input
            type="radio"
            name="difficulty"
            value="medium"
            checked={difficulty === 'medium'}
            onChange={() => setDifficulty('medium')}
          />
          Medium
        </label>
        <label>
          <input
            type="radio"
            name="difficulty"
            value="hard"
            checked={difficulty === 'hard'}
            onChange={() => setDifficulty('hard')}
          />
          Hard
        </label>
      </div>

      {/* Number Grid */}
      <h3>Number Sequence</h3>
      <div className="sequence-grid">
        {numberSequence.map((num, index) => (
          <div
            key={index}
            className="number-box"
            draggable
            onDragStart={(event) => handleDragStart(event, index)}
            onDrop={(event) => handleDrop(event, index, 'number')}
            onDragOver={handleDragOver}
          >
            {num}
          </div>
        ))}
      </div>

      {/* Alphabet Grid */}
      <h3>Alphabet Sequence</h3>
      <div className="sequence-grid">
        {alphabetSequence.map((alpha, index) => (
          <div
            key={index}
            className="alpha-box"
            draggable
            onDragStart={(event) => handleDragStart(event, index)}
            onDrop={(event) => handleDrop(event, index, 'alphabet')}
            onDragOver={handleDragOver}
          >
            {alpha}
          </div>
        ))}
      </div>

      <div className="score">
        <h3>Score: {score}</h3>
      </div>
    </div>
  );
};

export default NumberSequencing;
