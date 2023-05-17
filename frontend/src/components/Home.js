import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

function Home() {
  return (
    <div className="login-container h-full flex flex-col justify-center items-center gap-5 relative">
      <h1 className="exam-room-big">Exam Room</h1>
      <p className=" first-para">
        Your go-to AI Proctoring Assistant.<br></br>
        You won’t even need a proctor in the room.{" "}
      </p>
      <Link to="/exam" className="front-btn bg-blue-700 text-white py-2 px-3 rounded-lg hover:bg-blue-800">
        Create Account
      </Link>
      <p className=" absolute bottom-16">
        Already have an account? <a href="/login" className="text-blue-500 active:text-red-500 hover:text-blue-700">Login</a>
      </p>
    </div>
  );
}

export default Home;
