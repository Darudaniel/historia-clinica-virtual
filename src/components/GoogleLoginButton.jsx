"use client"
import '@/styles/components/GoogleLoginButton.css'

const GoogleLoginButton = () => {
  return (
    <button type="button" className="google-login-button">
      <img className= "google-icon" src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" alt="Google icon" />
      <p>Google</p>
    </button>
  )
}

export default GoogleLoginButton