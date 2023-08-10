import '@/styles/containers/patients.css'
import ComplexTransparentButton from "@/components/ComplexTransparentButton"
import TransparentButton from "@/components/TransparentButton"
import HeaderPatients from "@/components/HeaderPatients"

const Patients = () => {
  return(
    <div>
      <HeaderPatients />
      <section className="patients-list">
        <TransparentButton text="+" />
        <ComplexTransparentButton title="Gilberto Arciniegas" subtitle="Cama B" />
      </section>
    </div>
  )
}

export default Patients