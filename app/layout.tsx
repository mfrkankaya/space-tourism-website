import type { Metadata } from 'next'
import { Bellefair, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import AppHeader from '@/components/app-header'
import { JotaiProvider } from '@/components/jotai-provider'

const bellefair = Bellefair({
  subsets: ['latin-ext'],
  weight: ['400'],
  variable: '--bellefair'
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin-ext'],
  weight: ['400', '700'],
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
        <JotaiProvider>
          <AppHeader />
          {children}
        </JotaiProvider>
      </body>
    </html>
  )
}
