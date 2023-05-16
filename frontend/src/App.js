import React, { useState } from "react";
import "./App.css";
import ExamRoom from "./components/ExamRoom";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const [examRoomState] = useState({});

  return (
    <div className="App relative h-screen ">
      <Routes className="flex grow">
        <Route path="/login" element={<Login />} />
        <Route path="/exam" element={<ExamRoom />} />
      </Routes>
      <div className="absolute bottom-5 flex text-gray-500 w-full justify-center">
        <p className="">Copyright (c) 2023 Optic Inc.AllRights Reserved.</p>
      </div>
    </div>
  );
}

export default App;
