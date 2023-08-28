"use client"
import '@/styles/components/MainButton.css'

const MainButton = ({text, action}) =>  {

  const makeAction = () => {
    action ?
      action()
    :
      console.log('No hay action')
  }
  return (
    <button 
    type="button" 
    className="main-button" 
    onClick={() => {
      makeAction()
    }}
    >
      {text}
    </button>
  )
}

export default MainButton