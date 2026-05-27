import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import ScrollReveal from "./ScrollReveal"
import Button from "./Button"

export default function ServiceCard({ service, index = 0, detailed = false }) {
  const Icon = service.icon

  return (
    <ScrollReveal delay={index * 0.08}>
      <motion.div
        className="group relative bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-elevated transition-shadow duration-500 border border-navy/5 h-full flex flex-col"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mb-5 group-hover:from-brand-red group-hover:to-brand-red-dark transition-all duration-500">
          <Icon className="text-gold w-7 h-7" strokeWidth={1.5} />
        </div>

        <h3 className="font-display text-xl sm:text-2xl font-semibold text-navy mb-3">
          {service.title}
        </h3>

        <p className="text-navy/65 leading-relaxed flex-grow mb-6">
          {service.description}
        </p>

        {detailed ? (
          <Button variant="outlineDark" to={service.href} className="!px-5 !py-2.5 text-sm w-fit">
            ดูรายละเอียด
            <ArrowRight size={16} />
          </Button>
        ) : (
          <Link
            to={service.href}
            className="inline-flex items-center gap-2 text-brand-red font-medium text-sm group/link"
          >
            สำรวจ
            <ArrowRight
              size={16}
              className="transition-transform group-hover/link:translate-x-1"
            />
          </Link>
        )}
      </motion.div>
    </ScrollReveal>
  )
}
