import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Auth } from 'aws-amplify';
import { useNavigate } from "react-router-dom";
import  './login.css';


function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const checkAuth = () => {
  //   try {
  //     const session = Auth.currentSession();
  //     if (session) {
  //       navigate("/takeexam");
  //     }
  //   } catch {
  //     setUsername("");
  //   }
  // }
  // checkAuth();

  const handleSignIn = () => {
    Auth.signIn(username, password)
      .then(user => {
        navigate("/takeexam")
      })
      .catch(err => {
        // notification.error({
        //     message: 'Error',
        //     description: err.message,
        //     placement: 'topRight'
        // });

        console.log(err);
      });
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
        <div className="h-full flex flex-col pt-20 gap-40" id="back">
          <Link to="/" className="bg-gray-300 w-24 h-10 rounded-md ml-10 hover:bg-blue-700 hover:text-white font-semibold flex justify-center items-center">Back</Link>
          <p className="examm">
          ATCam Surveillance is a web-based platform used 
          to surveil and monitor any and every activity at your ATM. 
          ATCam connects with your ATM surveillance system and, while 
          recording footage, monitors everything in real-time so 
          you don't have to.
          </p>
        </div>

        <div className="h-full flex flex-col justify-center gap-3">


          <div className="flex flex-col">
            <label htmlFor="username">Username:</label>
            <input
              type="username"
              placeholder="Username"
              id="username"
              name="username"
              value={username}
              className="sign-in-inputs"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={password}
              className="sign-in-inputs"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>



          <div>
            <button className="Log-in" onClick={handleSignIn}>
              Login
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

export default Login;
