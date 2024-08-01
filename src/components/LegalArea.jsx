import "@/styles/components/LegalArea.css"
import { useState } from 'react'
import Terms from './Terms'

const LegalArea = () => {

  const [isReading, setIsReading] = useState(false)

  const swapReading = () => {
    setIsReading(!isReading)
  }

  return(
    <div>
      <p className='legal-text'>Importante: Al hacer uso de esta aplicacion web usted esta aceptando los siguientes terminos y condiciones:</p>
      {isReading?
          <div>
            <button
              type='button'
              className='legal-button'
              onClick={swapReading}
            >
              Ocultar terminos y condiciones
            </button>
            <Terms />
            <button
              type='button'
              className='legal-button'
              onClick={swapReading}
            >
              Ocultar terminos y condiciones
            </button>
          </div>
        :
          <button
            type='button'
            className='legal-button'
            onClick={swapReading}
          >
            Ver terminos y condiciones
          </button>
      }
    </div>
  )
}
  
  export default LegalArea