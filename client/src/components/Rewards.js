import React, { useContext, useEffect } from "react";
import { PointsContext } from "./PointsContext";
import "./Rewards.css"; // Import the CSS for styling

const Rewards = () => {
  const { totalPoints, setTotalPoints } = useContext(PointsContext);

  const rewardsList = [
    {
      name: "Memory Match Master",
      description: "Complete Memory Match in under 2 minutes.",
      points: 150,
      backgroundImage: `url(${require('../assets/bag.jpeg')})`
    },
    {
      name: "Shape Sorter Genius",
      description: "Sort all shapes without a mistake.",
      points: 130,
      backgroundImage: `url(${require('../assets/chocolate.jpeg')})`
    },
    {
      name: "Color Matching Pro",
      description: "Match all colors correctly on the first try.",
      points: 160,
      backgroundImage: `url(${require('../assets/comic.webp')})`
    },
    {
      name: "Puzzle Master",
      description: "Solve the puzzle in record time.",
      points: 170,
      backgroundImage: `url(${require('../assets/cube.jpeg')})`
    },
    {
      name: "Pattern Pro",
      description: "Identify all patterns flawlessly.",
      points: 55,
      backgroundImage: `url(${require('../assets/encyclopedia.jpeg')})`
    },
    {
      name: "Quick Thinker",
      description: "Answer all questions correctly under pressure.",
      points: 145,
      backgroundImage: `url(${require('../assets/bag.jpeg')})`
    },
    {
      name: "Logic Wizard",
      description: "Master the logic games.",
      points: 165,
      backgroundImage: `url(${require('../assets/cube.jpeg')})`
    },
    // Add more rewards as needed
  ];

  const handleBuy = (rewardPoints) => {
    if (totalPoints >= rewardPoints) {
      setTotalPoints(prevPoints => prevPoints - rewardPoints);
      alert("Purchased successfully!");
    } else {
      alert("Can't purchase. Not enough points.");
    }
  };

  useEffect(() => {
    // Add the class to the body when the component mounts
    document.body.classList.add('body-rewards');

    // Remove the class from the body when the component unmounts
    return () => {
      document.body.classList.remove('body-rewards');
    };
  }, []);

  return (
    <div className="rewards-section">
      <h2>Rewards 🎁</h2>
      <div className="total-points">Total Points: {totalPoints}</div>
      <div className="rewards-grid">
        {rewardsList.map((reward, index) => (
          <div
            key={index}
            className="reward-item"
            style={{ backgroundImage: reward.backgroundImage }}
          >
            <h3>{reward.name}</h3>
            <p>{reward.description}</p>
            <div className="reward-price">Points: {reward.points}</div>
            <button className="redeem-button" onClick={() => handleBuy(reward.points)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;
