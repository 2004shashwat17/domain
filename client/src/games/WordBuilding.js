import React, { useState, useRef, useEffect } from 'react';
import './WordBuilding.css';

const WordBuilding = () => {
    const [level, setLevel] = useState('easy');
    const [task, setTask] = useState('');
    const [grammar, setGrammar] = useState(0);
    const [structure, setStructure] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const [creativity, setCreativity] = useState(0); // Added new factor
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        generateTask();
    }, [level]);

    const generateTask = () => {
        if (level === 'easy') {
            setTask('apple');
        } else if (level === 'medium') {
            setTask('The quick brown fox jumps over the lazy dog.');
        } else if (level === 'hard') {
            setTask('In the midst of chaos, there is also opportunity. Sun Tzu said it best.');
        }
    };

    // Randomly generate percentage values (from 80% to 100%)
    const generateRandomValues = () => {
        setGrammar((Math.random() * (100 - 80) + 80).toFixed(1));
        setStructure((Math.random() * (100 - 80) + 80).toFixed(1));
        setAccuracy((Math.random() * (100 - 80) + 80).toFixed(1));
        setCreativity((Math.random() * (100 - 80) + 80).toFixed(1)); // Creativity between 80% to 100%
    };

    const startDrawing = (e) => {
        const { offsetX, offsetY } = e.nativeEvent;
        const ctx = canvasRef.current.getContext('2d');
        ctx.moveTo(offsetX, offsetY);
        ctx.beginPath();
        setIsDrawing(true);
        if (timer) {
            clearTimeout(timer);  // Clear any previous timer when drawing starts again
        }
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const { offsetX, offsetY } = e.nativeEvent;
        const ctx = canvasRef.current.getContext('2d');
        ctx.lineTo(offsetX, offsetY);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
        ctx.stroke();
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        const newTimer = setTimeout(() => {
            generateRandomValues();  // Generate values 5 seconds after drawing stops
        }, 5000);
        setTimer(newTimer);  // Store the timer to be cleared if drawing restarts
    };

    return (
        <div className="handwriting-game">
            <div className="canvas-container">
                <canvas
                    ref={canvasRef}
                    width={400}
                    height={400}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                />
            </div>
            <div className="task-container">
                <h2>Level: {level.charAt(0).toUpperCase() + level.slice(1)}</h2>
                <p>{task}</p>
                <button onClick={() => setLevel('easy')}>Easy</button>
                <button onClick={() => setLevel('medium')}>Medium</button>
                <button onClick={() => setLevel('hard')}>Hard</button>
                <div className="result-container">
                    <h3>Results</h3>
                    <p>Grammar: {grammar}%</p>
                    <p>Structure: {structure}%</p>
                    <p>Accuracy: {accuracy}%</p>
                    <p>Creativity: {creativity}%</p> {/* Display Creativity */}
                </div>
            </div>
        </div>
    );
};

export default WordBuilding;
