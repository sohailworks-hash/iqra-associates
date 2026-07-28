import {
  BookOpen,
  Building2,
  FileCheck2,
  ShieldCheck,
  Receipt,
  Users,
  Clock,
} from "lucide-react";

export const SITE = {
  name: "IQRA ASSOCIATES",
  tagline: "Smart Accounting & Tax Solutions",
  phone: "+91 9998199538",
  phoneHref: "tel:+919998199538",
  whatsapp: "9998199538",
  email: "iqra.associates23@gmail.com",
  address: "IQRA ASSOCIATES, 1st Floor, Commerce Plaza, C.G. Road, Navrangpura, Ahmedabad, Gujarat 380009",
  mapQuery: "C.G. Road, Navrangpura, Ahmedabad, Gujarat 380009",
  hours: "Mon-Sat 10:00 AM - 7:00 PM",
  founded: 2014,
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "GST Filing", href: "#gst" },
  { label: "Income Tax", href: "#income-tax" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const whatsappLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
