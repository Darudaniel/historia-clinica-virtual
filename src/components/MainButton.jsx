"use client"
import '@/styles/components/MainButton.css'

const MainButton = ({text, action}) =>  {

  return (
    <button 
    type="button" 
    className="main-button" 
    onClick={() => {
      action()
    }}
    >
      {text}
    </button>
  )
}

export default MainButton