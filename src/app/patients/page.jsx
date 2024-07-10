"use client"
import '@/styles/containers/patients.css';
import { db } from '@/firebase';
import { collection, getDocs, doc, getDoc, setDoc, query, where } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { UserAuth } from '@/context/AuthContext';
import HeaderPatients from "@/components/HeaderPatients";
import PatientsList from '@/components/PatientsList';
import TransparentButton from '@/components/TransparentButton';
import Link from 'next/link';
import getPatients from '@/functions/getPatients';
import Search from '@/components/Search';

const Patients = () => {

  const { user } = UserAuth()
  const doctorId = user.uid
  const doctorDocumentRef = doc(db, "doctors", doctorId)
  
  const [patients, setPatients] = useState([])
  const patientsCollectionRef = collection(db, "patients")
  const q = query(patientsCollectionRef, where("attending", "array-contains", doctorId));
  
  const handleClick = () => {
    console.log('redireccionando a crear paciente')
  }

  const createNewDoctor = (email) => {
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

  const validateDoctor = async () => {
    try {
      const docSnap = await getDoc(doctorDocumentRef);
      if (docSnap.exists()) {
        // El médico ya está registrado, no es necesario crear un nuevo registro
      } else {
        // El médico no está registrado, crea un nuevo registro
        createNewDoctor(user.email)
      }
    } catch (error) {
      console.error("Error al verificar el registro del médico:", error);
    }
  }

  const initialPatientsListSetting = async () => {
    const data = await getPatients(doctorId)
    setPatients(data)
  }

  useEffect(() => {    
    validateDoctor()
    initialPatientsListSetting()
  }, [])

  return(
    <div>
      <HeaderPatients />
      <div className='patients'>
        <section className="patients-list">
          <Search />
          <Link href="/admission">
            <TransparentButton text="+" action={handleClick} />
          </Link>
          <PatientsList patients={patients} />
        </section>
        <section className='dashboard'>
          <p>Hola de nuevo, sigue adelante con la misma pasión y entrega que te ha llevado hasta aquí. En cada historia clínica, estás escribiendo un capítulo de esperanza y cuidado en la vida de alguien. ¡Gracias por tu invaluable labor!</p>
          <br />
          <h2>Pacientes atendidos</h2>
          <p>{patients.length}</p>
        </section>
      </div>
    </div>
  )
}

export default Patients