import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import ScrollReveal from "./ScrollReveal"

function parseStatValue(value) {
  const str = String(value).trim()
  const cleaned = str.replace(/,/g, "")
  const match = cleaned.match(/^(\d+(?:\.\d+)?)/)
  if (!match) return null

  return {
    target: parseFloat(match[1]),
    isDecimal: match[1].includes("."),
  }
}

function formatNumber(num, isDecimal) {
  if (isDecimal) return num.toFixed(1)
  return Math.floor(num).toLocaleString("en-US")
}

function AnimatedNumber({ value, suffix = "", light = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const parsed = parseStatValue(value)
  const [display, setDisplay] = useState(
    parsed ? formatNumber(0, parsed.isDecimal) : String(value)
  )

  const colorClass = light ? "text-gold" : "text-navy"

  useEffect(() => {
    if (!isInView || !parsed) {
      if (!parsed) setDisplay(String(value))
      return
    }

    const { target, isDecimal } = parsed
    const duration = 2000
    const start = performance.now()
    let frameId

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(formatNumber(target * eased, isDecimal))
      if (progress < 1) frameId = requestAnimationFrame(animate)
    }

    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [isInView, value])

  return (
    <div
      ref={ref}
      className={`font-display text-4xl sm:text-5xl font-bold tabular-nums leading-none ${colorClass}`}
    >
      <span className="inline-block min-h-[1.2em]">
        {display}
        {suffix}
      </span>
    </div>
  )
}

export default function StatCounter({ stats, light = true }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      {stats.map((stat, i) => (
        <ScrollReveal key={stat.label} delay={i * 0.1}>
          <motion.div className="text-center px-2" whileHover={{ scale: 1.05 }}>
            <AnimatedNumber value={stat.value} suffix={stat.suffix} light={light} />
            <p
              className={`mt-3 text-sm uppercase tracking-widest leading-snug ${
                light ? "text-white/60" : "text-navy/50"
              }`}
            >
              {stat.label}
            </p>
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
  )
}
