import React, { useContext, useEffect } from "react";
import { PointsContext } from "./PointsContext";
import "./Scorepoints.css"; // Import the CSS for styling

const ScorePoints = () => {
  const { totalPoints, setTotalPoints } = useContext(PointsContext);

  const gameScores = [
    { name: "Memory Match🎯", score: 120 },
    { name: "Shape Sorter🥙", score: 100 },
    { name: "Color Matching🚀", score: 85 },
    { name: "Number Sequencing⚙️", score: 95 },
    { name: "Puzzle Game🧩", score: 110 },
    { name: "Pattern Recognition🤥", score: 130 },
    { name: "Letter Recognition💌", score: 140 },
    { name: "Word Building🅰️", score: 90 },
    { name: "Maze Game🌽", score: 125 },
    { name: "Sound Identification🔊", score: 115 },
  ];

  const currentTotalPoints = gameScores.reduce((acc, game) => acc + game.score, 0);

  useEffect(() => {
    setTotalPoints(currentTotalPoints);

    // Add the class to the body when the component mounts
    document.body.classList.add('body-scorepoints');

    // Remove the class from the body when the component unmounts
    return () => {
      document.body.classList.remove('body-scorepoints');
    };
  }, [currentTotalPoints, setTotalPoints]);

  const handleRedeem = () => {
    alert(`You have redeemed ${totalPoints} points!`);
    setTotalPoints(0); // Reset points after redeeming
  };

  return (
    <div className="score-points">
      <table className="score-table">
        <thead>
          <tr>
            <th>Game</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {gameScores.map((game, index) => (
            <tr key={index}>
              <td>{game.name}</td>
              <td>{game.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-redeem">
        <p className="total-points">Total Points: {totalPoints}</p>
        <button className="redeem-button" onClick={handleRedeem}>REDEEM</button>
      </div>
    </div>
  );
};

export default ScorePoints;
