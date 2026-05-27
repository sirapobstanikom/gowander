import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import StarRating from "./StarRating"

export default function TestimonialSlider({ reviews }) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length)
  }, [reviews.length])

  const prev = () => {
    setCurrent((p) => (p - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const review = reviews[current]

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4 sm:px-12"
        >
          <Quote className="w-10 h-10 text-gold mx-auto mb-6" strokeWidth={1.5} />
          <StarRating rating={review.rating} />
          <p className="font-display text-xl sm:text-2xl lg:text-3xl text-white/90 leading-relaxed my-6 italic">
            &ldquo;{review.text}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-gold"
            />
            <div className="text-left">
              <p className="font-semibold text-white">{review.name}</p>
              <p className="text-sm text-white/60">
                {review.destination} · {review.date}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          aria-label="รีวิวก่อนหน้า"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-gold" : "w-2 bg-white/30"
              }`}
              aria-label={`ไปที่รีวิวที่ ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          aria-label="รีวิวถัดไป"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
