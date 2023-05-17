import React, { useState } from "react";
import "./App.css";
import ExamRoom from "./components/ExamRoom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TakeExamPage from "./pages/TakeExamPage";
import AccountSetting from "./pages/auth/AccountSetting"






function App() {
  const [examRoomState] = useState({});

  return (

    <div className="App relative h-screen ">
      <Routes className="flex grow">
        <Route path="/" element={<Home />} />
        <Route path="/exam" element={<ExamRoom />} />
        <Route path="/takeexam" element={<TakeExamPage />} />
        <Route path="/accountSetting" element={<AccountSetting />} />
      </Routes>
      <div className="absolute bottom-5 flex text-gray-500 w-full justify-center">
        <p className="">Copyright (c) 2023 Optic Inc.AllRights Reserved.</p>
      </div>

    </div>
  );
}

export default App;
