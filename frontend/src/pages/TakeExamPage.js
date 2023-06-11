import React, { useState, useRef } from 'react'
import StudentDetails from '../components/StudentDetails/StudentDetails'
import WebcamIntervalCapture from '../components/Webcam/WebcamIntervalCapture'
import './takeExam.css'
import buzzer from "./../Assets/navy-overpressure-ai.mp3";
import QuestionCard from './QuestionCard';
import FinishExamButton from './FinishExamButton';
import CountdownTimer from './CountDownTimer';
import ImpersonationWarning from './ImpersonationWarning';
import Swal from 'sweetalert2'

const TakeExamPage = () => {
  const [testResults, setTestResults] = useState([]);
  const [alarm, setAlarm] = useState([]);
  const audioPlayer = useRef(null);

  function playAudio() {
    // audioPlayer.volume = 1;
    audioPlayer.current.play();
  }

  function stopAudio() {
    audioPlayer.current.pause();
  }

  const act = (results) => {

    console.log("response")
    console.log(results)

    setTestResults(results);

    results.forEach(element => {
      if (element.TestName === "Person Detection" && Number(element.Details) > 1) {
        playAudio();
        setAlarm(true);
      } else {
        if (element.TestName === "Person Detection") {
          stopAudio();
          setAlarm(false);
        }
      }
    });
  }

  const questions = [
    {
      "question": "What is the capital of France?",
      "choices": ["Paris", "London", "Berlin", "Rome"]
    },
    {
      "question": "Who painted the Mona Lisa?",
      "choices": ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"]
    },
    {
      "question": "What is the largest planet in our solar system?",
      "choices": ["Jupiter", "Saturn", "Mars", "Neptune"]
    },
    {
      "question": "Which country won the FIFA World Cup in 2018?",
      "choices": ["France", "Brazil", "Germany", "Argentina"]
    },
    {
      "question": "What is the chemical symbol for gold?",
      "choices": ["Au", "Ag", "Fe", "Cu"]
    },
    {
      "question": "Who wrote the play 'Romeo and Juliet'?",
      "choices": ["William Shakespeare", "Arthur Miller", "Henrik Ibsen", "Anton Chekhov"]
    },
    {
      "question": "What is the tallest mountain in the world?",
      "choices": ["Mount Everest", "K2", "Kangchenjunga", "Makalu"]
    },
    {
      "question": "Which animal is known as the 'King of the Jungle'?",
      "choices": ["Lion", "Tiger", "Elephant", "Giraffe"]
    },
    {
      "question": "What is the national bird of the United States?",
      "choices": ["Bald Eagle", "American Robin", "Wild Turkey", "Blue Jay"]
    },
    {
      "question": "Who invented the telephone?",
      "choices": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Marie Curie"]
    },
    {
      "question": "What is the chemical formula for water?",
      "choices": ["H2O", "CO2", "NaCl", "O2"]
    },
    {
      "question": "Who wrote the novel 'To Kill a Mockingbird'?",
      "choices": ["Harper Lee", "George Orwell", "J.D. Salinger", "Mark Twain"]
    },
    {
      "question": "Which planet is known as the 'Red Planet'?",
      "choices": ["Mars", "Venus", "Mercury", "Jupiter"]
    }
  ]

  // Swal.fire({
  //   title: 'Warning',
  //   text: "Warning, cell phone, mobile phone detected you will be logged out",
  //   icon: 'warning',
  //   // showCancelButton: true,
  //   // confirmButtonColor: '#3085d6',
  //   // cancelButtonColor: '#d33',
  //   confirmButtonText: '   OK   '
  // })

  return (
    <div className='mainMain flex bg-[#EAEAEA]'>
      {/* left sideBar */}
      <div className='leftSideBar w-1/4 h-[90vh] rounded-xl rounded-br mt-2 mb-2 ml-2' >
        <div className='studentsDetails bg-blue h-40'>
          <StudentDetails />
        </div>
        <div
          className='bg-grey-50 h-[50%] fixed bottom-0 w-1/4 left-0 mr-2 mb-2 rounded-xl rounded-br'
          style={{ zIndex: 999 }}
        >
          {/* WebcamIntervalCapture component */}

          <WebcamIntervalCapture actOnResults={act} />
        </div>
      </div>
      {/* center  */}

      <div className='mainCenter w-1/2 pl-[20px] pr-[20px] rounded-xl rounded-br m-2 bg-white'>
        <h1 className='text-[48px] font-bold'>Exam room</h1>

        {/* Other components */}



        <p className='pt-8' >Please answer all questions, each answer may have one or more answers. Good Luck.</p>
        <div className="container mx-auto p-4">
          <div>
            {questions.map((questionObj, index) => (
              <QuestionCard
                key={index}
                question={questionObj.question}
                choices={questionObj.choices}
              />
            ))}
          </div>
        </div>

        <FinishExamButton />
      </div>

      {/* right sideBar */}
      <div className='rightSideBar bg-white fixed bottom-0 right-0 w-1/6 flex flex-col p-4 rounded-xl rounded-br mb-2 mt-2 mr-2'>
        <CountdownTimer />
      </div>

      <audio ref={audioPlayer} src={buzzer} preload='auto' loop controlsList="nodownload" />
    </div>
  )
}

export default TakeExamPage