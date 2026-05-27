import { Star } from "lucide-react"
import PageHero from "../components/layout/PageHero"
import SectionTitle from "../components/ui/SectionTitle"
import ReviewCard from "../components/ui/ReviewCard"
import TestimonialSlider from "../components/ui/TestimonialSlider"
import StatCounter from "../components/ui/StatCounter"
import ScrollReveal from "../components/ui/ScrollReveal"
import StarRating from "../components/ui/StarRating"
import Button from "../components/ui/Button"
import { reviews, reviewStats } from "../data/reviews"

const ratingBreakdown = [
  { stars: 5, percent: 92 },
  { stars: 4, percent: 6 },
  { stars: 3, percent: 1.5 },
  { stars: 2, percent: 0.3 },
  { stars: 1, percent: 0.2 },
]

export default function Reviews() {
  return (
    <>
      <PageHero
        eyebrow="เสียงจากลูกค้า"
        title="เรื่องราวจากนักเดินทางของเรา"
        subtitle="ประสบการณ์จริง อารมณ์จริง — ค้นพบว่าทำไมหลายพันคนจึงไว้วางใจ Gowander กับการเดินทางที่สำคัญที่สุด"
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
      />

      <section className="py-16 bg-white border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <StatCounter stats={reviewStats} light={false} />

            <ScrollReveal>
              <div className="bg-cream rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-center">
                    <span className="font-display text-5xl font-bold text-navy">4.9</span>
                    <StarRating rating={5} size={18} />
                    <p className="text-navy/50 text-sm mt-1">12,500+ รีวิว</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {ratingBreakdown.map((r) => (
                    <div key={r.stars} className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-sm text-navy/60 w-12">
                        {r.stars} <Star size={12} className="fill-gold text-gold" />
                      </span>
                      <div className="flex-1 h-2 bg-navy/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gold rounded-full transition-all duration-1000"
                          style={{ width: `${r.percent}%` }}
                        />
                      </div>
                      <span className="text-xs text-navy/40 w-10 text-right">
                        {r.percent}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1682687220063-4742bd6fd538?w=1200&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="แนะนำ"
            title="นักเดินทางโดดเด่น"
            light
          />
          <TestimonialSlider reviews={reviews} />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="รีวิวทั้งหมด"
            title="เรื่องราวและคำรับรองจากนักเดินทาง"
            subtitle="ทุกรีวิวคือเรื่องราวของการผจญภัย การค้นพบ และการเปลี่ยนแปลง"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ReviewCard key={review.id} review={review} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-semibold mb-4">
              พร้อมสร้างเรื่องราวของคุณแล้วหรือยัง?
            </h2>
            <p className="text-white/70 mb-8">
              ร่วมกับนักเดินทางหลายพันคนที่ค้นพบว่าการเดินทางที่ดีที่สุดคือการเดินทางที่เปลี่ยนคุณ
            </p>
            <Button variant="secondary" to="/contact">
              วางแผนประสบการณ์ของคุณ
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
