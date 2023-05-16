import React, { useState } from 'react';
import './App.css';
import ExamRoom from './components/ExamRoom';

function App() {
  const [examRoomState] = useState({});

  return (
    <div className="App">
      <ExamRoom />

    </div>
  );
}

export default App;
