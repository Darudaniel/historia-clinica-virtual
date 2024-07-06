"use client"
import '@/styles/containers/admission.css'
import HeaderSimple from '@/components/HeaderSimple'
import InputNormal from '@/components/InputNormal'
import MainButton from '@/components/MainButton'
import InputDate from '@/components/InputDate'
import { useState } from 'react'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { UserAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import Loader from '@/components/Loader'
import updateAttending from '@/functions/updateAttending'
import validatePatientAdmission from '@/functions/validatePatientAdmission'

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

  const createNewPatient = (formatedData) => {
    console.log("esto se esta ejecutando si o si")
    try {
      console.log('Agregando paciente nuevo')
      const patientData = formatedData
      setDoc(doc(db, "patients", patientData.identification), patientData)
        .then(() => {
          console.log("Registro inicial del paciente exitoso.");
          router.push('/success/0')
        })
        .catch((error) => {
          console.error("Error durante el registro inicial del paciente:", error);
        });
    } catch (error) {
      console.error("Error al intentar agregar al paciente", error);
    }
  }

  const handleDateInputChange = (inputName, date) => {
    setSelectedDates((prevSelectedDates) => ({
      ...prevSelectedDates,
      [inputName]: date,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true)
    const patientIdentification = inputValues.input2

    if (!/^\d+$/.test(patientIdentification)) { //Es un numero de ceula valido?
      console.error('Por favor ingresa un numero de cedula valido');
      setLoading(false);
      return
    } else {
      try {
        const isANewPatient = await validatePatientAdmission(patientIdentification, user)
        if (isANewPatient) {
          const formatedData = {
            "name": inputValues.input1, 
            "identification": inputValues.input2,
            "birth": selectedDates.dateInput1,
            "attending": [
              doctorId
            ]
          }
          createNewPatient(formatedData)
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