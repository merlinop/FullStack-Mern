import './globals.css'
import Providers from '@/store/Providers'
import NavbarPublic from '@/components/Navbar/NavbarPublic'
import {Poppins} from 'next/font/google'

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Hunting Redux',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className='w-full min-h-screen flex flex-col'>
        <Providers>
          <NavbarPublic />
        {children}
        </Providers>
        </body>
    </html>
  )
}
