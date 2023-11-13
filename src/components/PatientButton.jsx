"use client"
import '@/styles/components/PatientButton.css'
// import {User, Link} from "@nextui-org/react";

const PatientButton = ({action, title, subtitle}) => {
  // const handleClick = () => {
  //   action?
  //     action()
  //   :
  //     console.log('No hay acción')
  // }
  return (
    <div className='patient-button'>
      <p className='title' style={{ color: 'black' }}>{title}</p>
      <p className='subtitle'>{subtitle}</p>
    </div> 
    // <User   
    //   name={title}
    //   description={(
    //     <Link href={`/patients/${subtitle}`} size="la">
    //       {subtitle} 
    //     </Link>
    //   )}
    // />
  //   <button
  //     type="button"
  //     onClick={handleClick}
  //     className='patient-button'
  //   >
  //     <p className='title' style={{ color: 'black' }}>{title}</p>
  //     <p className='subtitle'>{subtitle}</p>
  //  </button> 
  )
}

export default PatientButton