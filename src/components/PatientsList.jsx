"use client"
import { useRouter } from "next/navigation"
import PatientButton from "./PatientButton"
import Link from "next/link"

const PatientsList = ({ patients }) => {
  
  const router = useRouter()

  return (
    <div className="patients-list">
       {
          patients.map((patient) => {
            return (
            
              <Link href={`/patients/${patient.identification}`} key={patient.identification}>
                  <PatientButton  
                    title={patient.name} 
                    subtitle={"Cama " + patient.bed} 
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