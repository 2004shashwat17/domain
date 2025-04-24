import React, { useState, useEffect } from 'react';
import './ShapeSorter.css';

const shapes = [
  { id: 1, type: 'circle', name: 'Circle' },
  { id: 2, type: 'square', name: 'Square' },
  { id: 3, type: 'triangle', name: 'Triangle' },
  { id: 4, type: 'pentagon', name: 'Pentagon' },
  { id: 5, type: 'hexagon', name: 'Hexagon' },
  { id: 6, type: 'octagon', name: 'Octagon' },
  { id: 7, type: 'star', name: 'Star' },
  { id: 8, type: 'heart', name: 'Heart' },
  { id: 9, type: 'diamond', name: 'Diamond' },
  { id: 10, type: 'parallelogram', name: 'Parallelogram' },
  { id: 11, type: 'crescent', name: 'Crescent' },
  { id: 12, type: 'oval', name: 'Oval' },
  { id: 13, type: 'trapezoid', name: 'Trapezoid' },
  { id: 14, type: 'cross', name: 'Cross' },
  { id: 15, type: 'zigzag', name: 'Zigzag' },
  { id: 16, type: 'arrow', name: 'Arrow' },
  { id: 17, type: 'semiCircle', name: 'Semi-Circle' },
  { id: 18, type: 'gear', name: 'Gear' },
  { id: 19, type: 'rhombus', name: 'Rhombus' },
  { id: 20, type: 'flower', name: 'Flower' },
];

const ShapeSorter = () => {
  const [draggedShape, setDraggedShape] = useState(null);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');

  // Function to generate a random position
  const getRandomPosition = () => {
    return {
      left: `${Math.random() * 80}vw`, // Random left position
      top: `${Math.random() * 80}vh`, // Random top position
    };
  };

  useEffect(() => {
    const shapeElements = document.querySelectorAll('.shape');

    const animateShapes = () => {
      shapeElements.forEach((shape) => {
        const { left, top } = getRandomPosition();
        shape.style.transform = `translate(${left}, ${top})`; // Apply random position
      });
    };

    const intervalId = setInterval(animateShapes, 2000); // Change position every 2 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  const handleDragStart = (e, shapeType) => {
    setDraggedShape(shapeType);
  };

  const handleDrop = (e, shapeName) => {
    e.preventDefault();
    if (draggedShape) {
      if (shapes.find(shape => shape.type === draggedShape && shape.name === shapeName)) {
        setScore(prevScore => prevScore + 1);
        setMessage(`Correct! ${draggedShape} matches ${shapeName}.`);
      } else {
        setMessage(`Incorrect! ${draggedShape} does not match ${shapeName}.`);
      }
      setDraggedShape(null); // Reset dragged shape
    }
  };

  const allowDrop = (e) => {
    e.preventDefault(); // Prevent default behavior for drop
  };

  // Function to read the instructions
  const readInstructions = () => {
    const instructionsText = `How to Play: Drag the shape from the left column and drop it on the matching shape name in the right column. Your goal is to correctly match as many shapes as possible. Each correct match will increase your score!`;
    const utterance = new SpeechSynthesisUtterance(instructionsText);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="puzzle-game">
      <br />
      <br />
      {/* Instructions Section */}
      <div className="instructions">
        <h2>How to Play 🕹️</h2>
        <p>Drag the shape from the left column and drop it on the matching shape name in the right column. Your goal is to correctly match as many shapes as possible. Each correct match will increase your score!</p>
        <button onClick={readInstructions}>Read Instructions</button> {/* Speech Button */}
      </div>
<br />
<h2>Score: {score}</h2>
      {message && <h3>{message}</h3>}

      <div className="puzzle-container">
        <div className="shape-column">
          {shapes.map((shape) => (
            <div
              key={shape.id}
              className={`shape ${shape.type}`}
              draggable
              onDragStart={(e) => handleDragStart(e, shape.type)}
              onDragEnd={() => setDraggedShape(null)}
            />
          ))}
        </div>
        <div className="words-column">
          {shapes.map((shape) => (
            <div
              key={shape.id}
              className="word-box"
              onDrop={(e) => handleDrop(e, shape.name)}
              onDragOver={allowDrop}
            >
              {shape.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShapeSorter;
