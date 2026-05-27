import { useState } from "react"
import { Send } from "lucide-react"
import { motion } from "framer-motion"
import ScrollReveal from "./ScrollReveal"

export default function Newsletter({ light = false }) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <ScrollReveal>
      <div
        className={`rounded-3xl p-8 sm:p-12 ${
          light
            ? "bg-white/10 backdrop-blur border border-white/20"
            : "bg-gradient-to-br from-navy to-navy-light shadow-elevated"
        }`}
      >
        <div className="max-w-xl mx-auto text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-3 text-white">
            ร่วมเดินทางไปกับเรา
          </h3>
          <p className="text-white/70 mb-6">
            ดีลพิเศษ แรงบันดาลใจในการเดินทาง และประสบการณ์คัดสรร — ส่งตรงถึงอีเมลของคุณ
          </p>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold font-medium"
            >
              ยินดีต้อนรับ! การผจญภัยครั้งต่อไปของคุณรออยู่แล้ว
            </motion.p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                placeholder="กรอกอีเมลของคุณ"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold text-navy font-semibold hover:bg-gold-light transition-colors"
              >
                สมัครรับข่าวสาร
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </ScrollReveal>
  )
}
