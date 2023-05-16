import React, { useEffect, useRef } from 'react'
import Webcam from 'react-webcam';


const WebcamIntervalCapture = () => {

 const webcamRef = useRef(null);
  
 useEffect (() => {
    const interval = setInterval (() => {
        captureFrame();
    }, 5000);

    return () => {
        clearInterval (interval);
    };
 }, []);

 const captureFrame = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
// send to captured dat to backen
    const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image: imageSrc})
    });

    if (!response.ok) {
        console.error('failed to send data captured')
    }
    console.log(imageSrc);
 };





  return (
    <div>
        <Webcam ref={webcamRef} mirrored={true} imageSmoothing={true}  />;
    </div>
  )
}

export default WebcamIntervalCapture