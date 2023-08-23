import '@/styles/containers/notePage.css'
import HeaderSimple from "@/components/HeaderSimple"
import TransparentButton from "@/components/TransparentButton"
import AllNotes from '@/components/AllNotes'

const NotePage = ({ params }) => {

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
          content: "Hola esta es una nota mas lorem impusm Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, animi! Velit maxime nam, veniam nostrum rerum vel quos id vero alias commodi maiores magni totam veritatis eveniet, hic reprehenderit odio!" 
        },
        {
          note_id: "12366823",
          date: new Date(2023, 10, 15, 14, 20, 0),
          content: "Hola esta es una nota mas lorem impusm Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, animi! Velit maxime nam, veniam nostrum rerum vel quos id vero alias commodi maiores magni totam veritatis eveniet, hic reprehenderit odio!" 
        },
        {
          note_id: "12367823",
          date: new Date(2023, 9, 15, 23, 30, 0),
          content: "Hola esta es una nota mas lorem impusm Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, animi! Velit maxime nam, veniam nostrum rerum vel quos id vero alias commodi maiores magni totam veritatis eveniet, hic reprehenderit odio!" 
        },
        {
          note_id: "12565323",
          date: new Date(2023, 8, 15, 0, 30, 0),
          content: "Hola esta es una nota mas lorem impusm Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, animi! Velit maxime nam, veniam nostrum rerum vel quos id vero alias commodi maiores magni totam veritatis eveniet, hic reprehenderit odio!" 
        },
        {
          note_id: "12345623",
          date: new Date(2023, 7, 15, 12, 30, 0),
          content: "Hola es un nota nota"
        }
      ]
    }
  }

  return (
    <div className="note-page">
      <HeaderSimple title="NOTAS MEDICAS" />
      <TransparentButton text="+" />
      <AllNotes notes={pacientes.gilberto.notes} />
    </div>
  )
}

export default NotePage