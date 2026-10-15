import React from 'react';

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
}

/**
 * OptimizedImage component for on-page SEO & performance:
 * - Emits modern WebP format via <picture> with seamless fallback to JPEG/PNG.
 * - Enforces descriptive alt text for search engine indexing and accessibility.
 * - Supports native lazy loading and async decoding to prevent main-thread blocking.
 * - Built-in fallback resilience if an asset path differs across deployment environments.
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  onError,
  ...rest
}) => {
  // Derive WebP path from jpeg/jpg/png
  const webpSrc = src ? src.replace(/\.(jpe?g|png)$/i, '.webp') : '';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    if (!img.dataset.retried) {
      img.dataset.retried = 'true';
      const filename = src.split('/').pop();
      if (filename) {
        img.src = src.startsWith('/images/')
          ? `/src/assets/images/${filename}`
          : `/images/${filename}`;
      }
    }
    if (onError) onError(e);
  };

  return (
    <picture className="block w-full h-full">
      {webpSrc && <source type="image/webp" srcSet={webpSrc} />}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        onError={handleImageError}
        className={className}
        {...rest}
      />
    </picture>
  );
};
