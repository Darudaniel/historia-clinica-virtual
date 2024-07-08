"use client"
import '@/styles/components/PatientButton.css'

const PatientButton = ({title, subtitle}) => {
  return (
    <div className='patient-button'>
      <p className='title' style={{ color: 'black' }}>{title}</p>
      <p className='subtitle'>{subtitle}</p>
    </div> 
  )
}

export default PatientButton