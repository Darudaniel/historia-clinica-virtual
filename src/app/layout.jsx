import './globals.css'
import { Inter } from 'next/font/google'
import ClientAuthContextProvider from '@/context/ClientAuthContextProvider'
import {Providers} from "./providers";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HCV',
  description: 'Historia clinica virtual es una aplicacion para registrar de manera agil los datos de la historia clinica de un paciente, usando ux y ui',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      <Script  
        id="cookies-script"     
        src={`https://cdn-cookieyes.com/client_data/3bc99ea4d0774b89291afaa9/script.js`}
        strategy="beforeInteractive" 
      />
      
      </head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <body className={inter.className}>
        <ClientAuthContextProvider>
          <Providers>
            {children}
          </Providers>
        </ClientAuthContextProvider>
      </body>
      <GoogleAnalytics gaId="G-8W243Y0FXQ" />
    </html>
  )
}
