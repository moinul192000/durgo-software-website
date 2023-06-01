import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Durgo Software',
  description: 'A Leading Software Firm based in Dhaka, Bangladesh.',
  keywords: ["Next.js", "shadcn/ui", "NextAuth", "Prisma", "Vercel"],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
