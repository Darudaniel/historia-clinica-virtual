"use client"
import Login from '@/app/login/page';
import { UserAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation'

const UserListener = ({ children }) => {
  const {user} = UserAuth();  
  const router = useRouter()

  if(!user) {
    router.push('/login')
    return (
      <Login />
    )
  } else {
    return (
      <div>{children}</div>
    )
  }

  
}

export default UserListener