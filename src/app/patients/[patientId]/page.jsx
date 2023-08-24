"use client"
import '@/styles/containers/patientPage.css'
import HeaderSimple from "@/components/HeaderSimple"
import NotesList from "@/components/NotesList"
import TransparentButton from "@/components/TransparentButton"
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// async function getPatient(id) {
//   const res = await fetch(`https://reqres.in/api/users/${id}`)
//   const data = await res.json()
//   return data.data
// }

const PatientPage = ({ params }) => {

  const patientIdentification = params.patientId
  const patientDocumentRef = doc(db, "patients", patientIdentification)
  const router = useRouter()

  // const createNewPatient = () => {
  //   try {
  //     console.log('Agregando paciente nuevo')
  //     const patientData = {
  //       identification: patientIdentification,
  //     }
  //     setDoc(doc(db, "patients", patientIdentification), patientData)
  //       .then(() => {
  //         console.log("Registro inicial del paciente exitoso.");
  //       })
  //       .catch((error) => {
  //         console.error("Error durante el registro inicial del paciente:", error);
  //       });
  //   } catch (error) {
  //     console.error("Error al intentar agregar al paciente", error);
  //   }
  // }

  const getPatient = async () => {
    try {
      const docSnap = await getDoc(patientDocumentRef);
      if (docSnap.exists()) {
        console.log('Paciente anteriormente registrado, no es necesario crear un nuevo registro')
        console.log(docSnap)
      } else {
        console.log('Paciente no esta registrado')
        router.push("/not-found")
      }
    } catch {
      console.error("Error al verificar el registro del paciente:", error);
    }
  }

  useEffect(() => {
    getPatient()
  }, [])

  // const data = await getPatient(params.patientId)

  // const pacientes = {
  //   gilberto: {
  //     attending: [
  //       "doctor_id_1",
  //       " doctor_id_2"
  //     ],
  //     notes: [
  //       {
  //         note_id: "12368986823",
  //         date: new Date(2023, 10, 15, 14, 30, 0),
  //         content: "Hola esta es una nota mas"
  //       },
  //       {
  //         note_id: "12366823",
  //         date: new Date(2023, 10, 15, 14, 20, 0),
  //         content: "Hola esta es una nota mas"
  //       },
  //       {
  //         note_id: "12367823",
  //         date: new Date(2023, 9, 15, 23, 30, 0),
  //         content: "Hola esta es una nota"
  //       },
  //       {
  //         note_id: "12565323",
  //         date: new Date(2023, 8, 15, 0, 30, 0),
  //         content: "Hola esta es la nota del medio"
  //       },
  //       {
  //         note_id: "12345623",
  //         date: new Date(2023, 7, 15, 12, 30, 0),
  //         content: "Hola es un nota nota"
  //       }
  //     ]
  //   }
  // }

  // estructuraDeDatos = {
  //   colleccion: pacientes
  //     documento: paciente #1
  //       doctores_que_pueden_leer:
  //         [ 
  //           doctor_id #1,
  //           doctor_id #2
  //         ]
  //       notas: {
  //         {
  //           nota #1: {
  //             note_id: 12343
  //             content: "contenido de la nota"
  //             fecha: 2023-08-09 14:00
  //           }
  //         }
  //       }        
  // }

  return (
    <div className="patient-page">
      <h1>{patientIdentification}</h1>
      {/* <HeaderSimple title={data.first_name} />
      <div>perfil del paciente</div>
      <TransparentButton text='+' />
      <NotesList notes={pacientes.gilberto.notes}/> */}
    </div>
  )  
}

export default PatientPage

