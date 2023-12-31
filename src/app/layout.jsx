import './globals.css'
import { Inter } from 'next/font/google'
import ClientAuthContextProvider from '@/context/ClientAuthContextProvider'
import {Providers} from "./providers";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HCV',
  description: 'Historia clinica virtual es una aplicacion para registrar de manera agil los datos de la historia clinica de un paciente, usando ux y ui',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <body className={inter.className}>
        <ClientAuthContextProvider>
          <Providers>
            {children}
          </Providers>
        </ClientAuthContextProvider>
      </body>
    </html>
  )
}
