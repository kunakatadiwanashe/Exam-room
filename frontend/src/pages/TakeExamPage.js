
import React from 'react'
import StudentDetails from '../components/StudentDetails/StudentDetails'
import WebcamIntervalCapture from '../components/Webcam/WebcamIntervalCapture'
import './takeExam.css'

const TakeExamPage = () => {
    return (
        <div className='mainMain flex bg-[#EAEAEA]'>
            {/* left sideBar */}

            <div className='leftSideBar w-1/4 h-[90vh] rounded-xl rounded-br mt-2 mb-2 ml-2' >
                   <div className='studentsDetails bg-blue-50 h-40'>
                       <StudentDetails />
                   </div>
                   <div className='bg-grey-50 h-[50%]'>

                   </div>

            </div>


            {/* center  */}

            <div className='mainCenter w-1/2 pl-[20px] pr-[20px] rounded-xl rounded-br m-2 bg-white'>

               <h1 className='text-[48px] font-bold'>ATM Main Camera</h1>

               {/* <h5 className='text[24px] pb-[35px] font-semibold'>THE ONLINE UNIVERSITY</h5>
               <p className='text-[18px] '>Your examination will begin in 47 seconds...</p> */}
               <WebcamIntervalCapture  />

               <p className='pt-8' >AI is now surveilling.</p>

            </div>




            {/* right sideBar */}

            <div className='rightSideBar bg-white  w-1/4 flex flex-col p-4 rounded-xl rounded-br mb-2 mt-2 mr-2'>

                <WebcamIntervalCapture  />

                <WebcamIntervalCapture  />

            </div>







        </div>
        <div className="bg-gray-700 h-[10%] border-blue-500 border-p-8 rounded-brss"></div>
        <div className="feed">
          <WebcamIntervalCapture />
          <WebCameApp />
        </div>
      </div>

      {/* center  */}

      <div className="mainCenter w-1/2 pl-[40px] rounded-xl rounded-br m-2 bg-[#202020]">
        <h1 className="text-[48px] font-bold text-white ">
          Fundamentals of Digital Marketing
        </h1>
        <h5 className="text[24px] pb-[35px] font-semibold  text-white ">
          THE ONLINE UNIVERSITY
        </h5>
        <p className="text-[18px]  text-white ">
          Your examination will begin in 47 seconds...
        </p>
      </div>

      {/* right sideBar */}

      <div className="rightSideBar font-bold bg-[#202020]  w-1/4 flex flex-col p-4 rounded-xl rounded-br mb-2 mt-2 mr-2">
        <h4 className="text-blue-500 text-sm pb-3">EXAMINATION</h4>
        <h2 className="text-lg font-bold leading-normal text-white">
          Fundamentals of Digital Marketing
        </h2>
        <p className="text-sm font-semibold mb-7  text-white">THE ONLINE UNIVERSITY</p>
        <Instructions />
      </div>
    </div>
    </div>
  );
};

export default TakeExamPage;
