"use client"
import UserListener from "@/components/UserListener"
import {NextUIProvider} from "@nextui-org/react";

const Home = () => {
  return(
    <NextUIProvider>
      <UserListener>
        <div></div>
      </UserListener>
    </NextUIProvider>
  )
}

export default Home
