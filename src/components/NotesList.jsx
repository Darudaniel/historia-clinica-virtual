import '@/styles/components/NotesList.css'
import DateDivision from "@/components/DateDivision"
import TransparentButton from "./TransparentButton"
import formatDate from '@/functions/formatDate'

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list-container">
      {
        notes.map((note, index, array) => {
          const previousElement = index > 0 ? array[index - 1] : null;
          if(!previousElement) {
            const formatedHour = `${note.date.getHours()}:${note.date.getMinutes()}`
            const formatedDate = `${note.date.getDate()}/${note.date.getMonth()}/${note.date.getFullYear()}`
            return (
              <div className='note-button-container'>
                <DateDivision date={formatedDate}/>
                <TransparentButton
                  key={note.note_id} 
                  text={formatedHour} 
                />
              </div>
            )
          } else {
            const fechaActualSinHoras = new Date(note.date.getFullYear(), note.date.getMonth(), note.date.getDate());
            const fechaPreviaSinHoras = new Date(previousElement.date.getFullYear(), previousElement.date.getMonth(), previousElement.date.getDate());
            if (fechaActualSinHoras.getTime() == fechaPreviaSinHoras.getTime()) {
              const formatedHour = `${note.date.getHours()}:${note.date.getMinutes()}`
              return (
                <TransparentButton
                  key={note.note_id} 
                  text={formatedHour} 
                />
              )
            } else {
              const formatedDate = formatDate(note.date)
              return(
                <div className='note-button-container'>
                  <DateDivision date={formatedDate}/>
                  <TransparentButton
                    key={note.note_id} 
                    text={`${note.date.getHours()}:${note.date.getMinutes()}`} 
                    />
                </div>
              )
            }
          }
        })
      }
    </div>
  )
}

export default NotesList