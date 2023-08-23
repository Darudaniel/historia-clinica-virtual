"use client"
import { UserAuth } from '@/context/AuthContext';
import { usePathname, useRouter } from 'next/navigation'
import Loader from './Loader';
import { useEffect } from 'react';

const UserListener = ({ children }) => {
  const {user} = UserAuth();  
  const router = useRouter();
  const pathname = usePathname();

  if(user) {
    return (
      <div>{children}</div>
    )
  } else {
    useEffect(() => {
      router.push('/login')
    }, [])
    if (pathname == '/login') {
      return (
        <div>
          {children}
        </div>
      )
    } else {
      return (
        <Loader />
      )
    }
  }  
}

export default UserListener