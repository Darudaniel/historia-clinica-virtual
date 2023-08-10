import '@/styles/components/HeaderSimple.css'
import BackButton from './BackButton'

const HeaderSimple = (props) => {
  return (
    <div className='header-simple'>
      <BackButton />
      <h1>{props.title}</h1>
    </div>
  )
}

export default HeaderSimple