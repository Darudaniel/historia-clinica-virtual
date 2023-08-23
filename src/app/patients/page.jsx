"use client"
import '@/styles/containers/patients.css';
import TransparentButton from "@/components/TransparentButton";
import HeaderPatients from "@/components/HeaderPatients";
import PatientsList from '@/components/PatientsList';
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase';

const Patients = () => {
  const [patients, setPatients] = useState([])
  const patientsCollectionRef = collection(db, "patients")

  useEffect(() => {
    const getEntries = async () => {
      const data = await getDocs(patientsCollectionRef)
      setPatients(data.docs.map((doc) => ({ ...doc.data() })))
    }

    getEntries()

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