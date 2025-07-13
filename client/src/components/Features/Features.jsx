import React from 'react'
import './Features.css'
import Card from '../Card/Card'
import { AlarmClock, BarChart3, CalendarCheck, CheckCircle, FileDown, ShieldCheck, Smartphone } from 'lucide-react'

const Features = () => {
  return (
    <div className="features">
      <div className="features-heading">
          <h2>Why to choose Attendify ?</h2>
      </div>
      <div className='features-card'>
        <Card icon={<CalendarCheck />} title={'One-Click Attendance'} desc={'Mark attendance instantly with just one click.'} />
        <Card icon={<BarChart3 />} title={'Live Dashboard '} desc={'See your attendance stats in real-time. '} />
        <Card icon={<FileDown />} title={'Export to Excel/PDF'} desc={'Download attendance reports in Excel or PDF.'} />
        <Card icon={<AlarmClock />} title={'Smart Reminders'} desc={'Get notified when attendance is missed.'} />
        <Card icon={<ShieldCheck />} title={'Secure & Private'} desc={'Your data is encrypted and securely stored.'} />
        <Card icon={<Smartphone />} title={'Mobile Friendly'} desc={'Access Attendify smoothly on all screen sizes.'} />
      </div>
    </div>
  )
}

export default Features
