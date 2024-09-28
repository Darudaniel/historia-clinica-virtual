"use client"
import '@/styles/containers/writeNote.css'
import HeaderSimple from "@/components/HeaderSimple"
import InputGiant from "@/components/InputGiant"
import MainButton from "@/components/MainButton"
import { db } from "@/firebase"
import { doc, getDoc } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { UserAuth } from '@/context/AuthContext'
import Loader from '@/components/Loader'
import createNewNote from '@/functions/createNewNote'
import EditorComponent from '@/components/EditorComponent'
import { sendGAEvent } from '@next/third-parties/google'

const WriteNote = ({ params }) => {

  const [inputValues, setInputValues] = useState({}); // Mantenemos un objeto para los valores de los inputs
  const [patient, setPatient] = useState({})
  const [loading, setLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const { user } = UserAuth()

  const doctorObject = user
  const doctorIdentification = doctorObject.uid
  const doctorName = doctorObject.displayName

  const patientIdentification = params.patientId
  const patientDocumentRef = doc(db, "patients", patientIdentification)
  const router = useRouter()

  sendGAEvent('event', 'write_note_page_view')

  const initialPatientSetting = async () => {
    try {
      const docSnap = await getDoc(patientDocumentRef);
      if (docSnap.exists()) {
        setPatient(docSnap.data())
        setLoading(false)
      } else {
        console.log('Paciente no esta registrado')
        router.push("/not-found")
      }
    } catch (error) {
      console.error("Error al verificar el registro del paciente:", error);
    }
  }

  const handleInput = (inputName, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [inputName]: value, // Actualizamos el valor del input específico en el objeto
    }));
  };

  const handleSubmit = () => {
     
    setIsDisabled(true)

    const getRandomInt = (max) => {
      const number = Math.floor(Math.random() * max);
      const string = number.toString()
      return string
    }
    
    const noteId = getRandomInt(1000000)

    const currentDate = new Date()

    const formatedData = {
      "doctor_name": doctorName,
      "doctor_id": doctorIdentification,
      "patient": patientIdentification,
      "content": inputValues.input, 
      "note_id": noteId,
      "date": currentDate,
    }

    createNewNote(formatedData, router)

  }

  useEffect(() => {
    initialPatientSetting()
  }, [])

  if(!loading) {
    return (
      <div>
        <HeaderSimple title={patient.name} />
        <div className="giant-form-container">
          <EditorComponent onInputChange={(value) => handleInput('input', value)} />
          {/* <InputGiant placeholder='Escribe una historia clínica' onInputChange={(value) => handleInput('input', value)} /> */}
          <div style={{ display: isDisabled ? 'none' : 'block' }}>
            <MainButton text='Guardar' action={handleSubmit} />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <Loader />
    )

  }
}

export default WriteNote