"use client"
import '@/styles/containers/writeNote.css'
import HeaderSimple from "@/components/HeaderSimple"
import InputGiant from "@/components/InputGiant"
import MainButton from "@/components/MainButton"
import { createTimestamp, db } from "@/firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { UserAuth } from '@/context/AuthContext'
import Loader from '@/components/Loader'

const WriteNote = ({ params }) => {

  const [inputValues, setInputValues] = useState({}); // Mantenemos un objeto para los valores de los inputs
  const [patient, setPatient] = useState({})
  const [loading, setLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const { user } = UserAuth()

  const handleInput = (inputName, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [inputName]: value, // Actualizamos el valor del input específico en el objeto
    }));
  };

  const doctorObject = user
  const doctorIdentification = doctorObject.uid

  const patientIdentification = params.patientId
  const patientDocumentRef = doc(db, "patients", patientIdentification)
  const router = useRouter()

 

  const getPatient = async () => {
    try {
      const docSnap = await getDoc(patientDocumentRef);
      if (docSnap.exists()) {
        console.log('Paciente anteriormente registrado, no es necesario crear un nuevo registro')
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

  const createNewNote = (formatedData) => {
    try {
      console.log('Agregando nota nueva')
      const noteData = formatedData
      setDoc(doc(db, "notes", noteData.note_id), noteData)
        .then(() => {
          console.log("Registro de nota exitoso.");
          router.push('/success/1')
        })
        .catch((error) => {
          console.error("Error agregando el documento:", error);
        });
    } catch (error) {
      console.error("Error al intentar agregar al nota", error);
    }
  }

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
      "doctor": doctorIdentification,
      "patient": patientIdentification,
      "content": inputValues.input, 
      "note_id": noteId,
      "date": currentDate,
    }

    createNewNote(formatedData)

  }

  useEffect(() => {
    getPatient()
  }, [])

  if(!loading) {
    return (
      <div>
        <HeaderSimple title={patient.name} />
        <div className="giant-form-container">
          <InputGiant placeholder='Nombre' onInputChange={(value) => handleInput('input', value)} />
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