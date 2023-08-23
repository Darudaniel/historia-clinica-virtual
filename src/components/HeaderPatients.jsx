"use client"
import '@/styles/components/HeaderPatients.css'
import BurgerMenu from './BurguerMenu'

const HeaderPatients = () => {
    return (
      <div className='header-patients-container'>
        <div className='profile-img-container'>
          <p>img</p>
        </div>
        <h1>PACIENTES</h1>
        <div className='menu-container'>
          <BurgerMenu />
        </div>
      </div>
    )
}

export default HeaderPatients