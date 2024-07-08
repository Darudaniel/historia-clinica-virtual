import { doc, setDoc } from "firebase/firestore"
import { db } from "@/firebase"


const createNewNote = (formatedData, router) => {
  try {
    console.log('Agregando nota nueva')
    const noteData = formatedData
    setDoc(doc(db, "notes", noteData.note_id), noteData)
      .then(() => {
        console.log("Registro de nota exitoso.");
        router.push('/success/1')
      })
      .catch((error) => {
        console.error("Error agregando el documento:", error);
      });
  } catch (error) {
    console.error("Error al intentar agregar al nota", error);
  }
}

export default createNewNote