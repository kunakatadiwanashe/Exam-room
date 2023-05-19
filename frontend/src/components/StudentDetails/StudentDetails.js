import React from 'react'
import kun from '../../logo.svg'
import { Link } from 'react-router-dom'

const StudentDetails = () => {
  return (
    <div className='rounded-xl rounded-br flex justify-center pt-10'>
        <div className='profilePic w-20 h-20'>
            <img className='w-[100%] h-[100%] object-contain' src={kun} alt='profile picture' />
        </div>
        <div className='details'>
            <h4 className='name'>Harry Doe</h4>
            <p className='email'>test@gmail.com</p>
            <Link to="/accountSettings"> AccountSetting </Link>
        </div>
    </div>
  )
}

export default StudentDetails