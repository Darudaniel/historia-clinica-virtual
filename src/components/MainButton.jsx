"use client"
import '@/styles/components/MainButton.css'

const MainButton = (props) =>  {

  const handleClick = () => {
    console.log('Soy Main Button')
  }

  return (
    <button type="button" className="main-button" onClick={handleClick}>
      {props.text}
    </button>
  )
}

export default MainButton