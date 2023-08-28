import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

const getPatient = async (patientIdentification, user) => { 

  const doctorId = user.uid
  const patientDocumentRef = doc(db, "patients", patientIdentification)

  try {
    const docSnap = await getDoc(patientDocumentRef);
    if (docSnap.data()) {
      if(docSnap.data().attending.includes(doctorId)) {
        return (docSnap.data())
      } else {
        throw new Error("El usuario no esta autorizado para ver los datos de este paciente")
      }
    } else {
      throw new Error("No se ha podido encontrar al paciente")
    }
  } catch (error) {
    throw new Error("Error en la peticion para obtener el registro del paciente:", error)
  }
}

export default getPatient