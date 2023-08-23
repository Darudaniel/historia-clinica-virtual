"use client"
import { useRouter } from "next/navigation"
import PatientButton from "./PatientButton"

const PatientsList = ({ patients }) => {
  
  const router = useRouter()

  return (
    <div className="patients-list">
       {
          patients.map((patient) => (
            <PatientButton 
              key={patient.identification} 
              title={patient.name} 
              subtitle={"Cama " + patient.bed} 
              action={() => {router.push(`/patients/${patient.identification}`)}} 
            />
            
          ))
        }
    </div>
  )
 }

 export default PatientsList