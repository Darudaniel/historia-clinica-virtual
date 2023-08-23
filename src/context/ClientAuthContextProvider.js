"use client"
import { AuthContextProvider } from '@/context/AuthContext'
import UserListener from '@/components/UserListener'

const ClientAuthContextProvider = ({ children }) => {
  
  return(
    <AuthContextProvider>
      <UserListener>
        {children}
      </UserListener>
    </AuthContextProvider>
  )
}

export default ClientAuthContextProvider
