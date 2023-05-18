import React, { useEffect, useRef, useState } from "react";
import { AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react/legacy";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import Webcam from "react-webcam";
import { Col, Row } from "react-bootstrap";

import gateway from "../../utils/gateway";

import CameraHelp from "../CameraHelp";
import EngagementSummary from "../EngagementsSummary";
import Header from "../Header";
import SettingsHelp from "../SettingsHelp";
import ConsentModal from "../ConsentModal";
import { Auth } from "aws-amplify";
import {useNavigate} from "react-router-dom";

const WebCameApp = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [authState, setAuthState] = useState(undefined);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [readyToStream, setReadyToStream] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [testResults, setTestResults] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const iterating = useRef(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const webcam = useRef(undefined);
    const navigate = useNavigate();

    const addUser = (params) => gateway.addUser(params);

    const getSnapshot = () => {
        const image = webcam.current.getScreenshot();
        const b64Encoded = image.split(",")[1];

        gateway.processImage(b64Encoded).then((response) => {
            if (response) setTestResults(response);
            if (iterating.current) setTimeout(getSnapshot, 300);
            else setTestResults([]);
        });
    };

    const setupWebcam = (instance) => {
        webcam.current = instance;

        const checkIfReady = () => {
            if (
                webcam.current &&
                webcam.current.state &&
                webcam.current.state.hasUserMedia
            ) {
                setReadyToStream(true);
            } else setTimeout(checkIfReady, 250);
        };

        checkIfReady();
    };

    const toggleRekognition = () => {
        iterating.current = !iterating.current;

        if (iterating.current) {
            getSnapshot();
        } else setTestResults([]);
    };

    const signOut = () => {
        Auth.signOut().then(() => {
            navigate("/login")
        }).catch(() => {
            window.location.reload()
        })
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        return onAuthUIStateChange((s) => setAuthState(s));
    }, []);

    const signedIn = authState === "signedin";

    return (
        <div className="App">
            <Header
                addUser={addUser}
                readyToStream={readyToStream}
                signedIn={signedIn}
                toggleRekognition={toggleRekognition}
            />
            <ConsentModal></ConsentModal>
            {signedIn ? (
                <>
                    {/* <SettingsHelp show={!window.rekognitionSettings} /> */}
                    {/* <CameraHelp show={!readyToStream} /> */}
                    <Row>
                        <Col md={8} sm={6}>
                            <Webcam
                                ref={setupWebcam}
                                screenshotFormat="image/jpeg"
                                videoConstraints={{
                                    width: 1280,
                                    height: 640,
                                    facingMode: "user",
                                }}
                                style={{ width: "100%", marginTop: "10px" }}
                            />
                        </Col>
                        {/* <Col md={4} sm={6}>
                            <EngagementSummary testResults={testResults} />
                        </Col> */}
                    </Row>
                    <button>Sign Out</button>
                </>
            ) : (
                <div className="amplify-auth-container">
                    <AmplifyAuthenticator usernameAlias="email">
                        <AmplifySignIn
                            slot="sign-in"
                            usernameAlias="email"
                            formFields={[
                                {
                                    type: "email",
                                    label: "Username *",
                                    placeholder: "Enter your username",
                                    required: true,
                                    inputProps: { autoComplete: "off" },
                                },
                                {
                                    type: "password",
                                    label: "Password *",
                                    placeholder: "Enter your password",
                                    required: true,
                                    inputProps: { autoComplete: "off" },
                                },
                            ]}
                        >
                            <div slot="secondary-footer-content"></div>
                        </AmplifySignIn>
                    </AmplifyAuthenticator>
                </div>
            )}
        </div>
    );
};

export default WebCameApp;