"use client"
import '@/styles/containers/patientPage.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { UserAuth } from '@/context/AuthContext'
import Link from 'next/link'
import HeaderSimple from "@/components/HeaderSimple"
import NotesList from "@/components/NotesList"
import TransparentButton from "@/components/TransparentButton"
import Loader from '@/components/Loader'
import getNotes from '@/functions/getNotes'
import getPatient from '@/functions/getPatient'

const PatientPage = ({ params }) => {

  const router = useRouter()

  const { user } = UserAuth()
  
  const [patient, setPatient] = useState({})
  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState([])
  
  const patientIdentification = params.patientId

  useEffect(() => {
    getPatient(patientIdentification, user).then(result => {
      try {
        setPatient(result)
        getNotes(patientIdentification, user).then(result => {
          setNotes(result)
          setLoading(false)
        }).catch(error => {
          console.error("Error al obtener las notas medicas del paciente:", error);
          router.push('/patients')
        })
      } catch (error) {
        console.error("Error al settear en el cliente los datos obtenidos del paciente", error)
        router.push('/patients')
      }
    }).catch(error => {
      console.error('No se ha podido obtener los datos del paciente:', error)
      router.push('/patients')
    })
  }, [])

  if (!loading) {
    return (
     
        <div className="patient-page">
          <HeaderSimple title={patient.name} />
          <Link href={`/write-note/${patientIdentification}`} >
            <TransparentButton text="'+'" />
          </Link>
          {
          notes ? 
              <NotesList notes={notes}/>
            :
              console.log('El paciente no tiene notas')
          }
        </div> 
    
    )  
  } else {
    return(<Loader />)
  }
}

export default PatientPage

