import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-display',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata = {
  title: 'LUXE AUTO — Premium Car Dealer & Workshop',
  description: 'Discover exceptional luxury vehicles and premium automotive services at LUXE AUTO. Expert detailing, maintenance, and custom modifications for the discerning driver.',
  keywords: 'luxury cars, premium vehicles, car dealer, automotive workshop, vehicle maintenance',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="bg-background" style={{
      '--font-display': spaceGrotesk.variable,
      '--font-body': inter.variable,
    }}>
      <body>
        {children}
      </body>
    </html>
  )
}
