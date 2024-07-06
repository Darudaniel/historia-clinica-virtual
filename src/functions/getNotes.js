import { db } from "@/firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import getPatient from "./getPatient";


const getNotes = async (patientIdentification, user) => {

  const doctorId = user.uid

  const patient = getPatient(patientIdentification, user).then(result => {
    if(result.attending.includes(doctorId)) {
      return result
    } else {
      throw new Error("El doctor no tiene permisos para ver la historia clinica de este paciente", error)
    }
  }).catch(error => {
    throw new Error("Hubo un error al intentar retornar las notas al cliente", error)
  })

  if(patient) {
      const notesCollectionRef = collection(db, "notes")
      const q = query(
        notesCollectionRef, 
        where("doctor", "==", doctorId), 
        where("patient", "==", patientIdentification), 
        orderBy("date")
      );
      const data = await getDocs(q)
      const notes = (data.docs.reverse().map((doc) => ({ ...doc.data() })))
      return(notes)
  } else {
    throw new Error("Hubo un error al validar los datos del paciente", error)
  }
}


export default getNotes