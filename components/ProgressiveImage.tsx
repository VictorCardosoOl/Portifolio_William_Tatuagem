import React, { useState, useRef, useEffect } from 'react';

interface ProgressiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  imgClassName = '', 
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  // Parse low-res thumbnail from Unsplash source link se for externo
  const isExternal = src.startsWith('http');
  const lowResSrc = isExternal ? `${src}&w=20&q=10` : src;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blurred thumbnail */}
      <img
        src={lowResSrc}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } filter blur-[15px] scale-105`}
      />
      {/* Actual image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`}
        {...props}
      />
    </div>
  );
};
export default ProgressiveImage;

