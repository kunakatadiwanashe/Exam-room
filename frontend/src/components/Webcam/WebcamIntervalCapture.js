import React, { useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam';
import gateway from "./../../utils/gateway";
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL, uploadString } from "firebase/storage";
import { getDatabase, set } from "firebase/database";
import { Predicates } from 'aws-amplify';
import Swal from 'sweetalert2'

const WebcamIntervalCapture = ({ actOnResults }) => {

    const firebaseConfig = {
        apiKey: "AIzaSyACMWqQoWbbdN5APO_zeUP7329k0_0B-L0",
        authDomain: "quicktake-6d3b2.firebaseapp.com",
        databaseURL: "https://quicktake-6d3b2-default-rtdb.firebaseio.com",
        projectId: "quicktake-6d3b2",
        storageBucket: "quicktake-6d3b2.appspot.com",
        messagingSenderId: "919057000535",
        appId: "1:919057000535:web:dbaf63e795b649fe409b12",
        measurementId: "G-0RWGTQSQ0S"
    };

    const app = initializeApp(firebaseConfig);

    const storage = getStorage(app);
    // const storage = storage();
    const database = getDatabase(app);

    const webcamRef = useRef(null);
    const [testResults, setTestResults] = useState([]);
    const iterating = useRef(false);

    useEffect(() => {
        const interval = setInterval(() => {

            getSnapshot();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const getSnapshot = async () => {
        //
        const image = webcamRef.current.getScreenshot();
        const b64Encoded = image.split(",")[1];

        console.log(image)

        const randomString = generateRandomString(10);
        const storageRef = ref(storage, `images/${randomString}`);

        await gateway.processImage(b64Encoded).then((response) => {
            if (response) {
                console.log(response);
                console.log("overflex")
                console.log(response[1].Details);

                if (response[1].Details === 0) {
                    //
                    console.log("alert no face");
                    Swal.fire({
                        title: 'Warning',
                        text: "No Face Found",
                        icon: 'warning',
                        // showCancelButton: true,
                        // confirmButtonColor: '#3085d6',
                        // cancelButtonColor: '#d33',
                        confirmButtonText: '   OK   '
                    })
                } else if (response[2].Details === '0') {
                    //
                    console.log("impersonation");
                    Swal.fire({
                        title: 'Warning',
                        text: "Impersonation warning",
                        icon: 'warning',
                        // showCancelButton: true,
                        // confirmButtonColor: '#3085d6',
                        // cancelButtonColor: '#d33',
                        confirmButtonText: '   OK   '
                    })
                }

                if (response[0].Details !== '0') {
                    //
                    console.log("device found");
                    Swal.fire({
                        title: 'Warning',
                        text: "Unwanted object found",
                        icon: 'warning',
                        // showCancelButton: true,
                        // confirmButtonColor: '#3085d6',
                        // cancelButtonColor: '#d33',
                        confirmButtonText: '   OK   '
                    })
                }

                console.log(response[2].Details)
                
                if (response[3].Details > 1) {
                    //
                    console.log("more than one ");
                    Swal.fire({
                        title: 'Warning',
                        text: "More than one person detected",
                        icon: 'warning',
                        // showCancelButton: true,
                        // confirmButtonColor: '#3085d6',
                        // cancelButtonColor: '#d33',
                        confirmButtonText: '   OK   '
                    })
                }

                setTestResults(response);
                actOnResults(response);

                uploadString(storageRef, b64Encoded, 'base64').then((snapshot) => {
                    console.log('Uploaded a blob or file!');

                    getDownloadURL(snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);

                        const imageEntry = {
                            name: "username1",
                            url: downloadURL,
                            reason: ""
                        };

                        // const db = getDatabase();

                        // set(ref(db, 'users/' + "george"), {
                        //     username: "george",
                        //     image: downloadURL,
                        // });
                    });
                });
            }

            // if (iterating.current) setTimeout(getSnapshot(), 300);
            // else setTestResults([]);
        });

    }

    function generateRandomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;

        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }


    // uploadTask.on(
    //     'state_changed',
    //     (snapshot) => {
    //         const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    //         console.log(progress.toString)
    //     },
    //     (error) => {
    //         console.log(error);
    //     },
    //     () => {
    //         storage
    //             .ref('images')
    //             .child("exam")
    //             .getDownloadURL()
    //             .then((url) => {
    //                 const imageEntry = {
    //                     name: "username1",
    //                     url: url,
    //                 };
    //                 database.ref('images').push(imageEntry);
    //             });
    //     }
    // );



    return (
        <div className='h-25 w-13 rounded-xl rounded-br'>
            <Webcam ref={webcamRef} mirrored={true} imageSmoothing={true} screenshotFormat="image/jpeg"
                className='object-contain h-full w-full rounded-xl rounded-br shadow-lg bg-white shadow-grey-500' />
        </div>
    )
}

export default WebcamIntervalCapture