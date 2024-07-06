import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "@/firebase";

const updateAttending  = async (documentId, newDoctorId) => {
  const docRef = doc(db, "patients", documentId);

  try {
    await updateDoc(docRef, {
      attending: arrayUnion(newDoctorId)
    });
    console.log("Documento actualizado correctamente");
  } catch (error) {
    console.error("Error actualizando el documento: ", error);
  }
}

export default updateAttending