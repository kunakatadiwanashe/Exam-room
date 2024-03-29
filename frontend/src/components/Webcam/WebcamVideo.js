import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'



const WebcamVideo = () => {

    const webcamRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [capturing, setCapturing] = useState(false);
    const [recordedChunks, setRecordedChunks] = useState([]);

    const handleDataAvailable = useCallback(
        ({ data }) => {
            if (data.size > 0) {
                setRecordedChunks((prev) => prev.concat(data));
            }
        },
        [setRecordedChunks]
    );

    const handleStartCaptureClick = useCallback(() => {
        setCapturing(true);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
          mimeType: "video/webm",
        });
        mediaRecorderRef.current.addEventListener(
          "dataavailable",
          handleDataAvailable
        );
        mediaRecorderRef.current.start();
      }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);

      const handleStopCaptureClick = useCallback(() => {
        mediaRecorderRef.current.stop();
        setCapturing(false);
      }, [mediaRecorderRef, setCapturing]);

      const handleDownload = useCallback(() => {
        if (recordedChunks.length) {
          const blob = new Blob(recordedChunks, {
            type: "video/webm",
          });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          document.body.appendChild(a);
          a.style = "display: none";
          a.href = url;
          a.download = "react-webcam-stream-capture.webm";
          a.click();
          window.URL.revokeObjectURL(url);
          setRecordedChunks([]);
        }
      }, [recordedChunks]);  // to send video to back end saver

      const videoStyles = {
        width: 420,
        height: 420,
        facingMode: "user",
      };

  return (
    <div className="Container">
    <Webcam
      height={400}
      width={400}
      audio={false}
      mirrored={true}
      ref={webcamRef}
      videoConstraints={videoStyles}
    />
    {capturing ? (
      <button onClick={handleStopCaptureClick}>Stop Capture</button>
    ) : (
      <button onClick={handleStartCaptureClick}>Start Capture</button>
    )}
    {recordedChunks.length > 0 && (
      <button onClick={handleDownload}>Download</button>
    )}
  </div>
  )
}

export default WebcamVideo