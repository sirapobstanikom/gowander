import { useEffect, useState } from "react"

export default function HeroBackground({
  src,
  fallback,
  variant = "page",
  fit = "cover",
  objectPosition = "object-center",
  alt = "",
}) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const isHome = variant === "home"

  useEffect(() => {
    setCurrentSrc(src)
  }, [src])

  useEffect(() => {
    const img = new Image()
    img.src = currentSrc
    img.onerror = () => {
      if (fallback && currentSrc !== fallback) {
        setCurrentSrc(fallback)
      }
    }
  }, [currentSrc, fallback])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <img
        key={currentSrc}
        src={currentSrc}
        alt={alt}
        fetchPriority="high"
        decoding="async"
        className={
          fit === "contain"
            ? `absolute inset-0 h-full w-full object-contain ${objectPosition}`
            : `absolute inset-0 h-full w-full object-cover ${objectPosition}`
        }
      />
      {!isHome && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      )}
    </div>
  )
}
