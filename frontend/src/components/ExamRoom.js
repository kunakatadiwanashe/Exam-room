

import React, { useState } from "react";
import { Link } from "react-router-dom";

// import '/App.css';

function ExamRoom() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Handle sign-in logic here
    console.log("Sign in clicked");
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log("Google sign in clicked");
  };

  const handleAppleSignIn = () => {
    // Handle Apple ID sign-in logic here
    console.log("Apple sign in clicked");
  };

  return (
    <div className="relative h-full">
      <div className="grid grid-cols-2 h-full">
        <div className="h-full flex flex-col pt-20 gap-40">
          <Link to="/" className="bg-gray-300 w-24 h-10 rounded-md ml-10 hover:bg-blue-700 hover:text-white font-semibold flex justify-center items-center">Back</Link>
          {/* <button className="bg-gray-300 w-24 h-10 rounded-md ml-10 hover:bg-blue-700 hover:text-white font-semibold">Back</button> */}
          <h1 className="exam-room-big ml-20">Exam Room.</h1>
        </div>

        <div className="form-container h-full flex flex-col justify-center gap-3">
          <div className="flex flex-col">
            <label htmlFor="name">FullName</label>

            <input
              type="text"
              // placeholder="Name"
              id="name"
              name="name"
              value={name}
              className="sign-up-inputs"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              // placeholder="Email"
              id="email"
              name="email"
              value={email}
              className="sign-up-inputs"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              // placeholder="Password"
              id="password"
              name="password"
              value={password}
              className="sign-up-inputs"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Verify Password</label>
            <input
              type="password"
              // placeholder="Verify Password"
              id="password"
              name="password"
              value={password}
              className="sign-up-inputs"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button className="sign-up-button" onClick={handleSignIn}>
              Sign-up
            </button>
            <div className="sign-in-options">
              <p className="option">continue with</p>
              <button
                className="google-sign-in-button "
                onClick={handleGoogleSignIn}
              >
                Google
              </button>
              <button
                className="apple-sign-in-button"
                onClick={handleAppleSignIn}
              >
                Apple ID
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamRoom;
