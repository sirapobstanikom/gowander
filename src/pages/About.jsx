import { Heart, Globe, Shield, Users } from "lucide-react"
import PageHero from "../components/layout/PageHero"
import SectionTitle from "../components/ui/SectionTitle"
import ScrollReveal from "../components/ui/ScrollReveal"
import Button from "../components/ui/Button"
import { milestones } from "../data/milestones"
import { pageBackgrounds } from "../data/backgrounds"

const values = [
  {
    icon: Heart,
    title: "เน้นประสบการณ์",
    description:
      "ทุกการเดินทางออกแบบรอบช่วงเวลาที่มีความหมาย — ไม่ใช่แค่จุดหมาย แต่คือความทรงจำตลอดชีวิต",
  },
  {
    icon: Globe,
    title: "เชื่อมต่อทั่วโลก",
    description:
      "เครือข่ายของเราครอบคลุมกว่า 85 จุดหมาย พร้อมพาร์ทเนอร์ท้องถิ่นที่แบ่งปันความหลงใหลในการเดินทางอย่างแท้จริง",
  },
  {
    icon: Shield,
    title: "ความไว้วางใจและความปลอดภัย",
    description:
      "ตั้งแต่คำแนะนำประกันไปจนถึงการสนับสนุน 24 ชม. ความสบายใจของคุณอยู่ในทุกรายละเอียด",
  },
  {
    icon: Users,
    title: "สัมผัสส่วนตัว",
    description:
      "สถาปนิกการเดินทางที่รับฟัง เข้าใจ และออกแบบทริปที่ไม่ซ้ำใครเหมือนตัวคุณ",
  },
]

const team = [
  {
    name: "อเล็กซานดรา รีด",
    role: "ผู้ก่อตั้งและซีอีโอ",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    quote: "การเดินทางเปลี่ยนชีวิตฉัน Gowander มีอยู่เพื่อแบ่งปันการเปลี่ยนแปลงนั้น",
  },
  {
    name: "มาร์คัส แทน",
    role: "หัวหน้าฝ่ายประสบการณ์",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    quote: "ทริปที่ดีที่สุดไม่ได้ถูกวางแผน — แต่ถูกสัมผัส เราออกแบบเพื่อความรู้สึก",
  },
  {
    name: "โซเฟีย โลร็องต์",
    role: "สถาปนิกการเดินทางหรู",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    quote: "นักเดินทางทุกคนสมควรได้รับทริปที่รู้สึกเหมือนสร้างมาเพื่อตนเอง",
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="ผู้ให้บริการด้านการเดินทางครบวงจร"
        subtitle="ผสมผสานความสะดวกของการเดินทาง เข้ากับการสร้างประสบการณ์ที่แตกต่างและน่าจดจำ"
        image={pageBackgrounds.about}
        imageKey="about"
        imagePosition="object-[15%_center] md:object-center"
        tall
      />

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <SectionTitle
                eyebrow="เรื่องราวแบรนด์"
                title="เกี่ยวกับ Gowander"
                align="left"
              />
              <div className="space-y-5 text-navy/70 leading-relaxed -mt-8 text-base sm:text-lg">
                <p>
                  <strong className="text-navy font-semibold">Gowander</strong> คือผู้ให้บริการด้านการเดินทางครบวงจร
                  ที่ผสมผสานความสะดวกของการเดินทาง เข้ากับการสร้างประสบการณ์ที่แตกต่างและน่าจดจำ
                </p>
                <p>
                  เราให้บริการด้านการจองตั๋วเครื่องบิน รถเช่า รวมถึงการออกแบบเส้นทางและประสบการณ์ท่องเที่ยว
                  ที่ตอบโจทย์ทั้งนักเดินทางทั่วไป กลุ่มองค์กร และผู้ที่มองหาการเดินทางในรูปแบบใหม่
                </p>
                <p>
                  เพราะเราเชื่อว่าทุกการเดินทางควร{" "}
                  <span className="text-brand-red font-medium">
                    สะดวก คุ้มค่า และเต็มไปด้วยความหมาย
                  </span>{" "}
                  — ตามสโลแกนของเรา{" "}
                  <span className="text-navy font-medium italic">
                    &ldquo;Flight Found Fast. Travel Made Easy.&rdquo;
                  </span>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden shadow-elevated aspect-[4/5]">
                <img
                  src="https://onrojzovngqbtxdpxcaq.supabase.co/storage/v1/object/public/pic/Beyond%20Experience%20Trip.png"
                  alt="นักเดินทางมองทิวทัศน์"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy to-transparent">
                  <p className="font-display text-2xl text-white italic">
                    &ldquo;Flight Found Fast.
                    <br />
                    Travel Made Easy.&rdquo;
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 h-full">
                <span className="text-gold text-xs font-semibold uppercase tracking-widest">
                  พันธกิจของเรา
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white font-semibold mt-3 mb-4">
                  ยกระดับทุกการเดินทาง
                </h3>
                <p className="text-white/65 leading-relaxed">
                  ทำให้ประสบการณ์การเดินทางระดับพรีเมียมเข้าถึงได้ — เที่ยวบิน ที่พัก
                  และการวางแผนส่วนตัวระดับโลก โดยไม่ลดทอนคุณภาพและการดูแล
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-brand-red/20 to-gold/10 border border-gold/20 h-full">
                <span className="text-gold text-xs font-semibold uppercase tracking-widest">
                  วิสัยทัศน์ของเรา
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white font-semibold mt-3 mb-4">
                  นิยามการเดินทางยุคใหม่
                </h3>
                <p className="text-white/65 leading-relaxed">
                  เป็นแพลตฟอร์มท่องเที่ยวที่เน้นประสบการณ์และได้รับความไว้วางใจมากที่สุด —
                  ที่เทคโนโลยีพบกับความอบอุ่นของมนุษย์ และทุกการเดินทางเชื่อมโยงคุณกับโลกใบนี้
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="ปรัชญาของเรา"
            title="หลักการที่นำทางทุกการเดินทาง"
            subtitle="หลักการที่กำหนดวิธีที่เราออกแบบ ส่งมอบ และสร้างความประทับใจ"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mx-auto mb-5">
                    <v.icon className="w-8 h-8 text-brand-red" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy mb-2">
                    {v.title}
                  </h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="ทีมงาน Gowander"
            title="ปรัชญาการเดินทางของเรา"
            subtitle="พบกับทีมที่เปลี่ยนความอยากเที่ยวให้เป็นความมหัศจรรย์"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-soft group">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-navy">
                      {member.name}
                    </h3>
                    <p className="text-brand-red text-sm font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-navy/60 text-sm italic">&ldquo;{member.quote}&rdquo;</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="เส้นทางของเรา" title="เหตุการณ์สำคัญ" />
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-navy/10 sm:-translate-x-px" />
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 0.1}>
                <div
                  className={`relative flex items-start gap-8 mb-12 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="hidden sm:block sm:w-1/2" />
                  <div
                    className={`sm:w-1/2 pl-12 sm:pl-0 ${
                      i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                    }`}
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-gold/20 text-navy text-sm font-bold mb-2">
                      {m.year}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-navy mb-2">
                      {m.title}
                    </h3>
                    <p className="text-navy/60 text-sm leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-brand-red ring-4 ring-brand-red/20 -translate-x-1.5 sm:-translate-x-1.5 top-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-brand">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-semibold mb-4">
              พร้อมเขียนเรื่องราวของคุณแล้วหรือยัง?
            </h2>
            <p className="text-white/70 mb-8">
              ให้สถาปนิกการเดินทางของเราออกแบบทริปที่เป็นตัวคุณอย่างแท้จริง
            </p>
            <Button variant="secondary" to="/contact">
              เริ่มการเดินทางของคุณ
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
