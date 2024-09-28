import '@/styles/components/AllNotes.css'
import DateDivision from "@/components/DateDivision"
import formatDate from "@/functions/formatDate"
import ReactMarkdown from 'react-markdown'

const AllNotes = ({ notes }) => {

  return (
    <div className="all-notes">
      {
        notes.map((note) => {
          const noteDate = formatDate(note.date)
          return (
            <div className="note-container" key={note.note_id}>
              <DateDivision date={noteDate}/>
              <div className='credit-container'>
                <p className='credit'>Nota registrada por: {note.doctor_name || "Anónimo"} </p>
              </div>
              <div className='note-content'>
                <ReactMarkdown>{note.content}</ReactMarkdown>
              </div>
              {/* <p className='note-content'>
                {note.content}
              </p> */}
            </div>
          )
        })
      }
    </div>
  )
} 

export default AllNotes