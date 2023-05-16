
import React, { useState } from 'react';
import './App.css';
import ExamRoom from './components/ExamRoom';
import './App.css';
import UploadModal from './components/UploadModal';
import WebcamIntervalCapture from './components/Webcam/WebcamIntervalCapture';
import WebcamVideo from './components/Webcam/WebcamVideo';
import { WebcamePage } from "./components/Webcam/WebcamePage";






function App() {
  const [examRoomState] = useState({});

  return (
    <div className="App">
         
      <ExamRoom />


    </div>
  );
}

export default App;
