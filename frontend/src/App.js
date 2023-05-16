import React from 'react';
import './App.css';
import UploadModal from './components/UploadModal';
import WebcamIntervalCapture from './components/Webcam/WebcamIntervalCapture';
import WebcamVideo from './components/Webcam/WebcamVideo';
import { WebcamePage } from "./components/Webcam/WebcamePage";





function App() {
  return (
    <div className="App">
       <>
              {/* <WebcamePage /> */}

           <UploadModal />
      
        {/* <WebcamIntervalCapture /> */}

       </>

      
          
    </div>
  );
}

export default App;
