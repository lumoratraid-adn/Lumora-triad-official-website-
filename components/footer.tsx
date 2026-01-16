"use client"

import Link from "next/link"
import { Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  const serviceLinks = [
    "UI / UX Design",
    "Web Development",
    "App Development",
    "Branding & Motion",
  ]

  return (
    <footer className="bg-[#fafafa] pt-24 pb-12 overflow-hidden border-t border-black/5 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* BRAND COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Link href="/" className="inline-block">
              <img src="/logo.svg" alt="Lumora Triad" className="h-10 w-auto" />
            </Link>
            <p className="text-black/40 text-xs font-black uppercase tracking-[0.2em] leading-loose max-w-xs">
              Architecting high-performance digital solutions for visionaries.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 border border-black/5 flex items-center justify-center text-black/40 hover:bg-black hover:text-white transition-all duration-500"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* SERVICES COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h5 className="font-bebas text-2xl uppercase tracking-wider text-primary">Capabilities</h5>
            <ul className="space-y-4">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* NAVIGATION COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h5 className="font-bebas text-2xl uppercase tracking-wider text-primary">Sitemap</h5>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h5 className="font-bebas text-2xl uppercase tracking-wider text-primary">Contact</h5>
            <div className="space-y-4">
              <a
                href="mailto:hello@lumoratriad.com"
                className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                hello@lumoratriad.com
              </a>
              <a
                href="tel:+91994788418"
                className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 99478 84418
              </a>
            </div>
          </motion.div>

        </div>

        {/* LARGE DISPLAY TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mb-16 select-none pointer-events-none"
        >
          <span className="editorial-heading text-black/5 block text-center uppercase tracking-[0.05em] stroke-text">
            LUMORA TRIAD
          </span>
        </motion.div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-black/5">
          <p className="text-[10px] font-black text-black/20 tracking-[0.3em] uppercase">
            © {currentYear} <span className="text-primary">Lumora Triad</span>. Built for the bold.
          </p>
          <div className="flex gap-8 mt-6 md:mt-0 text-[10px] font-black text-black/20 tracking-[0.3em] uppercase">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
