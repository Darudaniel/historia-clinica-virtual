import '@/styles/containers/admission.css'
import HeaderSimple from '@/components/HeaderSimple'
import InputNormal from '@/components/InputNormal'
import MainButton from '@/components/MainButton'
import InputDate from '@/components/InputDate'

const Admission = () => {
  return (
    <div className='admission'>
      <HeaderSimple title='INGRESO' /> 
      <section className='form-container'>
        <InputNormal placeholder='Nombre' />
        <InputNormal placeholder='Cedula' />
        <InputDate label='Fecha de nacimiento' />   
      </section>     
      <MainButton text='Agregar' />
    </div>
  )
}

export default Admission