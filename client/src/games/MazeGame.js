import React, { useState, useEffect } from "react";
import "./MazeGame.css";

const mazes = {
  low: [
    ["S", " ", " ", "X", " ", "X", "E"],
    ["X", "X", " ", "X", " ", " ", " "],
    [" ", " ", " ", " ", " ", "X", " "],
    [" ", "X", "X", "X", "X", "X", " "],
    [" ", " ", " ", " ", " ", " ", " "],
  ],
  medium: [
    ["S", "X", " ", " ", " ", "X", " ", "E"],
    [" ", "X", " ", "X", " ", "X", " ", " "],
    [" ", " ", " ", "X", " ", "X", " ", " "],
    [" ", "X", "X", "X", " ", "X", "X", "X"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", "X", "X", "X", "X", "X", "X", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
  ],
  hard: [
    ["S", "X", " ", "X", " ", "X", " ", "X", "E"],
    [" ", "X", " ", "X", " ", "X", " ", "X", " "],
    [" ", " ", " ", " ", " ", "X", " ", " ", " "],
    ["X", "X", "X", "X", "X", "X", "X", "X", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", "X", "X", "X", "X", "X", "X", "X", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", "X", "X", "X", "X", "X", "X", "X", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  ],
};

const MazeGame = () => {
  const [difficulty, setDifficulty] = useState("low");
  const [maze, setMaze] = useState(mazes[difficulty]);
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMaze(mazes[difficulty]);
    setPosition({ x: 0, y: 0 });
  }, [difficulty]);

  const movePlayer = (direction) => {
    const { x, y } = position;
    let newX = x;
    let newY = y;

    if (direction === "up" && x > 0) newX--;
    if (direction === "down" && x < maze.length - 1) newX++;
    if (direction === "left" && y > 0) newY--;
    if (direction === "right" && y < maze[0].length - 1) newY++;

    if (maze[newX][newY] !== "X") {
      setPosition({ x: newX, y: newY });
      if (maze[newX][newY] === "E") {
        setScore(score + 1);
        alert("Congratulations! You've completed the maze and earned 1 point.");
        setDifficulty(difficulty); // Reset the game
      }
    }
  };

  return (
    <div className="maze-game">
      <h2>Maze Game</h2>
      <div className="difficulty-selector">
        <label>
          <input
            type="radio"
            name="difficulty"
            value="low"
            checked={difficulty === "low"}
            onChange={() => setDifficulty("low")}
          />
          Easy
        </label>
        <label>
          <input
            type="radio"
            name="difficulty"
            value="medium"
            checked={difficulty === "medium"}
            onChange={() => setDifficulty("medium")}
          />
          Medium
        </label>
        <label>
          <input
            type="radio"
            name="difficulty"
            value="hard"
            checked={difficulty === "hard"}
            onChange={() => setDifficulty("hard")}
          />
          Hard
        </label>
      </div>
      <div className="maze-area">
        {maze.map((row, rowIndex) => (
          <div key={rowIndex} className="maze-row">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`maze-cell ${
                  position.x === rowIndex && position.y === cellIndex
                    ? "player"
                    : ""
                }`}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={() => movePlayer("up")}>Up</button>
        <button onClick={() => movePlayer("left")}>Left</button>
        <button onClick={() => movePlayer("down")}>Down</button>
        <button onClick={() => movePlayer("right")}>Right</button>
      </div>
      <div className="score">
        <h3>Score: {score}</h3>
      </div>
    </div>
  );
};

export default MazeGame;
