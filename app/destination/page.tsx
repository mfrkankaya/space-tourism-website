import React from 'react'
import ResponsiveImage from '@/components/responsive-image'

export default function DestinationPage() {
  return (
    <>
      <ResponsiveImage
        sm="/images/destination/background-destination-mobile.jpg"
        md="/images/destination/background-destination-tablet.jpg"
        xxl="/images/destination/background-destination-desktop.jpg"
        alt="background"
        width={2000}
        height={2000}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </>
  )
}
