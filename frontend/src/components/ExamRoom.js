// import React from 'react';
// import './App.css';



// function ExamRoom() {
//   return (
//     <div className="ExamRoom">
//       <h1>Exam Room</h1>
//       <p>Welcome</p>
//     </div>
//   );
// }

// export default ExamRoom;


import React, { useState } from 'react';
// import '/App.css';

function ExamRoom() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Handle sign-in logic here
    console.log('Sign in clicked');
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log('Google sign in clicked');
  };

  const handleAppleSignIn = () => {
    // Handle Apple ID sign-in logic here
    console.log('Apple sign in clicked');
  };

  return (
    <div className="ExamRoom">
      <title className="Exam-Room">
      <h1>Exam Room</h1>
      </title>
      <button className="back-button">Back</button>

      <div className="sign-in-form">

      <div className="Form-row">
      <label htmlFor="name">FullName:</label>

        <input
          type="text"
          placeholder="Name"
          id='name'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>


      <div className="Form-row">
      <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          id='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>



      <div className="Form-row">
      <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          id='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>



        <div className="Form-row">
      <label htmlFor="password">Verify Password:</label>
        <input
          type="password"
          placeholder="Verify Password"
          id='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>



        <div className="Form-footer">

        <button className="sign-in-button" onClick={handleSignIn}>
          Sign In
        </button>
        <div className="sign-in-options">
          <p>continue with</p>
          <button className="google-sign-in-button" onClick={handleGoogleSignIn}>
             Google
          </button>
          <button className="apple-sign-in-button" onClick={handleAppleSignIn}>
            Apple ID
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamRoom;

