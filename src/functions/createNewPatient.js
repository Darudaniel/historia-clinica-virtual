import { db } from '@/firebase'
import { doc, setDoc } from 'firebase/firestore'

const createNewPatient = (formatedData, router) => {
  
  try {
    console.log('Agregando paciente nuevo')
    const patientData = formatedData
    setDoc(doc(db, "patients", patientData.identification), patientData)
      .then(() => {
        console.log("Registro inicial del paciente exitoso.");
        router.push('/success/0')
      })
      .catch((error) => {
        console.error("Error durante el registro inicial del paciente:", error);
      });
  } catch (error) {
    console.error("Error al intentar agregar al paciente", error);
  }
}

export default createNewPatient