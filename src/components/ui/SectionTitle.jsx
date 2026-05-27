import ScrollReveal from "./ScrollReveal"

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "center",
}) {
  const alignClass =
    align === "center"
      ? "text-center mx-auto"
      : align === "left"
        ? "text-left"
        : "text-right ml-auto"

  return (
    <ScrollReveal className={`max-w-2xl mb-12 lg:mb-16 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${
            light ? "text-gold" : "text-brand-red"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-white/75" : "text-navy/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  )
}
