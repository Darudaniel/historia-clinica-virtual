"use client"
import '@/styles/components/ComplexTransparentButton.css'
const ComplexTransparentButton = (props) => {
  const handleClick = () => {
    console.log('Hola consola')
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className='complex-transparent-button'
    >
      <p className='title'>{props.title}</p>
      <p className='subtitle'>{props.subtitle}</p>
   </button> 
  )
}

export default ComplexTransparentButton