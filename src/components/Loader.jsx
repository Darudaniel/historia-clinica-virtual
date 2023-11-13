import Image from 'next/image'
import logo from '@/resources/logo.png'
import '@/styles/components/Loader.css'

const Loader = () => {
  
  return (
    <div className='img-loader-container'>
      <Image 
      priority={true}
      src={logo}
      width={100}
      height={100}
      alt="logo"
      className='img-loader'
    />
    
    </div>
  )
}

export default Loader