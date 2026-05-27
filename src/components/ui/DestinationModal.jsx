import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MapPin, Star, Clock, Check, ArrowRight } from "lucide-react"
import Button from "./Button"

export default function DestinationModal({ destination, onClose }) {
  const [imgSrc, setImgSrc] = useState(destination?.image)

  useEffect(() => {
    if (destination) {
      setImgSrc(destination.image)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [destination])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  const handleImageError = () => {
    if (
      destination?.imageFallback &&
      imgSrc !== destination.imageFallback
    ) {
      setImgSrc(destination.imageFallback)
    }
  }

  return (
    <AnimatePresence>
      {destination && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-navy/70 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="destination-modal-title"
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-elevated"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-52 sm:h-64 overflow-hidden rounded-t-3xl">
              <img
                src={imgSrc}
                alt={`${destination.name}, ${destination.country}`}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="ปิด"
              >
                <X size={20} />
              </button>

              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gold text-navy">
                {destination.tag}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h2
                    id="destination-modal-title"
                    className="font-display text-3xl sm:text-4xl font-semibold text-navy"
                  >
                    {destination.name}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-navy/60 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-brand-red" />
                      {destination.country}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={14} className="fill-gold text-gold" />
                      {destination.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {destination.duration}
                    </span>
                  </div>
                </div>
                <p className="font-display text-2xl font-bold text-brand-red shrink-0">
                  {destination.price}
                </p>
              </div>

              <p className="text-navy/70 leading-relaxed mb-6">
                {destination.description}
              </p>

              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-navy/40 mb-3">
                  ไฮไลท์ทริป
                </h3>
                <ul className="space-y-2.5">
                  {destination.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-navy/80 text-sm sm:text-base"
                    >
                      <span className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-navy" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="primary"
                  to="/contact"
                  onClick={onClose}
                  className="flex-1 justify-center"
                >
                  วางแผนทริปนี้
                  <ArrowRight size={16} />
                </Button>
                <Button
                  variant="outlineDark"
                  to="/promotions"
                  className="flex-1 justify-center"
                  onClick={onClose}
                >
                  ดูโปรโมชัน
                </Button>
              </div>

              <button
                onClick={onClose}
                className="w-full mt-4 py-2 text-sm text-navy/50 hover:text-navy transition-colors"
              >
                ปิด
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
