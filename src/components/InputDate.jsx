import '@/styles/components/InputDate.css'

const InputDate = (props) => {
  return (
    <div className="input-date-container">
      <label>{props.label}</label>
      <br />
      <input type="date" className="input-date"/>
    </div>
  )
}

export default InputDate