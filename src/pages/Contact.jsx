import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import PageHero from "../components/layout/PageHero"
import ScrollReveal from "../components/ui/ScrollReveal"
import Button from "../components/ui/Button"
import { contact } from "../data/contact"
import { pageBackgrounds } from "../data/backgrounds"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="มาวางแผนการผจญภัยครั้งต่อไปกัน"
        subtitle="ไม่ว่าคุณจะมีคำถามหรือพร้อมจอง — ทีม Reservations Office พร้อมช่วยเหลือ"
        image={pageBackgrounds.contact}
        imageKey="contact"
      />

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                <h2 className="font-display text-2xl font-semibold text-navy mb-6">
                  ข้อมูลติดต่อ
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-brand-red" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-navy/40 font-medium mb-1">
                        {contact.officeName}
                      </p>
                      {contact.addressLines.map((line) => (
                        <p key={line} className="text-navy font-medium leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-brand-red" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-navy/40 font-medium mb-2">
                        โทรศัพท์
                      </p>
                      <div className="space-y-1">
                        {contact.phones.map((phone) => (
                          <a
                            key={phone.display}
                            href={`tel:${phone.tel}`}
                            className="block text-navy font-medium hover:text-brand-red transition-colors"
                          >
                            {phone.display}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-brand-red" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-navy/40 font-medium mb-1">
                        อีเมล
                      </p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-navy font-medium hover:text-brand-red transition-colors break-all"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-brand-red" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-navy/40 font-medium mb-2">
                        Office Hours
                      </p>
                      <div className="space-y-2">
                        {contact.hours.map((slot) => (
                          <div key={slot.label}>
                            <p className="text-navy font-semibold text-sm">{slot.label}</p>
                            <p className="text-navy/70 text-sm">{slot.time}</p>
                            <p className="text-navy/50 text-xs">
                              {slot.labelTh} · {slot.timeTh}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="rounded-3xl overflow-hidden aspect-video shadow-card">
                  <iframe
                    title="Gowander Reservations Office"
                    src="https://www.google.com/maps?q=Centro+Watcharapol+2+Sai+Mai+Bangkok&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.1} className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-soft border border-navy/5">
                <h2 className="font-display text-2xl font-semibold text-navy mb-2">
                  ส่งข้อความถึงเรา
                </h2>
                <p className="text-navy/60 text-sm mb-8">
                  กรอกแบบฟอร์มด้านล่าง เราจะติดต่อกลับภายในเวลาทำการ
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="font-display text-2xl text-navy font-semibold mb-2">
                      ส่งข้อความแล้ว!
                    </h3>
                    <p className="text-navy/60">
                      ขอบคุณที่ติดต่อเรา ทีมงานจะติดต่อกลับในเร็วๆ นี้
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1.5">
                          ชื่อ-นามสกุล
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                          placeholder="สมชาย ใจดี"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1.5">
                          อีเมล
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        หัวข้อ
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors bg-white"
                      >
                        <option value="general">สอบถามทั่วไป</option>
                        <option value="booking">จองเที่ยวบิน</option>
                        <option value="planning">วางแผนทริปส่วนตัว</option>
                        <option value="promotion">โปรโมชัน / แพ็กเกจ</option>
                        <option value="support">ฝ่ายสนับสนุน</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        ข้อความ
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                        placeholder="บอกเราเกี่ยวกับทริปในฝันของคุณ..."
                      />
                    </div>

                    <Button type="submit" variant="primary" className="w-full sm:w-auto">
                      ส่งข้อความ
                      <Send size={16} />
                    </Button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
