import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'],weight: '400', })

export const metadata = {
  title: 'Fortunate Home page.',
  language: 'English',
  keywords: 'Fortunate Home page, experience open source, transparent and efficient borrowing and lending on solana.',
  description: 'Fortunate Home page, experience open source, transparent and efficient borrowing and lending on solana.',
}

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
