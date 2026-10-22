import React from 'react';

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
  width?: number | string;
  height?: number | string;
}

/**
 * Natural intrinsic dimensions (width x height in px) for all baked assets.
 * Setting explicit width & height prevents Cumulative Layout Shift (CLS),
 * a critical Core Web Vitals metric for search ranking and user experience.
 */
const INTRINSIC_IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  anniversary_photo_floral_cake_1791370942662: { width: 960, height: 536 },
  bakers_kitchen_story_1791348346164: { width: 960, height: 717 },
  basque_cheesecake_slice_1791347568824: { width: 960, height: 717 },
  belgian_fudge_brownies_1791348320450: { width: 960, height: 717 },
  brown_butter_cookies_1791348332806: { width: 800, height: 597 },
  brownie_tub_tin_scoop_1791348925707: { width: 960, height: 717 },
  brownies_brookies_stack_1791347558371: { width: 960, height: 717 },
  butterfly_celebration_cake_1791371003407: { width: 960, height: 960 },
  cake_decorating_artistry_1791348365285: { width: 960, height: 717 },
  cookie_tin_two_in_one_1791348905802: { width: 960, height: 717 },
  cookie_tin_two_in_one_festive_1791350573334: { width: 960, height: 717 },
  cookie_tin_two_in_one_og_1791350553246: { width: 717, height: 960 },
  cookies_cupcakes_assortment_1791347579750: { width: 960, height: 717 },
  dark_chocolate_gold_cake_1791370917497: { width: 880, height: 880 },
  freshly_baked_warm_dessert_1791348355661: { width: 960, height: 717 },
  hero_bespoke_celebration_cake_1791370876379: { width: 960, height: 717 },
  hero_celebration_cake_1791347545940: { width: 960, height: 536 },
  mini_cookie_trays_baked_1791348938467: { width: 880, height: 657 },
  spoonable_brownie_tin_scoop_1791370898954: { width: 640, height: 640 },
  white_pearl_floral_cake_1791370974897: { width: 960, height: 960 },
};

/**
 * OptimizedImage component for technical SEO & performance:
 * - Emits modern WebP format via <picture> with seamless fallback to JPEG/PNG.
 * - Enforces descriptive alt text for search engine indexing and accessibility.
 * - Always provides explicit width and height attributes to eliminate Cumulative Layout Shift (CLS).
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
  width,
  height,
  onError,
  ...rest
}) => {
  // Derive WebP path from jpeg/jpg/png
  const webpSrc = src ? src.replace(/\.(jpe?g|png)$/i, '.webp') : '';

  // Extract base filename without extension to look up natural dimensions
  const baseFilename = src ? src.split('/').pop()?.replace(/\.(jpe?g|webp|png)$/i, '') || '' : '';
  const intrinsic = INTRINSIC_IMAGE_DIMENSIONS[baseFilename] || { width: 800, height: 600 };

  // Detect mobile-optimized responsive variants
  const mobileWebpSrc = (baseFilename === 'hero_bespoke_celebration_cake_1791370876379' || baseFilename === 'hero_celebration_cake_1791347545940')
    ? `/images/${baseFilename}_640.webp`
    : '';

  const finalWidth = width ?? intrinsic.width;
  const finalHeight = height ?? intrinsic.height;

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
      {mobileWebpSrc && (
        <source
          type="image/webp"
          media="(max-width: 640px)"
          srcSet={mobileWebpSrc}
          width={640}
          height={Math.round((intrinsic.height / intrinsic.width) * 640)}
        />
      )}
      {webpSrc && (
        <source
          type="image/webp"
          srcSet={webpSrc}
          width={finalWidth}
          height={finalHeight}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={finalWidth}
        height={finalHeight}
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
