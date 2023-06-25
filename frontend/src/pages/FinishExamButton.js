import React from 'react';
import { Link } from "react-router-dom";

const FinishExamButton = () => {
  return (
    
    <div className="p-4">
      <h1 className="pl-4 text-2xl font-bold">Your Tests</h1>
      <Link to="/yourTestsPage">
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Your Tests Page
        </button>
      </Link>
    </div>
  );
};

export default FinishExamButton;
