"use client"
import '@/styles/components/PatientButton.css'
const PatientButton = ({action, title, subtitle}) => {
  const handleClick = () => {
    action?
      action()
    :
      console.log('No hay acción')
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className='patient-button'
    >
      <p className='title'>{title}</p>
      <p className='subtitle'>{subtitle}</p>
   </button> 
  )
}

export default PatientButton