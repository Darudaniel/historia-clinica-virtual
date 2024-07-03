import '@/styles/components/DateDivision.css'

const DateDivision = ({ date }) => {
  return (
    <div className='date-division'>
      <hr className='line'/>
      <p className='date'>{date}</p>
      <hr className='line'/>
    </div>
  )
}

export default DateDivision