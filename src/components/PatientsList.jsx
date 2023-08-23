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
              key={patient.id} 
              title={patient.first_name + " " + patient.last_name} 
              subtitle={"Cama " + patient.id} 
              action={() => {router.push(`/patients/${patient.id}`)}} 
            />
          ))
        }
    </div>
  )
 }

 export default PatientsList