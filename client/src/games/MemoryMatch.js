import React, { useState, useEffect } from "react";
import "./MemoryMatch.css";

const MemoryMatch = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [levelCleared, setLevelCleared] = useState(false);

  const cardImages = [
    "🐶",
    "🐱",
    "🐭",
    "🐰",
    "🦊",
    "🐻",
    "🐼",
    "🐯",
    "🦁",
    "🐮",
  ];

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const pairs = 6; // Hardcoded to 6 pairs for simplicity
    const shuffledCards = [
      ...cardImages.slice(0, pairs),
      ...cardImages.slice(0, pairs),
    ]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({
        id: index,
        content: card,
        flipped: false,
      }));

    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setLevelCleared(false);
  };

  const flipCard = (id) => {
    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [first, second] = newFlippedCards;
      if (cards[first].content === cards[second].content) {
        setMatchedCards([...matchedCards, first, second]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  useEffect(() => {
    if (
      matchedCards.length === cards.length &&
      cards.length > 0 &&
      !levelCleared
    ) {
      setScore(score + 1);
      setLevelCleared(true);
    }
  }, [matchedCards, cards.length, score, levelCleared]);

  // Function to read the instructions
  const readInstructions = () => {
    const instructions = "Flip two cards at a time and try to match them. Match all pairs to win!";
    const speech = new SpeechSynthesisUtterance(instructions);
    speech.lang = "en-US"; // Set the language
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="memory-match-container">
      {/* Game Instructions */}
      <div className="instructions">
        <h2>How to Play 🕹️</h2>
        <p>Flip two cards at a time and try to match them. Match all pairs to win!</p>
        {/* Speech Button */}
        <button onClick={readInstructions} className="speech-button">
          Read Instructions
        </button>
      </div>

      {/* Game Content */}
      <div className="memory-match">
        <div className="board">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card ${
                flippedCards.includes(index) || matchedCards.includes(index)
                  ? "flipped"
                  : ""
              }`}
              onClick={() =>
                flippedCards.length < 2 &&
                !flippedCards.includes(index) &&
                !matchedCards.includes(index) &&
                flipCard(index)
              }
            >
              <div className="card-inner">
                <div className="card-front">❓</div>
                <div className="card-back">{card.content}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="stats">
          <p>Moves: {moves}</p>
          <p>Score: {score}</p>
        </div>
      </div>
    </div>
  );
};

export default MemoryMatch;
