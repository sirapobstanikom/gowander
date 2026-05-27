import {
  Plane,
  Car,
  Map,
  Hotel,
  Compass,
  Shield,
} from "lucide-react"

export const services = [
  {
    id: "flights",
    title: "จองเที่ยวบิน",
    description:
      "เข้าถึงชั้นพรีเมียม ราคายืดหยุ่น และเส้นทางหลายเมืองที่ออกแบบให้เหมาะกับตารางเวลาของคุณ",
    icon: Plane,
    href: "/services",
  },
  {
    id: "cars",
    title: "เช่ารถ",
    description:
      "ตั้งแต่รถหรูไปจนถึง SUV สำหรับผจญภัย — ขับด้วยความมั่นใจผ่านพาร์ทเนอร์ทั่วโลกที่เราคัดสรร",
    icon: Car,
    href: "/services",
  },
  {
    id: "planning",
    title: "วางแผนทริปส่วนตัว",
    description:
      "สถาปนิกการเดินทางของเราออกแบบทริปเฉพาะตัวที่สะท้อนความหลงใหล จังหวะชีวิต และความฝันของคุณ",
    icon: Map,
    href: "/services",
  },
  {
    id: "hotels",
    title: "แนะนำที่พัก",
    description:
      "โรงแรมบูติกและรีสอร์ท 5 ดาวที่คัดสรร เพื่อยกระดับทุกช่วงเวลาของการเดินทาง",
    icon: Hotel,
    href: "/services",
  },
  {
    id: "experiences",
    title: "แพ็กเกจประสบการณ์ท้องถิ่น",
    description:
      "ทัวร์ส่วนตัว การผจญภัยด้านอาหาร และการแช่ตัวในวัฒนธรรมที่คัดสรรโดยผู้เชี่ยวชาญท้องถิ่น",
    icon: Compass,
    href: "/services",
  },
  {
    id: "insurance",
    title: "บริการประกันการเดินทาง",
    description:
      "คำแนะนำความคุ้มครองที่ครอบคลุม เพื่อให้คุณเดินทางอย่างสบายใจในทุกจุดหมาย",
    icon: Shield,
    href: "/services",
  },
]
