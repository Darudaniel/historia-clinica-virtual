"use client"
import '@/styles/containers/admission.css'
import HeaderSimple from '@/components/HeaderSimple'
import InputNormal from '@/components/InputNormal'
import MainButton from '@/components/MainButton'
import InputDate from '@/components/InputDate'
import { useState } from 'react'
import { UserAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import Loader from '@/components/Loader'
import validatePatientAdmission from '@/functions/validatePatientAdmission'
import createNewPatient from '@/functions/createNewPatient'

const Admission = () => {

  const { user } = UserAuth()
  const doctorId = user.uid

  const router = useRouter()

  const [inputValues, setInputValues] = useState({}); 
  const [selectedDates, setSelectedDates] = useState({});
  const [loading, setLoading] = useState(false)

  const handleInput = (inputName, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [inputName]: value, 
    }));
  };

  const handleDateInputChange = (inputName, date) => {
    setSelectedDates((prevSelectedDates) => ({
      ...prevSelectedDates,
      [inputName]: date,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true)
    const patientName = inputValues.input1
    const patientIdentification = inputValues.input2
    const patientBirth = selectedDates.dateInput1

    if (!patientName) { //Hay un nombre?
      alert('Por favor registra el nombre del paciente');
      setLoading(false);
      return
    } else if (!patientBirth) { //Hay una fecha de nacimiento?
      console.log(patientBirth)
      alert('Por favor registra la fecha de nacimiento del paciente');
      setLoading(false);
      return
    } else if (!/^\d+$/.test(patientIdentification)) { //Es un numero de ceula valido?
      alert('Por favor ingresa un numero de cedula valido');
      setLoading(false);
      return
    } else {
      try {
        const isANewPatient = await validatePatientAdmission(patientIdentification, user)
        if (isANewPatient) {
          const formatedData = {
            "name": patientName, 
            "identification": patientIdentification,
            "birth": patientBirth,
            "attending": [
              doctorId
            ]
          }
          
          try {
            createNewPatient(formatedData, router);
          } catch (error) {
            console.error("Error al agregar el paciente", error);
          }
          

        } else {
          router.push('/success/2')
          console.log("El paciente ya cuenta con registro en la plataforma y ahora estara en tu lista de pacientes")
        }

      } catch (error) {
        router.push('/success/2')          
      }
      
    }    
  }

  if (!loading) {
    return (
      <div className='admission'>
        <HeaderSimple title='INGRESO' /> 
        <section className='admission-form-container'>
          <InputNormal placeholder='Nombre' onInputChange={(value) => handleInput('input1', value)} />
          <InputNormal placeholder='Cedula' onInputChange={(value) => handleInput('input2', value)} />
          <InputDate label='Fecha de nacimiento' onDateChange={(date) => handleDateInputChange('dateInput1', date)} />   
        </section>     
        <MainButton text='Agregar' action={handleSubmit} />
      </div>
    )
  } else {
    return (
      <Loader />
    )
  }
  
}

export default Admission