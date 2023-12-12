import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import App from './components/App'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jack Roybal | Portfolio',
  description: 'The official portfolio of Jack Roybal',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-screen'>
      <body>
        <App>

        </App>
      </body>
    </html>
  )
}
