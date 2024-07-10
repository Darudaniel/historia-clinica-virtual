import { db } from '@/firebase';
import { collection, getDocs, query, where } from "firebase/firestore";


const getPatients = async (doctorId) => {

  const patientsCollectionRef = collection(db, "patients")
  const q = query(patientsCollectionRef, where("attending", "array-contains", doctorId));

  const data = await getDocs(q)
  return(data.docs.map((doc) => ({ ...doc.data() })))
}

export default getPatients