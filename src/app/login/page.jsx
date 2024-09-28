"use client"
import '@/styles/containers/login.css'
import InputNormal from '@/components/InputNormal'
import MainButton from '@/components/MainButton'
import GoogleLoginButton from '@/components/GoogleLoginButton'
import Image from 'next/image'
import logo from '@/resources/logo.png'
import { UserAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import Loader from '@/components/Loader'
import { sendGAEvent } from '@next/third-parties/google'

const Login = () => {

  const router = useRouter()

  const {user, googleSignIn} = UserAuth();  

  sendGAEvent('event', 'login_page_view')

  const handleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.error(error)
    }
  }

  if(user) {
    router.push('/patients')
    return (
      <Loader />
    )
  } else {
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
        <div className='login-message-container'>
          <h2 className='login-message'>Inicia sesión con Google para comenzar</h2>
        </div>
        {/* <InputNormal placeholder='Usuario' />
        <InputNormal placeholder='Contraseña' />
        <MainButton text='Entrar' /> */}
        <GoogleLoginButton />
      </div>
    )
  }

}

export default Login