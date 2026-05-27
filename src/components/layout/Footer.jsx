import { Link } from "react-router-dom"
import { Compass, Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"
import { contact } from "../../data/contact"

const footerLinks = {
  Explore: [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/" },
    { name: "Promotion", path: "/promotions" },
    { name: "Review", path: "/reviews" },
  ],
  Services: [
    { name: "Flight Booking", path: "/services" },
    { name: "Car Rentals", path: "/services" },
    { name: "Travel Planning", path: "/services" },
    { name: "Experience Packages", path: "/services" },
  ],
  Company: [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "/contact" },
    { name: "Privacy Policy", path: "/contact" },
  ],
}

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
                <Compass className="w-5 h-5 text-gold" />
              </div>
              <span className="font-display text-2xl font-bold">Gowander</span>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-sm mb-6">
              <span className="block font-display text-lg text-white/90 mb-2 italic">
                Flight Found Fast. Travel Made Easy.
              </span>
              บริการจองตั๋วเครื่องบิน เช่ารถ และออกแบบประสบการณ์การเดินทาง
              ที่ช่วยให้ทุกทริปสะดวก คุ้มค่า และเต็มไปด้วยความหมาย
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-gold mb-4 text-sm uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8 text-sm text-white/50">
          <div className="flex items-start gap-2">
            <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
            <div>
              <p className="text-gold/80 font-medium mb-1">{contact.officeName}</p>
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Phone size={16} className="text-gold shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              {contact.phones.map((phone) => (
                <a
                  key={phone.display}
                  href={`tel:${phone.tel}`}
                  className="block hover:text-white transition-colors"
                >
                  {phone.display}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Mail size={16} className="text-gold shrink-0 mt-0.5" />
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-white transition-colors break-all"
            >
              {contact.email}
            </a>
          </div>
          <div className="flex items-start gap-2">
            <Clock size={16} className="text-gold shrink-0 mt-0.5" />
            <div className="space-y-1">
              {contact.hours.map((slot) => (
                <p key={slot.label}>
                  <span className="text-white/70">{slot.label}:</span> {slot.time}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Gowander สงวนลิขสิทธิ์</p>
          <p className="italic text-gold/60">
            Flight Found Fast. Travel Made Easy.
          </p>
        </div>
      </div>
    </footer>
  )
}
