'use client'

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { atom, useAtom } from 'jotai'

import { cn } from '@/lib/utils'

const menuAtom = atom(false)

function MenuButton() {
  const [, setMenu] = useAtom(menuAtom)

  return (
    <button className="md:hidden" onClick={() => setMenu(true)}>
      <Image
        src={'/images/shared/icon-hamburger.svg'}
        width={20}
        height={21}
        alt="menu"
      />
    </button>
  )
}

function MobileMenu() {
  const [menu, setMenu] = useAtom(menuAtom)

  React.useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [menu])

  return (
    <>
      <div
        onClick={() => setMenu(false)}
        className={cn('fixed z-20 inset-0', {
          'pointer-events-auto': menu,
          'pointer-events-none': !menu
        })}
      />
      <div
        className={cn(
          'fixed z-20 inset-y-0 right-0 w-64 bg-foreground/4 backdrop-blur-3xl transition-transform duration-300 ease-in-out',
          {
            'translate-x-0': menu,
            'translate-x-full pointer-events-none': !menu
          }
        )}>
        <div className="flex justify-end pr-6 pt-8 pb-16">
          <button onClick={() => setMenu(false)}>
            <Image
              src={'/images/shared/icon-close.svg'}
              width={20}
              height={20}
              alt="close"
            />
          </button>
        </div>
        <nav className="flex flex-col gap-8">
          <NavLink number="00" title="HOME" href="/" />
          <NavLink number="01" title="DESTINATION" href="/destination" />
          <NavLink number="02" title="CREW" href="/crew" />
          <NavLink number="03" title="TECHNOLOGY" href="/technology" />
        </nav>
      </div>
    </>
  )
}

interface NavLinkProps {
  number: string
  title: string
  href: string
}

function NavLink({ number, title, href }: NavLinkProps) {
  const [, setMenu] = useAtom(menuAtom)
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      onClick={() => setMenu(false)}
      href={href}
      title={title}
      className={cn(
        'py-1 flex items-center gap-3 text-nav border-transparent border-0 border-r-4 pl-8 md:border-r-0 md:border-b-[3px] md:py-9 md:pl-0',
        {
          'border-foreground': isActive,
          'hover:border-foreground/50': !isActive
        }
      )}>
      <span className="md:hidden 2xl:block font-bold">{number}</span>
      <span>{title}</span>
    </Link>
  )
}

export default function AppHeader() {
  return (
    <>
      <header className="absolute z-10 top-0 inset-x-0 flex items-center justify-between p-6 md:py-0 md:pr-0 md:pl-10 2xl:pt-10">
        <Image
          src={'/images/shared/logo.svg'}
          width={40}
          height={40}
          alt="logo"
        />

        <nav className="hidden md:flex gap-9 bg-foreground/4 px-12 relative backdrop-blur-3xl 2xl:px-24">
          <div className="hidden 2xl:block absolute top-1/2 -translate-y-1/2 left-0 translate-x-[calc(-100%+20px)] h-px bg-foreground/25 w-[30rem]" />
          <NavLink number="00" title="HOME" href="/" />
          <NavLink number="01" title="DESTINATION" href="/destination" />
          <NavLink number="02" title="CREW" href="/crew" />
          <NavLink number="03" title="TECHNOLOGY" href="/technology" />
        </nav>

        <MenuButton />
      </header>

      <MobileMenu />
    </>
  )
}
