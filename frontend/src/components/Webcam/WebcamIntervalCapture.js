import React, { useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam';
import gateway from '../../utils/gateway'

const WebcamIntervalCapture = () => {

    const webcamRef = useRef(null);
    const webcam = useRef(undefined);
    const [readyToStream, setReadyToStream] = useState(false);

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
        const response = await fetch('https://lh0seoyr60.execute-api.us-east-1.amazonaws.com/Prod/process', {
            method: 'POST',
            Authorization: '',

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


    const [testResults, setTestResults] = useState([]);
    const iterating = useRef(false);

    const getSnapshot = () => {
        const image = webcam.current.getScreenshot();
        const b64Encoded = image.split(",")[1];


        gateway.processImage(b64Encoded).then((response) => {
            if (response) setTestResults(response);
            if (iterating.current) setTimeout(getSnapshot, 300);
            else setTestResults([]);
        });
    };

    const setupWebcam = (instance) => {
        webcam.current = instance;

        const checkIfReady = () => {
            if (
                webcam.current &&
                webcam.current.state &&
                webcam.current.state.hasUserMedia
            ) {
                setReadyToStream(true);
            } else setTimeout(checkIfReady, 250);
        };

        checkIfReady();
    };


    return (
        <div className='h-25 w-13'>
            <Webcam ref={setupWebcam} mirrored={true} imageSmoothing={true} className='object-contain h-full w-full' />
        </div>
    )
}

export default WebcamIntervalCapture