"use client"
import '@/styles/containers/admission.css'
import HeaderSimple from '@/components/HeaderSimple'
import InputNormal from '@/components/InputNormal'
import MainButton from '@/components/MainButton'
import InputDate from '@/components/InputDate'
import { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { UserAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import Loader from '@/components/Loader'

const Admission = () => {

  const { user } = UserAuth()
  const doctorId = user.uid

  const router = useRouter()

  const [inputValues, setInputValues] = useState({}); // Mantenemos un objeto para los valores de los inputs
  const [selectedDates, setSelectedDates] = useState({});
  const [loading, setLoading] = useState(false)

  const handleInput = (inputName, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [inputName]: value, // Actualizamos el valor del input específico en el objeto
    }));
    // console.log(JSON.stringify(inputValues, null, 2))
  };

  const createNewPatient = (formatedData) => {
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
    // console.log(JSON.stringify(selectedDates, null, 2))
  };

  const handleSubmit = () => {
    setLoading(true)
    const formatedData = {
      "name": inputValues.input1, 
      "identification": inputValues.input2,
      "birth": selectedDates.dateInput1,
      "attending": [
        doctorId
      ]
    }
    createNewPatient(formatedData)
  }

  if (!loading) {
    return (
      <div className='admission'>
        <HeaderSimple title='INGRESO' /> 
        <section className='form-container'>
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