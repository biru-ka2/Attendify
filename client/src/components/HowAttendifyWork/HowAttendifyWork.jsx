import React from 'react'
import './HowAttendifyWork.css'
import HorizontalCard from '../HorizontalCard/HorizontalCard'
import { CheckSquare, PieChart, UserPlus } from 'lucide-react'
import { assets } from '../../assets/assets'
import ReverseHorizontalCard from '../HorizontalCard/ReverseHorizontalCard'

const HowAttendifyWork = () => {
  return (
    <div className='how-attendify-work'>
      <div className="working-heading">
        <h2>How Attendify Works ?</h2>
      </div>
      <div className="working-card-container">
        <HorizontalCard image={assets.ilustrations.create_account_illustration} title={'Create Your Account'} desc={'Start your Attendify journey by signing up in just a few seconds. Create your personal dashboard, add your class, and customize it as per your needs. It’s fast, secure, and made just for students and educators like you.'} />
        <hr className='text-gray-300' />
        <ReverseHorizontalCard image={assets.ilustrations.daily_attendance_mark_illustration} title={'Mark Attendance Daily'} desc={'Taking attendance has never been easier. Just tap on student names to mark them present or absent. Forget manual registers — now you can handle your entire classroom with one smooth interface.'} />
        <hr className='text-gray-300' />
        <HorizontalCard image={assets.ilustrations.analys_and_export_illustration} title={'Analyze & Export Reports'} desc={'Get access to insightful analytics — track trends, view daily percentages, and export your attendance data into Excel or PDF with just one click. Stay organized and informed — always.'} />
      </div>
    </div>
  )
}

export default HowAttendifyWork
