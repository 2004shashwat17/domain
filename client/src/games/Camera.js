import React, { useState, useRef, useEffect } from 'react';
import './Camera.css';

const Camera = ({ onCapture }) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const getCameraStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoRef.current.srcObject = stream;
            } catch (error) {
                console.error("Error accessing the camera: ", error);
            }
        };

        getCameraStream();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject;
                const tracks = stream.getTracks();

                tracks.forEach(track => track.stop());
            }
        };
    }, []);

    const captureFrame = () => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const dataUrl = canvasRef.current.toDataURL('image/png');
        onCapture(dataUrl); // Pass captured frame data to parent component
    };

    return (
        <div className="camera-container">
            <video ref={videoRef} autoPlay muted className="camera-view"></video>
            <canvas ref={canvasRef} width={300} height={200} style={{ display: 'none' }}></canvas>
            <button onClick={captureFrame}>Capture Frame</button>
        </div>
    );
};

export default Camera;
