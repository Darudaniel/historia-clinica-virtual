"use client"
import '@/styles/components/GoogleLoginButton.css'
import { UserAuth } from '@/context/AuthContext'

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
      <img className= "google-icon" src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" alt="Google icon" />
      <p>Google</p>
    </button>
  )
}

export default GoogleLoginButton