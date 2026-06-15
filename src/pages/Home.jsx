import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Plane, Car, Map, Sparkles } from "lucide-react"
import Button from "../components/ui/Button"
import SectionTitle from "../components/ui/SectionTitle"
import ScrollReveal from "../components/ui/ScrollReveal"
import DestinationCard from "../components/ui/DestinationCard"
import DestinationModal from "../components/ui/DestinationModal"
import ServiceCard from "../components/ui/ServiceCard"
import Newsletter from "../components/ui/Newsletter"
import TestimonialSlider from "../components/ui/TestimonialSlider"
import StatCounter from "../components/ui/StatCounter"
import { destinations } from "../data/destinations"
import { services } from "../data/services"
import { reviews } from "../data/reviews"
import { pageBackgrounds, pageBackgroundFallbacks } from "../data/backgrounds"
import HeroBackground from "../components/ui/HeroBackground"

const homeServices = services.slice(0, 4)

const stats = [
  { label: "นักเดินทางที่พึงพอใจ", value: "12500", suffix: "+" },
  { label: "จุดหมายปลายทาง", value: "85", suffix: "+" },
  { label: "ไกด์ผู้เชี่ยวชาญ", value: "200", suffix: "+" },
  { label: "อัตราความพึงพอใจ", value: "99", suffix: "%" },
]

export default function Home() {
  const [selectedDestination, setSelectedDestination] = useState(null)

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
        <div className="absolute inset-0">
          <HeroBackground
            src={pageBackgrounds.home}
            fallback={pageBackgroundFallbacks.home}
            variant="home"
            objectPosition="object-[41%_center] md:object-[34%_center]"
            alt="ทิวทัศน์การเดินทาง"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-gold text-sm font-medium mb-6 drop-shadow-md"
          >
            <Sparkles size={16} />
            ท่องเที่ยวและไลฟ์สไตล์ระดับพรีเมียม
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.15] max-w-4xl mx-auto drop-shadow-lg"
          >
            <span className="text-gradient-gold italic">Flight Found Fast.</span>
            <br />
            Travel Made Easy.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            บริการจองตั๋วเครื่องบิน เช่ารถ และออกแบบประสบการณ์การเดินทาง
            <br className="hidden sm:block" />
            ที่ช่วยให้ทุกทริป{" "}
            <span className="text-gold font-medium">
              &ldquo;สะดวก คุ้มค่า และเต็มไปด้วยความหมาย&rdquo;
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="secondary" to="/promotions">
              สำรวจทริป
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline" to="/contact">
              วางแผนการเดินทาง
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-white/60 text-sm"
          >
            {[
              { icon: Plane, label: "เที่ยวบิน" },
              { icon: Car, label: "เช่ารถ" },
              { icon: Map, label: "วางแผนส่วนตัว" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={18} className="text-gold" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-gold"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="ค้นพบ"
            title="จุดหมายแนะนำ"
            subtitle="จุดหมายคัดสรรที่รวบรวมประสบการณ์ที่งดงามที่สุดของโลก"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((d, i) => (
              <DestinationCard
                key={d.id}
                destination={d}
                index={i}
                onSelect={setSelectedDestination}
              />
            ))}
          </div>
        </div>
      </section>

      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="สิ่งที่เรามอบให้"
            title="เพื่อนร่วมทางที่ครบทุกความต้องการ"
            subtitle="ตั้งแต่ขึ้นเครื่องจนลงจอด ทุกบริการออกแบบมาเพื่อความหรูหราที่ไร้รอยต่อ"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeServices.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
          <ScrollReveal className="text-center mt-12">
            <Button variant="outlineDark" to="/services">
              ดูบริการทั้งหมด
              <ArrowRight size={18} />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-red/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider mb-4">
                ข้อเสนอจำกัดเวลา
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">
                หลบหนีสู่เมดิเตอร์เรเนียนฤดูร้อน
              </h2>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                7 คืนแห่งความหรูหราแบบออลอินคลูซีฟทั่วกรีซและอิตาลี ประหยัดสูงสุด 24%
                สำหรับแพ็กเกจพรีเมียม — จำกัดจำนวนที่นั่ง
              </p>
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-white/40 line-through text-xl">฿115,000</span>
                <span className="font-display text-4xl font-bold text-gold">฿87,500</span>
              </div>
              <Button variant="secondary" to="/promotions">
                รับข้อเสนอนี้
                <ArrowRight size={18} />
              </Button>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden shadow-elevated aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
                  alt="ชายฝั่งเมดิเตอร์เรเนียน"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-brand-red text-white font-bold text-sm">
                  ลด 24%
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(213,40,42,0.1)_0%,_transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="เสียงจากลูกค้า"
            title="เรื่องราวจากนักเดินทางของเรา"
            subtitle="ประสบการณ์จริงจากผู้ที่เดินทางเลยขอบเขตความธรรมดา"
            light
          />
          <TestimonialSlider reviews={reviews.slice(0, 5)} />
          <ScrollReveal className="text-center mt-10">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium transition-colors"
            >
              อ่านรีวิวทั้งหมด
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-navy-light to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="ตัวเลขที่น่าเชื่อถือ"
            title="ได้รับความไว้วางใจจากนักเดินทางทั่วโลก"
            light
          />
          <StatCounter stats={stats} />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </>
  )
}
