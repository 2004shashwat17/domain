import React, { useState } from 'react';
import MemoryMatch from './MemoryMatch';
import ScorePoints from './Scorepoints';
import Rewards from './Rewards';

// Inside the ParentComponent return
<Rewards scores={gameScores.reduce((acc, game) => ({ ...acc, [game.name]: game.score }), {})} />


const ParentComponent = () => {
  const [gameScores, setGameScores] = useState([
    { name: "Memory Match🎯", score: 0 },
    // Other games
  ]);

  const updateScore = (gameName, score) => {
    setGameScores(prevScores => 
      prevScores.map(game => 
        game.name === gameName ? { ...game, score } : game
      )
    );
  };

  return (
    <div>
      <MemoryMatch onScoreUpdate={updateScore} />
      <ScorePoints gameScores={gameScores} />
    </div>
  );
};

export default ParentComponent;
