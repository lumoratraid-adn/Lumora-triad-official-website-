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
    <footer className="bg-background pt-32 pb-12 overflow-hidden border-t border-border/50 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          {/* BRAND COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link href="/" className="inline-block">
              <img src="/lumora2.svg" alt="Lumora Triad" className="h-12 w-auto" />
            </Link>
            <p className="text-[#053678]/70 dark:text-muted-foreground text-sm leading-relaxed max-w-xs font-medium">
              Designing experiences and developing digital solutions for businesses, startups, and students.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-2xl border border-[#C7D3E5] dark:border-border flex items-center justify-center text-[#053678] dark:text-muted-foreground hover:text-[#6A3A8F] hover:border-[#6A3A8F] dark:hover:text-primary dark:hover:border-primary transition-all duration-300 bg-white dark:bg-transparent"
                >
                  <Icon className="w-4 h-4" />
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
            <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#6A3A8F] dark:text-primary">Services</h5>
            <ul className="space-y-4">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-sm font-bold text-[#053678]/70 hover:text-[#053678] dark:text-muted-foreground dark:hover:text-foreground transition-colors"
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
            <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#6A3A8F] dark:text-primary">Navigation</h5>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-[#053678]/70 hover:text-[#053678] dark:text-muted-foreground dark:hover:text-foreground transition-colors"
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
            <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#6A3A8F] dark:text-primary">Contact</h5>
            <div className="space-y-4">
              <a
                href="mailto:hello@lumoratriad.com"
                className="flex items-center gap-3 text-sm font-bold text-[#053678]/70 hover:text-[#053678] dark:text-muted-foreground dark:hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-[#6A3A8F] dark:text-primary" />
                hello@lumoratriad.com
              </a>
              <a
                href="tel:+91994788418"
                className="flex items-center gap-3 text-sm font-bold text-[#053678]/70 hover:text-[#053678] dark:text-muted-foreground dark:hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-[#6A3A8F] dark:text-primary" />
                +91 99478 84418
              </a>
            </div>
          </motion.div>

        </div>

        {/* LARGE DISPLAY TEXT WITH GRADIENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mb-20 select-none pointer-events-none"
        >
          <span className="text-[12vw] font-serif font-black tracking-tighter leading-none bg-gradient-to-r from-[#053678]/10 via-[#053678]/20 to-[#053678]/10 dark:from-white/5 dark:via-white/15 dark:to-white/5 bg-clip-text text-transparent block text-center uppercase">
            Lumora Triad
          </span>
        </motion.div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-border/50">
          <p className="text-[10px] font-black text-muted-foreground tracking-[0.2em] uppercase">
            © {currentYear} Lumora Triad. All rights reserved.
          </p>
          <div className="flex gap-8 mt-6 md:mt-0 text-[10px] font-black text-muted-foreground tracking-[0.2em] uppercase">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
