import React, { useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam';
import gateway from "./../../utils/gateway";

const WebcamIntervalCapture = ({ actOnResults }) => {

    const webcamRef = useRef(null);
    const [testResults, setTestResults] = useState([]);
    const iterating = useRef(false);

    useEffect(() => {
        const interval = setInterval(() => {
            getSnapshot();
        }, 5000);

        return () => {
            clearInterval(interval);
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
            body: JSON.stringify({ image: imageSrc })
        });

        if (!response.ok) {
            console.error('failed to send data captured')
        }
        console.log(imageSrc);
    };

    const getSnapshot = () => {
        const image = webcamRef.current.getScreenshot();
        const b64Encoded = image.split(",")[1];

        gateway.processImage(b64Encoded).then((response) => {
            if (response) {
                setTestResults(response);
                actOnResults(response);
            }
            if (iterating.current) setTimeout(getSnapshot, 300);
            else setTestResults([]);
        });
    };






    return (
        <div className='h-25 w-13 rounded-xl rounded-br'>
            <Webcam ref={webcamRef} mirrored={true} imageSmoothing={true} screenshotFormat="image/jpeg"
                className='object-contain h-full w-full rounded-xl rounded-br shadow-lg bg-white shadow-red-500' />
        </div>
    )
}

export default WebcamIntervalCapture