"use client"
import '@/styles/components/TransparentButton.css'
const TransparentButton = ({ text }) => {
  const handleClick = () => {
    console.log('Hola soy transparentButton')
  }
  return(
    <div>
      <button
        type="button"
        onClick={handleClick}
        className='transparent-button'
      >
        {text}
      </button>  
    </div>
  )
}

export default TransparentButton