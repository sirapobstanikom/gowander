import { Star } from "lucide-react"

export default function StarRating({ rating = 5, size = 16 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} จาก 5 ดาว`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < Math.floor(rating)
              ? "fill-gold text-gold"
              : "fill-none text-navy/20"
          }
        />
      ))}
    </div>
  )
}
