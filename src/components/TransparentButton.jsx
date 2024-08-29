"use client"
import '@/styles/components/TransparentButton.css'

const TransparentButton = ({ text }) => {
  return(
    <div className='transparent-button'>
      {text}
    </div>
  )
}

export default TransparentButton