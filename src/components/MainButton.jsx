"use client"
import '@/styles/components/MainButton.css'
import { useState } from 'react'

const MainButton = ({text, action}) =>  {

  const [isDisabled, setIsDisabled] = useState(false)

  const makeAction = () => {
    setIsDisabled(true)
    setTimeout(() => {
      setIsDisabled(false)
    }, 30000);

    action ?
    action()
    :
    console.log('No hay action')
  }
  return (
    <button 
    type="button" 
    className="main-button"
    disabled={isDisabled}
    onClick={() => {
      makeAction()
    }}
    >
      {text}
    </button>
  )
}

export default MainButton