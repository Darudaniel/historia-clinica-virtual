import '@/styles/containers/login.css'
import InputNormal from '@/components/InputNormal'
import MainButton from '@/components/MainButton'
import GoogleLoginButton from '@/components/GoogleLoginButton'

const Login = () => {
  return (
    <div className='login'>
       <div className='profile-img-container'>
        <p>img</p>
      </div>
      <InputNormal placeholder='Usuario' />
      <InputNormal placeholder='Contraseña' />
      <MainButton text='Entrar' />
      <GoogleLoginButton />
    </div>
  )
}

export default Login