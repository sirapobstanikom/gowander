import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="bg-white rounded-2xl shadow-elevated p-4 max-w-[240px] border border-navy/5"
              >
                <p className="text-sm text-navy font-medium mb-2">
                  พร้อมสำหรับการผจญภัยครั้งต่อไปหรือยัง?
                </p>
                <p className="text-xs text-navy/60 mb-3">
                  ให้ผู้เชี่ยวชาญของเราออกแบบทริปที่สมบูรณ์แบบสำหรับคุณ
                </p>
                <Link
                  to="/contact"
                  className="block w-full text-center py-2 rounded-full bg-brand-red text-white text-sm font-semibold hover:bg-brand-red-dark transition-colors"
                >
                  เริ่มวางแผน
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => setExpanded(!expanded)}
            className="w-14 h-14 rounded-full bg-brand-red text-white shadow-lg shadow-brand-red/30 flex items-center justify-center hover:bg-brand-red-dark transition-colors"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label={expanded ? "ปิดแชท" : "วางแผนทริป"}
          >
            {expanded ? <X size={22} /> : <MessageCircle size={22} />}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
