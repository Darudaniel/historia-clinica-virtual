"use client"
import { UserAuth } from '@/context/AuthContext';
import '@/styles/components/HeaderPatients.css'
// import BurgerMenu from './BurguerMenu'

const HeaderPatients = () => {

  const {logOut} = UserAuth();  

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch {
      console.log(error)
    }
  }

  return (
    <div className='header-patients-container'>
      {/* <div className='profile-img-container'>
        <p>img</p>
      </div> */}
      <h1>PACIENTES</h1>
      <div className='menu-container'>
        <button className="no-button" type='button' onClick={handleSignOut}>Cerrar Sesión</button>
        {/* <BurgerMenu /> */}
      </div>
    </div>
  )
}

export default HeaderPatients