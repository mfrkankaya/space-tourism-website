import React from 'react'
import Image, { type ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

interface ResponsiveImageProps extends Omit<ImageProps, 'src'> {
  sm: ImageProps['src']
  md: ImageProps['src']
  xxl: ImageProps['src']
}

export default function ResponsiveImage({
  sm,
  md,
  xxl,
  className,
  ...props
}: ResponsiveImageProps) {
  return (
    <>
      <Image src={sm} className={cn('md:hidden', className)} {...props} />
      <Image
        src={md}
        className={cn('hidden md:block 2xl:hidden', className)}
        {...props}
      />
      <Image
        src={xxl}
        className={cn('hidden 2xl:block', className)}
        {...props}
      />
    </>
  )
}
