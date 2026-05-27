import { motion } from "framer-motion"
import { Timer } from "lucide-react"
import PageHero from "../components/layout/PageHero"
import SectionTitle from "../components/ui/SectionTitle"
import PromotionCard from "../components/ui/PromotionCard"
import ScrollReveal from "../components/ui/ScrollReveal"
import CountdownTimer from "../components/ui/CountdownTimer"
import Button from "../components/ui/Button"
import { promotions, seasonalCampaigns } from "../data/promotions"

const featured = promotions.filter((p) => p.featured)
const regular = promotions.filter((p) => !p.featured)

export default function Promotions() {
  const flashDeal = promotions.find((p) => p.isHotDeal) || promotions[0]

  return (
    <>
      <PageHero
        eyebrow="ดีลพิเศษ"
        title="โปรโมชันและแพ็กเกจท่องเที่ยว"
        subtitle="ดีลคัดสรรสำหรับพักผ่อนสุดหรู ทริปตามฤดูกาล และการผจญภัยครั้งหนึ่งในชีวิต"
        image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80"
      />

      <section className="py-12 bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(251,193,77,0.2)_0%,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <ScrollReveal className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                <Timer className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-gold text-xs font-bold uppercase tracking-widest">
                  แฟลชเซลใกล้หมดเวลา
                </span>
                <h2 className="font-display text-2xl sm:text-3xl text-white font-semibold">
                  {flashDeal.title}
                </h2>
                <p className="text-white/70 text-sm mt-1">
                  ประหยัด ฿{(flashDeal.originalPrice - flashDeal.salePrice).toLocaleString("th-TH")} — จำกัดจำนวนที่นั่ง
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <CountdownTimer endDate={flashDeal.endsAt} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="แนะนำ"
            title="โปรโมชันพักผ่อนสุดหรู"
            subtitle="แพ็กเกจยอดนิยมพร้อมส่วนลดพิเศษ"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featured.map((promo, i) => (
              <PromotionCard key={promo.id} promo={promo} index={i} large={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="ดีลเพิ่มเติม"
            title="แพ็กเกจท่องเที่ยวลดราคา"
            subtitle="แคมเปญตามฤดูกาลและข้อเสนอพิเศษสำหรับนักเดินทางทุกสไตล์"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regular.map((promo, i) => (
              <PromotionCard key={promo.id} promo={promo} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="ตามฤดูกาล"
            title="ไฮไลท์แคมเปญ"
            subtitle="คอลเลกชันตามธีมสำหรับทุกฤดูแห่งการผจญภัย"
            light
          />
          <div className="grid md:grid-cols-2 gap-8">
            {seasonalCampaigns.map((campaign, i) => (
              <ScrollReveal key={campaign.title} delay={i * 0.15}>
                <motion.div
                  className="group relative rounded-3xl overflow-hidden aspect-[16/10] cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-display text-2xl sm:text-3xl text-white font-semibold mb-2">
                      {campaign.title}
                    </h3>
                    <p className="text-white/70 mb-4">{campaign.description}</p>
                    <span className="inline-flex items-center gap-2 text-gold font-medium text-sm group-hover:gap-3 transition-all">
                      {campaign.cta} →
                    </span>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl text-navy font-semibold mb-4">
              หาไม่เจอใช่ไหม?
            </h2>
            <p className="text-navy/60 mb-8">
              สถาปนิกการเดินทางของเราสามารถสร้างแพ็กเกจส่วนตัวพร้อมราคาพิเศษเฉพาะคุณ
            </p>
            <Button variant="primary" to="/contact">
              ขอใบเสนอราคาส่วนตัว
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
