import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import updateAttending from "./updateAttending";

const validatePatientAdmission = async (patientIdentification, doctorObject) => { 

  const doctorId = doctorObject.uid
  const patientDocumentRef = doc(db, "patients", patientIdentification)

  try {
    const docSnap = await getDoc(patientDocumentRef);

    return new Promise((resolve, reject) => {
      
      if (!docSnap.data()) { //El paciente existe?

        console.log("El paciente no esta registrado en la base de datos")
        resolve(true);

      } else { // El paciente esta registrado
        
        if(docSnap.data().attending.includes(doctorId)) { //El doctor esta autorizado para ver los datos del paciente?
          reject('El paciente ya esta registrado en la plataforma y el doctor esta autorizado para ver sus datos');
        } else {
          updateAttending(patientIdentification, doctorId)
          reject('El paciente ya esta registrado pero el medico no tenia permisos para ver sus datos')
        }
      }
      
    })
    
  } catch (error) {
    throw new Error("Error en la peticion para obtener el registro del paciente:", error)
  }
}

export default validatePatientAdmission