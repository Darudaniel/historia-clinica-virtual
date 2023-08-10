"use client"
import '@/styles/components/BackButton.css'

const BackButton = ({ props }) => {

  // Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.

  return (
    <button type="button" className="back-button">
      <svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 0 320 512">
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
      </svg>
    </button>
  )
}

export default BackButton
