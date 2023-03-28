
import RegisterComponent from '@/components/RegisterComponent'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full min-h-screen bg-white flex items-center justify-center'>
      <RegisterComponent />
    </div>
  )
}
