import React from 'react'
import Image from 'next/image'

interface ResponsiveInterface {
  src: string;
  alt: string;
  styles?: string;
  imageStyles?: string;
}

const ResponsiveImage: React.FC<ResponsiveInterface> = ({ styles, imageStyles, src, alt }) => {
  return (
    <div className={`relative ${styles}`}>
      <Image
        src={src}
        alt={alt}
        className={imageStyles || ''}
        fill
      />
    </div>
  )
}

export default ResponsiveImage