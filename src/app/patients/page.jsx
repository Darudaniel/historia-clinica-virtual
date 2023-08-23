"use client"
import '@/styles/containers/patients.css';
import TransparentButton from "@/components/TransparentButton";
import HeaderPatients from "@/components/HeaderPatients";
import PatientsList from '@/components/PatientsList';
import { useEffect, useState } from 'react';
import { collection, getDocs, doc, getDoc, setDoc, query, where } from "firebase/firestore";
import { db } from '@/firebase';
import { UserAuth } from '@/context/AuthContext';

const Patients = () => {

  const { user } = UserAuth()
  const doctorId = user.uid
  const doctorDocumentRef = doc(db, "doctors", doctorId)

  const [patients, setPatients] = useState([])
  const patientsCollectionRef = collection(db, "patients")
  const q = query(patientsCollectionRef, where("attending", "array-contains", doctorId));

  useEffect(() => {

    const getDoctor = async (email) => {
      try {
        const docSnap = await getDoc(doctorDocumentRef);
        if (docSnap.exists()) {
          // El médico ya está registrado, no es necesario crear un nuevo registro
        } else {
          // El médico no está registrado, crea un nuevo registro
          const doctorData = {
            uid: doctorId,
            email: email
          }
          setDoc(doctorDocumentRef, doctorData)
            .then(() => {
              console.log("Registro inicial del médico exitoso.");
            })
            .catch((error) => {
              console.error("Error durante el registro inicial del médico:", error);
            });
        }
      } catch (error) {
        console.error("Error al verificar el registro del médico:", error);
      }
    }

    const getPatients = async () => {
      const data = await getDocs(q)
      setPatients(data.docs.map((doc) => ({ ...doc.data() })))
    }
    
    getDoctor(user.email)
    getPatients()

  }, [])

  return(
    <div>
      <HeaderPatients />
      <section className="patients-list">
        <TransparentButton text="+" />
        <PatientsList patients={patients} />
      </section>
    </div>
  )
}

export default Patients