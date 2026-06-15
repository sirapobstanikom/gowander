import { ArrowRight } from "lucide-react"
import PageHero from "../components/layout/PageHero"
import SectionTitle from "../components/ui/SectionTitle"
import ServiceCard from "../components/ui/ServiceCard"
import ScrollReveal from "../components/ui/ScrollReveal"
import Button from "../components/ui/Button"
import { services } from "../data/services"
import { pageBackgrounds } from "../data/backgrounds"

const process = [
  { step: "01", title: "บอกความฝันของคุณ", desc: "แชร์วิสัยทัศน์ ความชอบ และสไตล์การเดินทางกับผู้เชี่ยวชาญของเรา" },
  { step: "02", title: "เราออกแบบทริป", desc: "สถาปนิกของเราสร้างแผนการเดินทางเฉพาะตัวที่เหมาะกับคุณ" },
  { step: "03", title: "ตรวจสอบและปรับแต่ง", desc: "ร่วมมือกันจนกว่าทุกรายละเอียดจะรู้สึกสมบูรณ์แบบ" },
  { step: "04", title: "สัมผัสและสำรวจ", desc: "เดินทางอย่างมั่นใจ — เราดูแลทุกอย่างเบื้องหลังให้คุณ" },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="บริการของเรา"
        title="ทุกสิ่งที่คุณต้องการสำหรับทริปที่สมบูรณ์แบบ"
        subtitle="บริการท่องเที่ยวครบวงจรที่ออกแบบด้วยความหรูหรา ความสะดวก และการปรับแต่งเป็นหัวใจ"
        image={pageBackgrounds.services}
        imageKey="services"
      />

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="สิ่งที่เรามอบให้"
            title="บริการท่องเที่ยวระดับพรีเมียม"
            subtitle="ตั้งแต่การจองจนถึงขึ้นเครื่อง ทุกจุดสัมผัสออกแบบมาเพื่อความเป็นเลิศ"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} detailed />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="ขั้นตอนการทำงาน"
            title="การเดินทางของคุณเริ่มที่นี่"
            subtitle="กระบวนการ 4 ขั้นตอนที่ราบรื่น ตั้งแต่ความฝันจนถึงวันออกเดินทาง"
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.1}>
                <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 h-full hover:bg-white/10 transition-colors">
                  <span className="font-display text-5xl font-bold text-gold/20 absolute top-4 right-4">
                    {p.step}
                  </span>
                  <h3 className="font-display text-xl text-white font-semibold mb-3 relative">
                    {p.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed relative">
                    {p.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-navy to-navy-light p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="absolute inset-0 opacity-10">
                <img
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative max-w-lg">
                <h2 className="font-display text-3xl sm:text-4xl text-white font-semibold mb-3">
                  ยังไม่แน่ใจว่าจะเริ่มจากตรงไหน?
                </h2>
                <p className="text-white/70">
                  นัดปรึกษาฟรีกับสถาปนิกการเดินทางของเรา แล้วปล่อยให้เราออกแบบทริปในฝันให้คุณ
                </p>
              </div>
              <Button variant="secondary" to="/contact" className="relative shrink-0">
                ปรึกษาฟรี
                <ArrowRight size={18} />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
