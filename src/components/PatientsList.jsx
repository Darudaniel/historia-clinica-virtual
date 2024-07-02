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
              
              <Link 
                href={`/patients/${patient.identification}`} 
                key={patient.identification} 
                className='patient-link'
              >

                <PatientButton title={patient.name} subtitle={patient.identification} />
                
              </Link>
              
            )
          })
        }
    </div>
  )
 }

 export default PatientsList