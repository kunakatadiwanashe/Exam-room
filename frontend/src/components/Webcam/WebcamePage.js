import React, { useCallback, useRef, useState } from 'react'
import "./web.css"

// web came
import Webcam from "react-webcam";
import ImageUpload from './ImageUpload';


export const WebcamePage = () => {

    const videoStyles = {
        width: { min: 635 },
        height: { min: 334 },
        facingMode: "user"
      };

      const btnCapture ={
        width: "193px",height: "49px",
        color: "#0061BB",
        fontSize: "18px",border: "2px solid #0061BB",
      }
      const btnCapture2 ={
        width: "193px",height: "49px",
        background: "#0061BB",color: "#fff",
        fontSize: "18px",border: "none",
      }
      const btnwrapper ={
       display: "flex", justifyContent: "space-between",
       width: "60%",margin: "0 auto"
      }


      const [img, setImg] = useState(null);
      const webcamRef = useRef(null);

      const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImg(imageSrc);
      }, [webcamRef]);      ///////

    
   
  return (
    <div>
        <div className='get-stated'>
             <h1>Let’s get you settled.</h1>
             
            <p>Make sure your camera is facing you. 
                 This is to identify your face, so as to avoid impersonation.
            </p>
        </div>

      {img === null ? (
        <>
        <Webcam 
           imageSmoothing={true}  
           videoConstraints={videoStyles}
           mirrored={true}
           audio={false}
           ref={webcamRef}
           screenshotFormat='image/jpeg'
         />
         <div className='btnwrapper' style={btnwrapper}>
           <button style={btnCapture} >
               upload
           </button>
           <button style={btnCapture2} onClick={capture}>Capture Picture</button>
         </div>


        </>
      ) : (
        <>
           <img src={img} alt="screenshot" />
           <button onClick={() => setImg(null)}>Retake</button>
        </>
      )}
    </div>
  );
}

















