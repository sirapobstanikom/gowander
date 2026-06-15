import { motion } from "framer-motion"
import HeroBackground from "../ui/HeroBackground"
import { pageBackgroundFallbacks } from "../../data/backgrounds"

export default function PageHero({
  title,
  subtitle,
  image,
  eyebrow,
  imageKey,
  imageFit = "cover",
  tall = false,
}) {
  const fallback = imageKey ? pageBackgroundFallbacks[imageKey] : undefined

  return (
    <section
      className={`relative flex items-end overflow-hidden bg-neutral-900 ${
        tall ? "h-[70vh] min-h-[520px]" : "h-[55vh] min-h-[420px]"
      }`}
    >
      <HeroBackground
        src={image}
        fallback={fallback}
        variant="page"
        fit={imageFit}
        alt={title}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3 drop-shadow-md"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white max-w-3xl drop-shadow-lg"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-white/90 max-w-xl drop-shadow-md"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
