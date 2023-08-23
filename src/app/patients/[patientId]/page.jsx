import '@/styles/containers/patientPage.css'
import HeaderSimple from "@/components/HeaderSimple"
import NotesList from "@/components/NotesList"
import TransparentButton from "@/components/TransparentButton"

async function getPatient(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data
}

const PatientPage = async ({ params }) => {

  const data = await getPatient(params.patientId)
  const pacientes = {
    gilberto: {
      attending: [
        "doctor_id_1",
        " doctor_id_2"
      ],
      notes: [
        {
          note_id: "12368986823",
          date: new Date(2023, 10, 15, 14, 30, 0),
          content: "Hola esta es una nota mas"
        },
        {
          note_id: "12366823",
          date: new Date(2023, 10, 15, 14, 20, 0),
          content: "Hola esta es una nota mas"
        },
        {
          note_id: "12367823",
          date: new Date(2023, 9, 15, 23, 30, 0),
          content: "Hola esta es una nota"
        },
        {
          note_id: "12565323",
          date: new Date(2023, 8, 15, 0, 30, 0),
          content: "Hola esta es la nota del medio"
        },
        {
          note_id: "12345623",
          date: new Date(2023, 7, 15, 12, 30, 0),
          content: "Hola es un nota nota"
        }
      ]
    }
  }

  // estructuraDeDatos = {
  //   colleccion: pacientes
  //     documento: paciente #1
  //       doctores_que_pueden_leer:
  //         [ 
  //           doctor_id #1,
  //           doctor_id #2
  //         ]
  //       notas: {
  //         {
  //           nota #1: {
  //             note_id: 12343
  //             content: "contenido de la nota"
  //             fecha: 2023-08-09 14:00
  //           }
  //         }
  //       }        
  // }

  return (
    <div className="patient-page">
      <HeaderSimple title={data.first_name} />
      <div>perfil del paciente</div>
      <TransparentButton text='+' />
      <NotesList notes={pacientes.gilberto.notes}/>
    </div>
  )  
}

export default PatientPage

