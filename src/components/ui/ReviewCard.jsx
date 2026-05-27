import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import ScrollReveal from "./ScrollReveal"
import StarRating from "./StarRating"

export default function ReviewCard({ review, index = 0 }) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <motion.article
        className="bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 shadow-soft border border-navy/5 h-full flex flex-col"
        whileHover={{ y: -4, boxShadow: "0 20px 60px -15px rgb(2 48 74 / 0.15)" }}
      >
        <Quote className="text-gold/60 w-8 h-8 mb-4" strokeWidth={1.5} />

        <StarRating rating={review.rating} />

        <p className="text-navy/75 leading-relaxed my-5 flex-grow italic">
          &ldquo;{review.text}&rdquo;
        </p>

        <div className="flex items-center gap-4 pt-4 border-t border-navy/10">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-gold/30"
            loading="lazy"
          />
          <div>
            <h4 className="font-semibold text-navy">{review.name}</h4>
            <p className="text-sm text-navy/50">{review.role}</p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-navy/40">
          <span>{review.destination}</span>
          <span>{review.date}</span>
        </div>
      </motion.article>
    </ScrollReveal>
  )
}
