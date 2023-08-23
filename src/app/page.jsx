"use client"
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter();
  router.push('/login')
  return (
    <h1>Loading...</h1>
  )
}

export default Home
