'use client'

import { Provider } from 'jotai'

export function JotaiProvider({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Provider>{children}</Provider>
}
