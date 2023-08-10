import '@/styles/components/InputNormal.css'

const InputNormal = (props) => {
  return (
    <input type="text" className='input-normal'placeholder={props.placeholder}/>
  )
}

export default InputNormal