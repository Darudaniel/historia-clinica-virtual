import '@/styles/containers/patients.css';
import TransparentButton from "@/components/TransparentButton";
import HeaderPatients from "@/components/HeaderPatients";
import PatientsList from '@/components/PatientsList';

async function fetchPatients() {
  const res = await fetch("https://reqres.in/api/users?page=2")
  const data = await res.json()
  return data.data
}

const Patients = async () => {
  const patients = await fetchPatients();

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