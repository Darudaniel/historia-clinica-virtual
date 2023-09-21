import '@/styles/components/AllNotes.css'
import DateDivision from "@/components/DateDivision"
import formatDate from "@/functions/formatDate"

const AllNotes = ({ notes }) => {

  return (
    <div className="all-notes">
      {
        notes.map((note) => {
          const noteDate = formatDate(note.date)
          return (
            <div className="note-container" key={note.note_id}>
              <DateDivision date={noteDate}/>
              <p className='note-content'>
                {note.content}
              </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default AllNotes