"use client"
import '@/styles/components/TransparentButton.css'
const TransparentButton = (props) => {
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
        {props.text}
      </button>  
    </div>
  )
}

export default TransparentButton