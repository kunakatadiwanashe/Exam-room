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
// send to captured dat to backend
    const response = await fetch('', {
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
    <div className='h-25 w-13 rounded-xl rounded-br'>
        <Webcam ref={webcamRef} mirrored={true} imageSmoothing={true} 
        className='object-contain h-full w-full rounded-xl rounded-br shadow-lg shadow-red-500 bg-white' />
    </div>
  )
}

export default WebcamIntervalCapture