import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { MapPin, Star, ArrowUpRight } from "lucide-react"
import ScrollReveal from "./ScrollReveal"

export default function DestinationCard({ destination, index = 0, onSelect }) {
  const [imgSrc, setImgSrc] = useState(destination.image)

  useEffect(() => {
    setImgSrc(destination.image)
  }, [destination.image])

  const handleImageError = () => {
    if (destination.imageFallback && imgSrc !== destination.imageFallback) {
      setImgSrc(destination.imageFallback)
    }
  }

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.article
        role="button"
        tabIndex={0}
        onClick={() => onSelect?.(destination)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            onSelect?.(destination)
          }
        }}
        className="group relative overflow-hidden rounded-2xl lg:rounded-3xl aspect-[3/4] cursor-pointer shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        aria-label={`ดูรายละเอียด ${destination.name}, ${destination.country}`}
      >
        <img
          src={imgSrc}
          alt={`${destination.name}, ${destination.country}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold/90 text-navy">
            {destination.tag}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <div className="flex items-center gap-1 text-gold mb-2">
            <Star size={14} className="fill-gold" />
            <span className="text-sm text-white/90">{destination.rating}</span>
          </div>
          <h3 className="font-display text-2xl font-semibold text-white mb-1">
            {destination.name}
          </h3>
          <div className="flex items-center gap-1.5 text-white/70 text-sm mb-3">
            <MapPin size={14} />
            {destination.country}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gold font-semibold">{destination.price}</span>
            <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-colors">
              <ArrowUpRight size={18} className="text-white group-hover:text-navy" />
            </span>
          </div>
          <p className="text-white/50 text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
            แตะเพื่อดูรายละเอียด
          </p>
        </div>
      </motion.article>
    </ScrollReveal>
  )
}
