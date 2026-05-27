import { motion } from "framer-motion"
import { Calendar, Tag } from "lucide-react"
import ScrollReveal from "./ScrollReveal"
import Badge from "./Badge"
import CountdownTimer from "./CountdownTimer"
import Button from "./Button"

export default function PromotionCard({ promo, index = 0, large = false }) {
  const savings = promo.originalPrice - promo.salePrice

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.article
        className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl bg-white shadow-card ${
          large ? "lg:col-span-2 lg:row-span-2" : ""
        }`}
        whileHover={{ y: -4 }}
      >
        <div className={`relative ${large ? "h-72 lg:h-full min-h-[320px]" : "h-52"}`}>
          <img
            src={promo.image}
            alt={promo.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

          <div className="absolute top-4 left-4 flex gap-2">
            <Badge variant={promo.isLimited ? "limited" : "gold"}>
              {promo.badge}
            </Badge>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-navy">
              -{promo.discount}%
            </span>
          </div>

          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-navy/80 backdrop-blur text-white text-xs flex items-center gap-1.5">
            <Tag size={12} className="text-gold" />
            {promo.season}
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-2 text-navy/50 text-xs mb-2">
            <Calendar size={12} />
            <CountdownTimer endDate={promo.endsAt} compact />
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-semibold text-navy mb-1">
            {promo.title}
          </h3>
          <p className="text-navy/60 text-sm mb-4">{promo.subtitle}</p>

          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="text-navy/40 line-through text-sm">
                ฿{promo.originalPrice.toLocaleString("th-TH")}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold text-brand-red">
                  ฿{promo.salePrice.toLocaleString("th-TH")}
                </span>
                <span className="text-xs text-green-600 font-medium">
                  ประหยัด ฿{savings.toLocaleString("th-TH")}
                </span>
              </div>
            </div>
            <Button variant="primary" to="/promotions" className="!px-4 !py-2 text-xs shrink-0">
              จองเลย
            </Button>
          </div>
        </div>
      </motion.article>
    </ScrollReveal>
  )
}
