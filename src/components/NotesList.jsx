import '@/styles/components/NotesList.css'
import DateDivision from "@/components/DateDivision"
import TransparentButton from "./TransparentButton"
import formatDate from '@/functions/formatDate'
import formatHour from '@/functions/formatHour'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NotesList = ({ notes }) => {

  return (
    <div className="notes-list-container">
      {
        notes.map((note, index, array) => {
          const jsDate = note.date.toDate()
          const formatedHour = formatHour(note.date)
          const formatedDate = formatDate(note.date)
          const fechaActualSinHoras = new Date(jsDate.getFullYear(), jsDate.getMonth(), jsDate.getDate());

          const pathname = usePathname();

          const notePath = `${pathname}/${note.note_id}`

          const previousElement = index > 0 ? array[index - 1] : null;
          if(previousElement) {

            const previousElementJsDate = previousElement.date.toDate()
            const fechaPreviaSinHoras = new Date(previousElementJsDate.getFullYear(), previousElementJsDate.getMonth(), previousElementJsDate.getDate());

            if (fechaActualSinHoras.getTime() == fechaPreviaSinHoras.getTime()) {
              return (
                <Link href={notePath}>
                  <TransparentButton
                    key={note.note_id} 
                    text={formatedHour}
                  />
                </Link>
              )
            } else {
              return(
                <div className='note-button-container' key={note.note_id} >
                  <DateDivision date={formatedDate}/>
                  <Link href={notePath}>
                    <TransparentButton
                      text={formatedHour}
                    />
                  </Link>
                </div>
              )
            }

          } else {
            
            return (
              <div className='note-button-container' key={note.note_id}>
                <DateDivision date={formatedDate}/>
                <Link href={notePath}>
                    <TransparentButton
                      text={formatedHour}
                    />
                  </Link>
              </div>
            )

          }
        })
      }
    </div>
  )
}

export default NotesList