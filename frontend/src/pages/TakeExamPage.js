import React from 'react'
import StudentDetails from '../components/StudentDetails/StudentDetails'
import Instructions from '../components/ExamInstructions/Instructions'
import WebcamIntervalCapture from '../components/Webcam/WebcamIntervalCapture'

const TakeExamPage = () => {
    return (
        <div className='mainMain flex bg-[#EAEAEA]'>
            {/* left sideBar */}

            <div className='leftSideBar bg-blue-400 w-1/4 h-[90vh] rounded-xl rounded-br mt-2 mb-2 ml-2' >
                   <div className='studentsDetails bg-blue-50 h-40'>
                       <StudentDetails />
                   </div>
                   <div className='bg-white h-[50%]'>

                   </div>
                   <div className='feed'>
                      <WebcamIntervalCapture  />
                   </div>
            </div>


            {/* center  */}

            <div className='mainCenter w-1/2 pl-[40px] rounded-xl rounded-br m-2 bg-white'>

               <h1 className='text-[48px] font-bold'>Fundamentals of Digital Marketing</h1>
               <h5 className='text[24px] pb-[35px] font-semibold'>THE ONLINE UNIVERSITY</h5>
               <p className='text-[18px] '>Your examination will begin in 47 seconds...</p>

            </div>




            {/* right sideBar */}

            <div className='rightSideBar bg-white  w-1/4 flex flex-col p-4 rounded-xl rounded-br mb-2 mt-2 mr-2'>
                <h4 className='text-blue-500 text-sm pb-3'>EXAMINATION</h4>
                <h2 className='text-lg font-bold leading-normal '>Fundamentals of Digital Marketing</h2>
                <p className='text-sm font-semibold mb-7'>THE ONLINE UNIVERSITY</p>
                <Instructions />

            </div>






        </div>
    )
}

export default TakeExamPage