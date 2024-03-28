import type { Metadata } from 'next'
import { Bellefair, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'

const bellefair = Bellefair({
  subsets: ['latin-ext'],
  weight: ['400'],
  variable: '--bellefair'
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin-ext'],
  weight: ['400'],
  variable: '--barlow-condensed'
})

export const metadata: Metadata = {
  title: 'Frontend Mentor | Space tourism website',
  icons: [{ rel: 'icon', sizes: '32x32', url: '/favicon-32x32.png' }]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={clsx(bellefair.variable, barlowCondensed.variable)}>
        {children}
      </body>
    </html>
  )
}
