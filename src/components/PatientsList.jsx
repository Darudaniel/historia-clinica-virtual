"use client"
import '@/styles/components/PatientsList.css'
import { useRouter } from "next/navigation"
import PatientButton from "./PatientButton"
import Link from "next/link"

const PatientsList = ({ patients }) => {
  
  const router = useRouter()

  return (
    <div className="patients-list--contaniner">
       {
          patients.map((patient) => {
            return (
            
              <Link href={`/patients/${patient.identification}`} key={patient.identification}>
                  <PatientButton  
                    title={patient.name} 
                    subtitle={patient.identification} 
                    // action={() => {router.push(`/patients/${patient.identification}`)}} 
                    action={() => {console.log('redireccionando...')}} 
                  />
              </Link>
              
            )
          })
        }
    </div>
  )
 }

 export default PatientsList