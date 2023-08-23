"use client"
import '@/styles/containers/login.css'
import InputNormal from '@/components/InputNormal'
import MainButton from '@/components/MainButton'
import GoogleLoginButton from '@/components/GoogleLoginButton'
import Image from 'next/image'
import logo from '@/resources/logo.png'
import { UserAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'

const Login = () => {

  const router = useRouter()

  const {user, googleSignIn} = UserAuth();  

  const handleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }

  if(user) {
    router.push('/patients')
  }

  return (
    <div className='login'>
       <div className='logo-img-container'>
        <Image 
          priority={true}
          src={logo}
          width={100}
          height={100}
          alt="logo"
          className='img'
        />
      </div>
      <InputNormal placeholder='Usuario' />
      <InputNormal placeholder='Contraseña' />
      <MainButton text='Entrar' />
      <GoogleLoginButton />
    </div>
  )
}

export default Login