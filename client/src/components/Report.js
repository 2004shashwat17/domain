import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import './Report.css';

// Register the necessary components with Chart.js
Chart.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ReportPage = () => {
    const gamesReport = [
        { name: 'Memory Match🎯', score: 120, status: 'Completed' },
        { name: 'Shape Sorter🥙', score: 100, status: 'Completed' },
        { name: 'Color Matching🚀', score: 85, status: 'In Progress' },
        { name: 'Number Sequencing⚙️', score: 95, status: 'Completed' },
        { name: 'Puzzle Game🧩', score: 110, status: 'Completed' },
        { name: 'Pattern Recognition🤥', score: 130, status: 'Completed' },
        { name: 'Letter Recognition💌', score: 140, status: 'Completed' },
        { name: 'Word Building🅰️', score: 90, status: 'In Progress' },
        { name: 'Maze Game🌽', score: 125, status: 'Completed' },
        { name: 'Sound Identification🔊', score: 115, status: 'Completed' }
    ];

    const totalPoints = gamesReport.reduce((total, game) => total + game.score, 0);

    const pieData = {
        labels: gamesReport.map(game => game.name),
        datasets: [
            {
                data: gamesReport.map(game => game.score),
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
                    '#FF9F40', '#FFCD56', '#36A2EB', '#FF6384', '#4BC0C0'
                ],
                hoverBackgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
                    '#FF9F40', '#FFCD56', '#36A2EB', '#FF6384', '#4BC0C0'
                ]
            }
        ]
    };

    const barData = {
        labels: ['Total Games', 'Total Points'],
        datasets: [
            {
                label: 'Brain Development',
                backgroundColor: ['#36A2EB', '#FF6384'],
                data: [8, totalPoints] // Set the Total Games value to 800 by default
            }
        ]
    };

    const barOptions = {
        scales: {
            y: {
                beginAtZero: true,
                max: 10// Set the maximum value for the y-axis to 800
            }
        }
    };

    return (
        <div className="report-page">
            <table className="report-table">
                <thead>
                    <tr>
                        <th>Game Name</th>
                        <th>Score</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {gamesReport.map((game, index) => (
                        <tr key={index}>
                            <td>{game.name}</td>
                            <td>{game.score}</td>
                            <td>{game.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Total Points: {totalPoints}</h2>
            <div className="charts-container">
                <div className="chart">
                    <h3>Time Dedication per Game</h3>
                    <Pie data={pieData} />
                </div>
                <div className="chart">
                    <h3>Brain Development - Total Points</h3>
                    <Bar data={barData} options={barOptions} />
                </div>
                <div className="brain-development-animation">
                    {/* Add animation component or any related content */}
                </div>
            </div>
        </div>
    );
};

export default ReportPage;
