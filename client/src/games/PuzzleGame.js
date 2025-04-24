import React, { useState, useEffect } from 'react';
import './PuzzleGame.css';

const PuzzleGame = () => {
  const [difficulty, setDifficulty] = useState('low');
  const [puzzle, setPuzzle] = useState([]);
  const [score, setScore] = useState(0);

  const pieces = {
    low: 4,
    medium: 9,
    hard: 16,
  };

  useEffect(() => {
    setPuzzle(
      Array.from({ length: pieces[difficulty] }, (_, i) => i + 1).sort(
        () => Math.random() - 0.5
      )
    );
  }, [difficulty]);

  const handleDrop = (event, index) => {
    event.preventDefault();
    const newPuzzle = [...puzzle];
    const draggedIndex = Number(event.dataTransfer.getData('text/plain'));
    const draggedPiece = newPuzzle[draggedIndex];
    newPuzzle.splice(draggedIndex, 1);
    newPuzzle.splice(index, 0, draggedPiece);
    setPuzzle(newPuzzle);

    if (JSON.stringify(newPuzzle) === JSON.stringify(Array.from({ length: pieces[difficulty] }, (_, i) => i + 1))) {
      setScore(score + 1); // Award 1 point for correct sequence
      alert('Puzzle Completed! You earned 1 point.');
    }
  };

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="puzzle-game">
      <h2>Puzzle Game</h2>
      <div className="difficulty-selector">
        <label>
          <input
            type="radio"
            name="difficulty"
            value="low"
            checked={difficulty === 'low'}
            onChange={() => setDifficulty('low')}
          />
          Easy
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
      <div className="puzzle-grid" style={{ gridTemplateColumns: `repeat(${Math.sqrt(pieces[difficulty])}, 1fr)` }}>
        {puzzle.map((piece, index) => (
          <div
            key={index}
            className="puzzle-piece"
            draggable
            onDragStart={(event) => handleDragStart(event, index)}
            onDrop={(event) => handleDrop(event, index)}
            onDragOver={handleDragOver}
          >
            {piece}
          </div>
        ))}
      </div>
      <div className="score">
        <h3>Score: {score}</h3>
      </div>
    </div>
  );
};

export default PuzzleGame;
