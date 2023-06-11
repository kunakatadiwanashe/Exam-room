import React, { useState } from "react";
import { Link } from "react-router-dom";
import Amplify, { API, Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import useUserStatus from "./../../utils/userstatus";
import './login.css';

window.rekognitionSettings = { "apiGateway": "https://6u7rkt4loe.execute-api.us-east-1.amazonaws.com/Prod/", "cognitoIdentityPool": "us-east-1:cdfd8fdd-c4a6-4f77-a608-67eb1a381d63", "cognitoUserPoolId": "us-east-1_OyevrYQ42", "cognitoUserPoolClientId": "2109mjnnhn04ep0kk30rltput6", "region": "us-east-1" };

const settings = window.rekognitionSettings || {};
const region = settings.region || "eu-west-1";

Amplify.configure({
  Auth: {
    identityPoolId: settings.cognitoIdentityPool,
    region,
    mandatorySignIn: true,
    userPoolId: settings.cognitoUserPoolId,
    userPoolWebClientId: settings.cognitoUserPoolClientId,
  }
});

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const userStatus = useUserStatus();

  const isLoggedIn = (null !== userStatus);

  if (isLoggedIn) console.log(userStatus);
  if (isLoggedIn) navigate("/takeexam");

  const handleSignIn = () => {
    setLoading(true);
    Auth.signIn(username, password).then(user => {
      navigate("/takeexam")
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    })
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
      {!loading ? (
        <>
          <div className="grid grid-cols-2 h-full">
            <div className="h-full flex flex-col pt-20 gap-40" id="back">
              <Link to="/" className="bg-gray-300 w-24 h-10 rounded-md ml-10 hover:bg-blue-700 hover:text-white font-semibold flex justify-center items-center">Back</Link>
              <p className="examm">
                AI Exam Proctoring System
              </p>
            </div>

            <div className="h-full flex flex-col justify-center gap-3">
              <div className="pl-8 flex flex-col">
                <label htmlFor="username">Username:</label>
                <div className="pt-2">
                  <input
                    type="username"
                    placeholder="Username"
                    id="username"
                    name="username"
                    value={username}
                    className="sign-in-inputs"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {username === "cassehari@gmail.com" && (
                    <p className="text-red-500 pl-4">Incorrect username</p>
                  )}
                </div>
              </div>

              <div className="pl-8 flex flex-col">
                <label htmlFor="password">Password</label>
                <div className="pt-2">
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={password}
                    className="sign-in-inputs"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {password === "cassehari@gmail.com" && (
                    <p className="text-red-500 pl-4">Incorrect password</p>
                  )}
                </div>
              </div>

              <div className="pl-8">
                <button className="Log-in" onClick={handleSignIn}>
                  Login
                </button>
                {/* <div className="sign-in-options">
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
                </div> */}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            Loading
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
