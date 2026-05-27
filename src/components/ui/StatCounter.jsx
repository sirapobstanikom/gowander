import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import ScrollReveal from "./ScrollReveal"

function AnimatedNumber({ value, suffix = "", light = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState("0")

  const colorClass = light ? "text-gold" : "text-navy"

  useEffect(() => {
    if (!isInView) return

    const cleaned = String(value).replace(/,/g, "")
    const numericMatch = cleaned.match(/[\d.]+/)
    if (!numericMatch) {
      setDisplay(value)
      return
    }

    const target = parseFloat(numericMatch[0])
    const prefix = value.slice(0, value.indexOf(numericMatch[0]))
    const postfix = value.slice(value.indexOf(numericMatch[0]) + numericMatch[0].length)
    const isDecimal = cleaned.includes(".")
    const duration = 2000
    const start = performance.now()

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = target * eased
      setDisplay(
        prefix +
          (isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString()) +
          postfix
      )
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isInView, value])

  return (
    <span ref={ref} className={`font-display text-4xl sm:text-5xl font-bold ${colorClass}`}>
      {display}
      {suffix}
    </span>
  )
}

export default function StatCounter({ stats, light = true }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      {stats.map((stat, i) => (
        <ScrollReveal key={stat.label} delay={i * 0.1}>
          <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
            <AnimatedNumber value={stat.value} suffix={stat.suffix} light={light} />
            <p
              className={`mt-2 text-sm uppercase tracking-widest ${
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
