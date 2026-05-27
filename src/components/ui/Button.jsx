import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const variants = {
  primary:
    "bg-brand-red text-white hover:bg-brand-red-dark shadow-lg shadow-brand-red/25",
  secondary:
    "bg-gold text-navy hover:bg-gold-light shadow-lg shadow-gold/25",
  outline:
    "border-2 border-white/80 text-white hover:bg-white hover:text-navy",
  outlineDark:
    "border-2 border-navy/20 text-navy hover:bg-navy hover:text-white",
  ghost: "text-navy hover:bg-navy/5",
}

export default function Button({
  children,
  variant = "primary",
  to,
  href,
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-colors duration-300"

  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={classes} onClick={onClick} {...props}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
