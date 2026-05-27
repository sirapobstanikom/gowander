export default function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-brand-red text-white",
    gold: "bg-gold text-navy",
    limited: "bg-brand-red text-white animate-pulse",
    outline: "border border-gold text-gold bg-transparent",
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
