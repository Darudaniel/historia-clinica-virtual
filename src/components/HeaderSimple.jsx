import '@/styles/components/HeaderSimple.css'
import BackButton from './BackButton'

const HeaderSimple = ({ title }) => {
  return (
    <div className='header-simple'>
      <BackButton />
      <h1>{title}</h1>
    </div>
  )
}

export default HeaderSimple