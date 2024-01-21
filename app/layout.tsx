import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Austin Lance | Personal Portfolio',
  description:
    'Austin is a full-stack junior developer eager to contribute innovative solutions and grow technical skills through collaborative, hands-on experience in software development projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-grey-200 text-gray-950`}>{children}</body>
    </html>
  )
}
