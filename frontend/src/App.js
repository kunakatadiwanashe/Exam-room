import React, { useState, useEffect } from "react";
import "./App.css";
import ExamRoom from "./components/ExamRoom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UploadModal from './components/UploadModal';
import WebcamIntervalCapture from './components/Webcam/WebcamIntervalCapture';
import WebcamVideo from './components/Webcam/WebcamVideo';
import { WebcamePage } from "./components/Webcam/WebcamePage";
import Login from "./pages/auth/Login";

import TakeExamPage from "./pages/TakeExamPage";
import AccountSetting from "./pages/auth/AccountSetting";
import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';
import { useNavigate } from "react-router-dom";
import useUserStatus from "./utils/userstatus";

// Amplify.configure(awsconfig);
// Auth.configure(awsconfig);

function App() {
  const navigate = useNavigate();
  const [examRoomState] = useState({});

  const userStatus = useUserStatus();

  const isLoggedIn = (null !== userStatus);

  if (!isLoggedIn) navigate("/login");

  const signOut = () => {
    Auth.signOut().then(() => {
      localStorage.clear();
      navigate("/login");
    }).catch(window.location.reload());
  }

  return (

    <div className="App relative h-screen">
      {window.location.pathname === "login" ? (
        <div className="w-full py-1 px-3">
          <button onClick={signOut} className="py-1 px-3 bg-gray-400 rounded-lg font-semibold hover:bg-gray-500 hover:scale-x-110">Sign Out</button>
        </div>
      ) : (<></>)}
      <Routes className="flex grow">
        <Route path="/" element={<Home />} />
        <Route path="/exam" element={<ExamRoom />} />
        <Route path="/login" element={<Login />} />
        <Route path="/takeexam" element={<TakeExamPage />} />
        <Route path="/accountSetting" element={<AccountSetting />} />
      </Routes>
      <div className="absolute bottom-5 flex text-gray-500 w-full justify-center">
        {/* <p className="">Copyright (c) 2023 Optic Inc.AllRights Reserved.</p> */}
      </div>

    </div>
  );
}

export default App;
