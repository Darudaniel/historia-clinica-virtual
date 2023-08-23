"use client"
import '@/styles/components/PatientButton.css'
const PatientButton = (props) => {
  const handleClick = () => {
    props.action()
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className='patient-button'
    >
      <p className='title'>{props.title}</p>
      <p className='subtitle'>{props.subtitle}</p>
   </button> 
  )
}

export default PatientButton