"use client"

import Link from "next/link"
import { Instagram, Twitter, Facebook } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-background pt-32 pb-12 overflow-hidden border-t border-border/50 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32"
        >
          <div className="space-y-8">
            <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">Contact</h5>
            <div className="space-y-4 font-bold text-sm">
              <p className="hover:text-primary transition-colors duration-300 cursor-pointer">hello@lumoratriad.com</p>
              <p className="hover:text-primary transition-colors duration-300 cursor-pointer">+91 994788418</p>
            </div>
          </div>

          <div className="space-y-8">
            <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">Services</h5>
            <ul className="space-y-4 font-bold text-sm">
              {["Web Development", "UI/UX Design", "Brand Identity"].map((item) => (
                <li key={item} className="hover:text-primary transition-colors duration-300 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">Quick Links</h5>
            <ul className="space-y-4 font-bold text-sm">
              {["About Us", "Our Process", "Success Stories"].map((item) => (
                <li key={item} className="hover:text-primary transition-colors duration-300 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 flex flex-col items-start md:items-end">
            <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">Social</h5>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <Icon
                  key={i}
                  className="w-5 h-5 hover:text-primary hover:scale-110 transition-all duration-300 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mb-20 overflow-hidden"
        >
          <span className="text-[10vw] font-black tracking-[-0.05em] leading-none text-foreground/[0.08] dark:text-foreground/[0.15] select-none block uppercase text-center font-sans">
            LUMORA TRIAD
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-border/50 text-[10px] font-black text-muted-foreground tracking-[0.2em] uppercase">
          <p>© 2025 LUMORA TRIAD. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link key={item} href="#" className="hover:text-primary transition-colors duration-300">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
