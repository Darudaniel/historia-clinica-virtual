"use client"
import '@/styles/components/GoogleLoginButton.css'
import { UserAuth } from '@/context/AuthContext'
import Image from 'next/image'

const GoogleLoginButton = () => {

  const {user, googleSignIn, logOut} = UserAuth();  

  const handleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button onClick={handleSignIn} type="button" className="google-login-button">
      <Image 
      priority={true}
      src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
      width={20}
      height={20}
      alt="Google icon"
      className= "google-icon"
    />
      <p>Google</p>
    </button>
  )
}

export default GoogleLoginButton