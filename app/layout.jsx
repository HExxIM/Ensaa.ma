import './globals.css'
import { Inter } from 'next/font/google'

//components
import NavBar from './Components/Sections/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ensaa',
  description: 'ADE Ensaa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Nav*/}
        <NavBar/>
        {children}
        {/* Footer*/}
        </body>
    </html>
  )
}
