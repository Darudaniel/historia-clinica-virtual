"use client"
import { useState } from 'react'
import '@/styles/components/BurgerMenu.css'
import Hamburger from 'hamburger-react'

const BurgerMenu = () =>  {

  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen}/>
      {
        isOpen ?
          <div className='menu-list-container'>
            <ul className='menu-list'>
              <li><a href="#">Item 1</a></li>
              <li><a href="#">Item 2</a></li>
              <li><a href="#">Item 3</a></li>
              <li><a href="#">Item 4</a></li>
              <li><a href="#">Item 5</a></li>
            </ul>
          </div>
        :
          <div>
            
          </div>
      }
    </div>
  
  )
}

export default BurgerMenu