"use client"
import { UserAuth } from '@/context/AuthContext';
import { usePathname, useRouter } from 'next/navigation'
import Loader from './Loader';
import { useEffect, useState } from 'react';

const UserListener = ({ children }) => {
  const {user} = UserAuth();  
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 4000);

  if(user) {
    if (pathname == '/') {
      router.push('/patients')
    }
    return (
      <div>{children}</div>
    )
  }

  if(!loading) {
    if(user) {
      return (
        <div>{children}</div>
      )
    } else {
      console.log('No hay usuario')
      if (pathname == '/login') {
        return (
          <div>
            {children}
          </div>
        )
      } else {
        router.push('/login')
        return (
          <Loader />
        )
      }
    }  
  }
}

export default UserListener