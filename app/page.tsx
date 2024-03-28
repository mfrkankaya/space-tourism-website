import React from 'react'
import Link from 'next/link'
import ResponsiveImage from '@/components/responsive-image'

export default function Home() {
  return (
    <>
      <ResponsiveImage
        sm="/images/home/background-home-mobile.jpg"
        md="/images/home/background-home-tablet.jpg"
        xxl="/images/home/background-home-desktop.jpg"
        alt="background"
        width={2000}
        height={2000}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="container relative min-h-dvh flex flex-col items-center justify-end pb-12 text-center md:pb-24 2xl:flex-row 2xl:items-end 2xl:justify-between 2xl:pb-32 2xl:text-left">
        <div className="mb-20 max-w-md md:mb-40 2xl:mb-0">
          <p className="text-nav text-secondary">SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="text-heading-lg font-bellefair my-4 md:text-heading-xl md:my-6">
            SPACE
          </h1>
          <p className="text-secondary">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link
          href="/destination"
          className="flex justify-center items-center text-center size-36 rounded-full bg-foreground text-background font-bellefair text-[20px] leading-[23px] tracking-[1.25px] transition-all duration-300 ease-in-out md:size-60 md:text-heading-sm md:tracking-[2px] 2xl:size-72 hover:outline outline-[5.5rem] outline-foreground/10">
          EXPLORE
        </Link>
      </div>
    </>
  )
}
