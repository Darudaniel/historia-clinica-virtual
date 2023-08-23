import '@/styles/components/SuccessMessage.css'

const SuccessMessage = (props) => {
  switch (props.type) {
    case '0':
      return (
        <h2 className='message'>El paciente ha sido ingresado con exito</h2>
      )
      break;
    case '1':
      return (
        <h2 className='message'>La nota ha sido guardada con exito</h2>
      )
      break;    
    default:
      break;
  }
}

export default SuccessMessage