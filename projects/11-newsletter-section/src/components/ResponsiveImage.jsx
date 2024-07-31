export default function ResponsiveImage({
  smallSrc,
  mediumSrc,
  largeSrc,
  alt,
  className,
  ariaLabel,
}) {
  return (
    <picture>
      <source media="(min-width: 90rem)" srcSet={largeSrc} />
      <source media="(min-width: 48rem)" srcSet={mediumSrc} />
      <source media="(min-width: 23.4375rem)" srcSet={mediumSrc} />
      <img
        src={smallSrc}
        alt={alt}
        className={className}
        aria-label={ariaLabel}
      />
    </picture>
  );
}
