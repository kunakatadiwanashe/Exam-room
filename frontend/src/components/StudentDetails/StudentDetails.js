import React from 'react'
import kun from '../../logo.svg'
import "../../App.css";

const StudentDetails = () => {
  return (
    <div className="bg-blue-400 rounded-xl rounded-br flex justify-center p-6">
      <div className="profilePic w-20 h-20">
      <img className="w-full h-full object-contain rounded-full" src="https://picsum.photos/200/200" alt="profile picture" />
      </div>
      <div className="details ml-6">
        <h4 className="text-xl font-bold">Harry Doe</h4>
        <p className="text-sm">Level: 4.1</p>
        <p className="text-sm">Exam Name: Math Test</p>
        <p className="text-sm">Student ID: 123456789</p>
        <p className="text-sm">Exam Code: ABC123</p>
      </div>
    </div>
  );
};

export default StudentDetails