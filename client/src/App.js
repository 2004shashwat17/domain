import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PointsProvider } from './components/PointsContext';
import Home from "./components/Home";
import ProfileSection from "./components/ProfileSection";
import About from "./components/About";
import Rewards from "./components/Rewards";
import Report from "./components/Report";
import ScorePoints from "./components/Scorepoints";
import MemoryMatch from "./games/MemoryMatch";
import ShapeSorter from "./games/ShapeSorter";  
import ColorMatching from "./games/ColorMatching";
import NumberSequencing from "./games/NumberSequencing";
import PuzzleGame from "./games/PuzzleGame";
import PatternRecognition from "./games/PatternRecognition";
import LetterRecongnition from "./games/LetterRecognition";
import WordBuilding from "./games/WordBuilding";
import MazeGame from "./games/MazeGame";
import SoundIdentification from "./games/SoundIdentification";
import SoundboardGame from "./games/SoundboardGame";

 // Import your games
// Import other games here...

function App() {
  return (
    <Router>
      <PointsProvider>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<ProfileSection />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/reward" element={<Rewards />} />
          <Route exact path="/score" element={<ScorePoints/>} />
          <Route exact path="/report" element={<Report/>} />
          <Route path="/memory-match" element={<MemoryMatch />} />
          <Route path="/shape-sorter" element={<ShapeSorter />} />
          <Route path="/color-quiz" element={<ColorMatching/>} />
          <Route path="/puzzle-game" element={<NumberSequencing/>} />
          <Route path="/math-game" element={<PuzzleGame/>} />
          <Route path="/word-search" element={<PatternRecognition/>} />
          <Route path="/letter" element={<LetterRecongnition/>}/>
          <Route path="/building" element={<WordBuilding/>}/>
          <Route path="/maze" element={<MazeGame/>}/>
          <Route path="/sound" element={<SoundIdentification/>}/>
          <Route path="/soundboard" element={<SoundboardGame/>}/>
          {/* Add routes for other games here... */}
        </Routes>
      </div>
      </PointsProvider>
    </Router>
  );
}

export default App;

